import React from 'react'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import RepoList from '@/components/dashboard_components/RepoList';
import QuickIssuesList from '@/components/dashboard_components/IssuesList';
import CosmosAIButton from '@/components/dashboard_components/CosmosAIButton';
import Notifications from '@/components/dashboard_components/Notifications';
import CosmosPomodoro from '@/components/dashboard_components/CosmosPomodoro';

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


export default async function DashboardHomepage() {
  const supabase = createClient()
  const { data: user, error } = await supabase.auth.getUser()
  if (error || !user) {
    redirect('/')
  }
  // async function getGitHubData() {
  //   const { data, error } = await supabase.auth.getSession()
  //   if (error) {
  //     throw new Error(error.message)
  //   }
  //   const accessToken = data.session?.provider_token
  //   if (!accessToken) {
  //     throw new Error('No access token found')
  //   }
  //   const response = await fetch('https://api.github.com/users/brxjonesdev/repos', {
  //     headers: {
  //       Authorization: `token ${accessToken}`,
  //     },
  //   })
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch GitHub data')
  //   }
  //   const githubData = await response.json()
  //   return githubData
  // }
  // const githubData: GitHubRepository[] = await getGitHubData()
  
  // console.log(githubData.map((repo) => repo.name))
  return (
    
    <div className="grid grid-cols-12 grid-rows-7 gap-4 w-full flex-grow pb-8 px-4">
    <div className="col-span-6 row-span-4"><RepoList/></div>
    <div className="col-span-3 row-span-3 col-start-1 row-start-5"><CosmosAIButton/></div>
    <div className="col-span-6 row-span-3 col-start-7 row-start-1"><QuickIssuesList/></div>
    <div className="col-span-5 row-span-3 col-start-4 row-start-5"><Notifications/></div>
    <div className="col-span-4 row-span-4 col-start-9 row-start-4"><CosmosPomodoro/></div>
</div>
  )
}
