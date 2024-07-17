import React from 'react'

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
  import { Button } from "@/components/ui/button"

  
  

export default function Navbar() {
  return (
    <section className='flex items-center px-4 justify-between mt-2 mb-4 mx-3'>
        <p className='font-cosmic text-4xl text-white tracking-wider'>Cosmos</p>
        <Popover>
  <PopoverTrigger
  className='rounded-sm flex items-center justify-center p-2 font-cosmic text-white text-lg underline hover:text-purple-300 hover:bg-white/20'
  >Menu</PopoverTrigger>
  <PopoverContent>
    <CardDescription>
        setingss
    </CardDescription>
    </PopoverContent>
</Popover>

    

    </section>
  )
}
