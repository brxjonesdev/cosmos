import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function CosmosPomodoro() {
  return (
    <Card className='bg-blue-400 h-full'>
        <CardHeader>
            <CardTitle>
              Start a new Pomodoro?
            </CardTitle>
            <CardDescription>
              The Pomodoro Technique is a time management method that uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.
            </CardDescription>
        </CardHeader>
        <CardContent>
        <p>Work</p>
            <p>Break</p>
            <p>Work</p>
        </CardContent>
        <CardFooter>
            <button>Start</button>
        </CardFooter>
    </Card>
  )
}
