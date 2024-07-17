import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { createClient } from '@/lib/supabase/server'
  

export default async function RepoDetails({username, repo}: {username: string, repo: string}) {
  const supabase = createClient()
  const { data, error } = await supabase.from("Repos").select().eq("repo_owner", username).eq("repo_name", repo)
  if (error) {
    console.log(error)
    return
  }
  const repoDetails = data[0]
  return (
    <Card className='h-full'>
  <CardHeader>
    <CardTitle></CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

  )
}
