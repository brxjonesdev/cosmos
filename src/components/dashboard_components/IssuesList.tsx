import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { createClient } from '@/lib/supabase/server'


{/*
  Users will be shown there selected queue of issues. We will get these from Supabase.

*/}
  

export default async function QuickIssuesList() {

const issues = []




  return (
    <Card className='h-full flex flex-col'>
        <CardHeader>
            <CardTitle className='text-3xl'>Today's Queue</CardTitle>
            <CardDescription>You have no tasks in your queue.</CardDescription>
        </CardHeader>
        <CardContent className='bg-black/10 py-6 m-6 mt-0 flex-grow rounded-lg'>
        {issues.length === 0 && 
        <div className='text-center text-lg h-full flex flex-col items-center justify-center'>
          <p className='text-sm text-black/30'>{"All done for now!  :)"}</p>
          </div>}
        </CardContent>
    </Card>
  )
}
