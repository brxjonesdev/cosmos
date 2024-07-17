import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


export default async function RepoDetails({details}: {details: {
  id: number,
  created_at: string,
  repo_name: string,
  repo_owner: string,
  repo_description: string
}}) {
 
  return (
    <Card className='h-full'>
  <CardHeader>
    <CardTitle>
     {details.repo_name}
    </CardTitle>
    <CardDescription>
      {details.repo_owner}
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>{details.repo_description}</p>
  </CardContent> 
</Card>

  )
}
