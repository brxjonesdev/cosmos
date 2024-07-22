import KanbanBoard from '@/components/kanban_components/ProjectBoard';
import KanbanUpdates from '@/components/kanban_components/ProjectUpdates';
import RepoDetails from '@/components/kanban_components/RepoDetails';
import React from 'react';
import { createClient } from '@/lib/supabase/server';

export default async function page({
  params,
}: {
  params: { repo: [username: string, repo: string] };
}) {
  const supabase = createClient();
  const [username, repo] = params.repo;
  console.log(username, repo);
  async function getRepoDetails() {
    const { data, error } = await supabase
      .from('Repos')
      .select()
      .eq('repo_owner', username)
      .eq('repo_name', repo);
    if (error) {
      console.log(error);
      return;
    }
    const repoDetails = data[0];
    return repoDetails;
  }
  const repoDetails = await getRepoDetails();

  return (
    <div className="gap-4 mx-8 mb-8 rounded-2xl flex h-dvh">
      <KanbanBoard />
    </div>
  );
}
