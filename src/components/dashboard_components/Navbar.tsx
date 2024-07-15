import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"

  
  

export default function Navbar() {
  return (
    <section className='flex items-center px-4 border-2 mb-4 justify-between'>
        <div className='flex gap-2'>
        {/* <div className='bg-purple-400 rounded-sm flex items-center justify-center'>
            <div className='p-1 text-xs'>
                Icon
            </div>
        </div>
        <div>
            <p className='font-cosmic text-3xl'>Cosmos</p>
        </div> */}
        </div>
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Home</NavigationMenuTrigger>
      <NavigationMenuContent>
        <Card>
            <CardHeader>
                <CardTitle >
                    This is an average card title
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                Welcome to the dashboard
                </CardDescription>
            </CardContent>
        </Card>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>ISK yet</NavigationMenuTrigger>
      <NavigationMenuContent>
        <Card>
            <CardHeader>
                <CardTitle>Item Two</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                Item Two
                </CardDescription>
            </CardContent>
        </Card>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
      <NavigationMenuContent>
        <Card>
            <CardHeader>
                <CardTitle>User Settings</CardTitle>
            </CardHeader>
            <CardContent>
                <Button>Logout</Button>
            </CardContent>
        </Card>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

    </section>
  )
}
