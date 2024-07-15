import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {SimpleRepo} from "@/types/type_index"
  import { createClient } from '@/lib/supabase/server'
  import { fetchGithubRepos } from '@/utils/github'
  import { redirect } from 'next/navigation'
import Repo from '../OOCs/repo'
import { Button } from '../ui/button'



{/*
  Using this component, users can view a list of their repositories.
  these cards link to thier kanban boards, and display the last update to the repository.
*/}

type GitHubRepository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: string | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};


  

export default async function RepoList() {
  const supabase = createClient()
  const { data: user, error } = await supabase.auth.getUser()
  if (error || !user) {
    redirect('/')
  }
  const CosmosRepos: SimpleRepo[] = [

  ]
  return (
    <Card className='h-[500px] flex flex-col border-none bg-white'>
      <div className='flex justify-between'>
        <CardHeader className='pb-0'>
            <CardTitle className='text-3xl'>Welcome In, User</CardTitle>
            <CardDescription className=''>You have {CosmosRepos.length !== 0 ? CosmosRepos.length : "no" } repo{CosmosRepos.length == 1 ? "" : "s"} connected to Cosmos. </CardDescription>
        </CardHeader>
        <CardContent className='py-0 self-end '>
            <Button className='bg-black/80' >Connect Repo to Cosmos</Button>
        </CardContent>
        </div>
        <CardContent className='overflow-y-scroll flex-grow border-2 m-6 space-y-4 py-6 bg-black/10 rounded-md '>
        {CosmosRepos.map((repo) => (
          <Repo {...repo} key={repo.name} /> 
        ))}
        {CosmosRepos.length === 0 && 
        <div className='text-center text-lg h-full flex flex-col items-center justify-center'>
          <p className='text-sm text-black/30'>No Repos Available</p>
          </div>}
        </CardContent>
    </Card>
  )
}
