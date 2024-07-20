"use client"
import React from 'react';
import Kanban from './board_views/Kanban';
import List from './board_views/List';
import ProjectBoardHeader from './ProjectBoardHeader';
import { useSearchParams } from 'next/navigation'

export default function KanbanBoard() {
  const searchParams = useSearchParams()
  const view = searchParams.get('view')
  console.log(view)

  const state =  true
  return (
    <section className="bg-white h-full rounded-xl flex flex-col">
      <ProjectBoardHeader/>
      <div className="h-0.5 bg-black/5 mx-6 rounded-2xl mb-4" />
      <section className='flex-grow mx-6 mb-4'>
      {view === 'kanban' ? <Kanban /> : <List />}
      </section>
    </section>
  );
}
