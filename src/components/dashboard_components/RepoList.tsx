import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {SimpleRepo} from "@/types/type_index"
  import { createClient } from '@/lib/supabase/server'
  import { redirect } from 'next/navigation'
import Repo from '../OOCs/repo'
import { Button } from '../ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"






{/*
  Using this component, users can view a list of their repositories.
  these cards link to thier kanban boards, and display the last update to the repository.
*/}




  

export default async function RepoList() {
  const supabase = createClient()
  const { data: user, error } = await supabase.auth.getUser()
  if (error || !user) {
    redirect('/')
  }
  

async function getGithubRepos() {
  let { data: sessionData, error: sessionError } = await supabase.auth.getSession();
  if (sessionError) {
    console.log(sessionError)
    return []
  }
  if(sessionData.session?.provider_token) {
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
        'Authorization': `Bearer ${sessionData.session.provider_token}`
      }
    })
    if (response.ok) {
      const data = await response.json()
      return data
  }
  
 return []
} else {
  // refresh the session
  if (sessionData?.session) {
    const { error: refreshError } = await supabase.auth.refreshSession({
      refresh_token: sessionData.session.refresh_token
    })
    if (refreshError) {
      console.log(refreshError)
      return []
    }
  }
}
}
async function getDatabaseRepos() {
  const { data, error } = await supabase.from("Repos").select().eq("repo_owner", user?.user?.user_metadata?.user_name)
  if (error) {
    console.log(error)
    return []
  }
  return data
}
const githubRepos = await getGithubRepos()
const databaseRepos = await getDatabaseRepos()

const condensedRepos : SimpleRepo[] = githubRepos.map((repo: any) => {
  return {
    name: repo.name,
    description: repo.description,
    owner: repo.owner.login,
    origin: "github"
  }
})
const CosmosRepos = {
  githubRepos: condensedRepos,
  databaseRepos: databaseRepos
}


  return (
    <Card className='h-full flex flex-col border-none bg-white'>
      <div className='flex justify-between'>
        <CardHeader className='pb-0'>
            <CardTitle className='text-3xl'>Welcome In, {user.user.user_metadata.name} <span className='text-sm font-normal'>{`( ${user.user.user_metadata.user_name} )`}</span></CardTitle>
            <CardDescription className=''>You have {CosmosRepos.databaseRepos.length !== 0 ? CosmosRepos.databaseRepos.length : "no" } repo{CosmosRepos.databaseRepos.length == 1 ? "" : "s"} connected to Cosmos. </CardDescription>
        </CardHeader>
        <CardContent className='py-0 self-end '>
            
        </CardContent>
        </div>
        <CardContent className='overflow-y-scroll flex-grow border-2 m-6 space-y-4 py-6 bg-black/10 rounded-md max-h-[700px] '>
          <h2 className='font-medium'>
            Connected Repos
          </h2>
        {CosmosRepos.databaseRepos.map((repo: any) => {
          return <Repo key={repo.repo_name} repo={repo} />
        })}
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Unconnected Repos</AccordionTrigger>
    <AccordionContent className='space-y-4'>
    {CosmosRepos.githubRepos.map((repo: SimpleRepo) => {
          return <Repo key={repo.name} repo={repo} />
        })}
    </AccordionContent>
  </AccordionItem>
</Accordion>

        
        {CosmosRepos.githubRepos.length === 0 && CosmosRepos.databaseRepos.length === 0 &&
        <div className='text-center text-lg h-full flex flex-col items-center justify-center'>
          <p className='text-sm text-black/30'>No Repos Available</p>
          </div>}
        </CardContent>
    </Card>
  )
}
