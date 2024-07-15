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
  const notifications = []
  return (
    <Card className='h-full flex flex-col'>
        <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>View your latest notifications here.</CardDescription>
        </CardHeader>
        <CardContent className='overflow-y-scroll flex-grow border-2 m-6 mt-0 space-y-4 py-6 bg-black/10 rounded-md'>
        {notifications.length === 0 &&
        <div className='text-center text-lg h-full flex flex-col items-center justify-center'>
          <p className='text-sm text-black/30'>No Notifications Yet. Stay tuned!</p>
          </div>}
        </CardContent>
    </Card>
  )
}
