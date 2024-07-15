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
  return (
    <Card className='bg-red-400 h-full'>
        <CardHeader>
            <CardTitle>Create Update</CardTitle>
            <CardDescription>Create repo updates manually or with CosmosAI</CardDescription>
        </CardHeader>
        <CardContent>
       <Button>AI!</Button>
        </CardContent>
    </Card>
  )
}
