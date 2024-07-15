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
  

export default function Repo(repo: SimpleRepo) {
  return (
    <Card>
        <CardHeader>
            <CardTitle>{repo.name}</CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription>{repo.description}</CardDescription>
        </CardContent>
        <CardFooter>
            <p>Updated {repo.lastUpdate.description}</p>
        </CardFooter>
    </Card>
  )
}
