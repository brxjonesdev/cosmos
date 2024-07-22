'use client';
import React from 'react';
import Kanban from './board_views/Kanban';
import List from './board_views/List';
import ProjectBoardHeader from './ProjectBoardHeader';
import { useSearchParams } from 'next/navigation';

export default function KanbanBoard() {
  const searchParams = useSearchParams();
  const view = searchParams.get('view');
  console.log(view);
  const styles = {
    kanban: '',
    list: '',
  };

  const state = true;
  return (
    <section className="bg-white h-full rounded-xl flex flex-col p-4 w-full ">
      <ProjectBoardHeader />
      <div className="h-0.5 bg-black/5 rounded-2xl my-4" />
      <section
        className={`h-full  bg-black/10 rounded-b-xl rounded-t-sm overflow-x-auto ${view === 'kanban' ? styles.kanban : styles.list}`}
      >
        {view === 'kanban' ? <Kanban /> : <List />}
      </section>
    </section>
  );
}
