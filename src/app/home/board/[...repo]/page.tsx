import KanbanBoard from '@/components/kanban_components/KanbanBoard'
import KanbanUpdates from '@/components/kanban_components/KanbanUpdates'
import RepoDetails from '@/components/kanban_components/RepoDetails'
import React from 'react'

export default function page({params}: {params: {repo: [
  username: string,
  repo: string
]}}) {
 const [username, repo] = params.repo
 console.log(username, repo)
  
  return (
    <div className="grid grid-cols-12 grid-rows-5 gap-4 flex-grow m-8 mt-0 rounded-2xl">
      <div className="col-span-9 row-span-5 col-start-4 row-start-1 bg-purple-300 rounded-lg"><KanbanBoard/></div>
      <div className="col-span-3 row-span-2 col-start-1 row-start-1 bg-pink-300 rounded-lg"><RepoDetails username={username} repo={repo}/></div>
      <div className="col-span-3 row-span-3 row-start-3 bg-teal-300 rounded-lg"><KanbanUpdates/></div>
    </div>
  )
}
