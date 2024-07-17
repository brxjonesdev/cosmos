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
  const CosmosRepos: SimpleRepo[] = [

  ]

  return (
    <Card className='h-full flex flex-col border-none bg-white'>
      <div className='flex justify-between'>
        <CardHeader className='pb-0'>
            <CardTitle className='text-3xl'>Welcome In, {user.user.user_metadata.name} <span className='text-sm font-normal'>{`( ${user.user.user_metadata.user_name} )`}</span></CardTitle>
            <CardDescription className=''>You have {CosmosRepos.length !== 0 ? CosmosRepos.length : "no" } repo{CosmosRepos.length == 1 ? "" : "s"} connected to Cosmos. </CardDescription>
        </CardHeader>
        <CardContent className='py-0 self-end '>
            
        </CardContent>
        </div>
        <CardContent className='overflow-y-scroll flex-grow border-2 m-6 space-y-4 py-6 bg-black/10 rounded-md '>
        {CosmosRepos.map((repo) => (
          <Repo {...repo} key={repo.name} /> 
        ))}
        {CosmosRepos.length === 0 && 
        <div className='text-center text-lg h-full flex flex-col items-center justify-center'>
          <p className='text-sm text-black/30'>No Repos Available</p>
          </div>}
        </CardContent>
    </Card>
  )
}
