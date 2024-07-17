import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function ShamelessPlug() {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-purple-300 rounded-xl'>
        <p className='text-sm text-black/80'>
            Created by @brxjonesdev
        </p>
    </div>

  )
}
