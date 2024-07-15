import Navbar from '@/components/dashboard_components/Navbar';
import React from 'react'
import CosmosAIButton from '@/components/dashboard_components/CosmosAIButton';
import CosmosPomodoro from '@/components/dashboard_components/CosmosPomodoro';

export default function DashboardLayout({
    children,
    repos,
    issues,
    notifications,
  }: Readonly<{
    children: React.ReactNode;
    issues: React.ReactNode;
    notifications: React.ReactNode;
    repos: React.ReactNode;
  }>) {                                             
  return (
    <section className='flex flex-col max-h-screen'>
        <Navbar/>
  <section className=''>
<div className="grid grid-cols-12 grid-rows-7 gap-4 px-8">
    <div className="col-span-6 row-span-4">{repos}</div>
    <div className="col-span-3 row-span-3 col-start-1 row-start-5"><CosmosAIButton/></div>
    <div className="col-span-6 row-span-3 col-start-7 row-start-1">{issues}</div>
    <div className="col-span-5 row-span-3 col-start-4 row-start-5">{notifications}</div>
    <div className="col-span-4 row-span-4 col-start-9 row-start-4"><CosmosPomodoro/></div>
</div>
        </section>
    </section>
  )
}
