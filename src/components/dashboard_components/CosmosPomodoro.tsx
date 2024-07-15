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
            <CardTitle>Pomodoro</CardTitle>
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
