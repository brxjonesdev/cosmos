import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"

  

export default function CosmosAIButton() {
  const updates = []
  return (
    <Card className=' h-full flex flex-col'>
        <CardHeader>
            <CardTitle className='text-3xl'>Create Update</CardTitle>
            <CardDescription>Create repo updates manually or with CosmosAI</CardDescription>
        </CardHeader>
        <CardContent className='overflow-y-scroll flex-grow border-2 m-6 mt-0 space-y-4 py-6 bg-black/10 rounded-md'>
        {updates.length === 0 && 
        <div className='text-center text-lg h-full flex flex-col items-center justify-center'>
          <p className='text-sm text-black/30'>No Updates Yet. Go code something!</p>
          </div>}
        </CardContent>
    </Card>
  )
}
