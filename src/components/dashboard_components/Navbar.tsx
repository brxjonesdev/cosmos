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
import  Link  from 'next/link'

  
  

export default function Navbar() {
  return (
    <section className='flex items-center px-4 justify-between mt-2 mb-4 mx-3'>
        <Link href='/home/dashboard'>
        <p className='font-cosmic text-4xl text-white tracking-wider hover:text-purple-300'>Cosmos</p>
        </Link>

      

    

    </section>
  )
}
