import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function Notifications() {
  return (
    <Card className='bg-purple-400 h-full'>
        <CardHeader>
            <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
        <p>Notification 1</p>
            <p>Notification 2</p>
            <p>Notification 3</p>
        </CardContent>
        <CardFooter>
            <button>View all</button>
        </CardFooter>
    </Card>
  )
}
