import KanbanBoard from '@/components/kanban_components/KanbanBoard'
import KanbanUpdates from '@/components/kanban_components/KanbanUpdates'
import RepoDetails from '@/components/kanban_components/RepoDetails'
import React from 'react'
import { createClient } from '@/lib/supabase/server'

export default async function page({params}: {params: {repo: [
  username: string,
  repo: string
]}}) {
const supabase = createClient()
 const [username, repo] = params.repo
 console.log(username, repo)
 async function getRepoDetails() {
  const { data, error } = await supabase.from("Repos").select().eq("repo_owner", username).eq("repo_name", repo)
  if (error) {
    console.log(error)
    return
  }
  const repoDetails = data[0]
  return repoDetails
 }
  const repoDetails = await getRepoDetails()

  
  return (
    <div className="grid grid-cols-12 grid-rows-5 gap-4 flex-grow m-8 mt-0 rounded-2xl">
      <div className="col-span-9 row-span-5 col-start-4 row-start-1 bg-purple-300 rounded-lg"><KanbanBoard/></div>
      <div className="col-span-3 row-span-2 col-start-1 row-start-1 bg-pink-300 rounded-lg"><RepoDetails details={repoDetails}/></div>
      <div className="col-span-3 row-span-3 row-start-3 bg-teal-300 rounded-lg"><KanbanUpdates/></div>
    </div>
  )
}
