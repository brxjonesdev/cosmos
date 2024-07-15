"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { createClient } from '@/lib/supabase/client'


export default function LoginButton() {
  const supabase = createClient()
  return (

      <Button 
      variant="outline"
      onClick={async() => {
        await supabase.auth.signInWithOAuth({
          provider: "github",
          options: {
            redirectTo: "http://localhost:3000/auth/callback"
          }
        })
      }}
      >Login</Button>


  )
}
