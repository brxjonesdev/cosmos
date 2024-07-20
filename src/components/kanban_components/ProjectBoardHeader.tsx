"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
  import { Toggle } from "@/components/ui/toggle"
  import { useSearchParams } from 'next/navigation'
  import { usePathname } from 'next/navigation'
  import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function ProjectBoardHeader() {
    const project = {
        name: 'I love Irene!',
        description: `
         A very long description of the project that spans multiple lines.
         This is a test of the card description component.
         I love Irene from Red Velvet.
        `,
      };
      const router = useRouter()
      const pathname = usePathname()
      const searchParams = useSearchParams()

      const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )
      const toggleView = () => {
        const view = searchParams.get('view')
        const newView = view === 'kanban' ? 'list' : 'kanban'
        const newQueryString = createQueryString('view', newView)
        router.push(`${pathname}?${newQueryString}`)
      }
      const setPriority = (priority: string) => {
        if (searchParams.get('priority') === priority) {
          const newQueryString = createQueryString('priority', 'noPriority')
          router.push(`${pathname}?${newQueryString}`)
        }
        const newQueryString = createQueryString('priority', priority)
        router.push(`${pathname}?${newQueryString}`)
      }
  return (
    <div className="flex">
        <CardHeader className="p-6">
          <CardTitle>{project.name}</CardTitle>
          <CardDescription className="max-w-[500px]">
            {project.description}
          </CardDescription>
        </CardHeader>
        <div className="w-0.5 my-2 bg-black/5 mx-6 rounded-2xl" />
        <CardHeader className="p-6 my-auto">
          <CardTitle>You have 4 tasks due today!</CardTitle>
          <CardDescription>And 0 updates since last summary</CardDescription>
        </CardHeader>
        <div className="w-0.5 my-2 bg-black/5 mx-6 rounded-2xl" />
        <div className="flex-grow pr-6 pt-3 space-y-4">
          <ToggleGroup type="single" className='justify-between gap-2' onValueChange={
            (value) => setPriority(value)
          }>
            <ToggleGroupItem value="1" className='w-full bg-red-100 data-[state=on]:bg-red-400' >Priority 1</ToggleGroupItem>
            <ToggleGroupItem value="2" className='w-full bg-yellow-100 data-[state=on]:bg-yellow-400 '>Priority 2</ToggleGroupItem>
            <ToggleGroupItem value="3" className='w-full bg-blue-100 data-[state=on]:bg-blue-400'>Priority 3</ToggleGroupItem>
          </ToggleGroup>
          <div className='flex gap-2'>
          <Toggle className='bg-gray-100 w-full'>{`A -> Z`}</Toggle>
          <Toggle className='bg-green-100 w-full hover:bg-green-400 data-[state=on]:bg-green-100' onPressedChange={
            () => toggleView()
          } >View {
            searchParams.get('view') === 'kanban' ? 'List' : 'Kanban'
          }</Toggle>
          </div>
        </div>
      </div>
  )
}
