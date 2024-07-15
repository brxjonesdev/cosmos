import Navbar from '@/components/dashboard_components/Navbar';
import React from 'react'

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <section className='min-h-screen flex flex-col'>
        <Navbar/>
        <section className='flex-grow flex flex-col items-center w-full'>
        {children}
        </section>
    </section>
  )
}
