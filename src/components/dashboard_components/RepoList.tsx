import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function RepoList() {
  return (
    <Card className='bg-black h-full'>
        <CardHeader>
            <CardTitle>Repo List</CardTitle>
        </CardHeader>
        <CardContent>
        <p>Issue 1</p>
            <p>Issue 2</p>
            <p>Issue 3</p>
        </CardContent>
        <CardFooter>
            <button>View all</button>
        </CardFooter>
    </Card>
  )
}
