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
