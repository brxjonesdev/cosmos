import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function QuickIssuesList() {
{/*
  Issues will pull data from the Github API
  We will get all issues that are assigned to the user, we might have to add an "auto-assign" feature.
  

*/}
  return (
    <Card className='bg-green-400 h-full'>
        <CardHeader>
            <CardTitle>Quick Issues</CardTitle>
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
