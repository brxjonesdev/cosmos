"use client"
import React from 'react'
import { SimpleRepo } from '@/types/repos'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '../ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import  Link  from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'



  

export default function Repo(repo: SimpleRepo) {
  const supabase = createClient()
  const router = useRouter()
  let buttonStatus = "Connect this repo to Cosmos"
 async function handleAddRepo() {
  // Check if the repo is already in the database, if it is, throw an error. It shouldn't be common since the only ones shown are the ones that are not in the database.
  // If it's not in the database, add it to the database.
  // If everything goes well, redirect to the dashboard.
  const { data, error } = await supabase.from("Repos").select().eq("repo_owner", repo.owner).eq("repo_name", repo.name)
  if (error) {
    console.log(error)
    return
  }
  if (data.length > 0) {
    console.log("Repo already in database")
    return
  }
  const { data: repoData, error: repoError } = await supabase.from("Repos").insert([{repo_owner: repo.owner, repo_name: repo.name, repo_description: repo.description}])  
  if (repoError) {
    console.log(repoError)
    return
  }
  router.push(`/home/board/${repo.owner}/${repo.name}`)
 }

  return (
    <Card>
        <CardHeader>
            <CardTitle className='text-lg'>{repo.name}</CardTitle>
            <CardDescription className='italic'>{repo.description ? repo.description : "no project description"}</CardDescription>
        </CardHeader>
        <CardFooter>
        <Button 
          className='bg-black/80 w-full'
          onClick={
            async () => {
              await handleAddRepo()
            }
          }
          >
            {buttonStatus}
          </Button>

        </CardFooter>
    </Card>
  )
}
