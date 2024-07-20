'use client';
import React from 'react';
import { SimpleRepo } from '@/types/repos';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function Repo({ repo }: { repo: SimpleRepo }) {
  return (
    <Card
      className={`${repo.origin === 'github' ? 'border border-gray-300' : 'border-2 border-purple-300'}`}
    >
      <CardHeader className="pb-1">
        <CardTitle className="text-lg">{repo.name || repo.repo_name}</CardTitle>
        <CardDescription className="italic">
          {repo.description ? repo.description : repo.repo_description}
        </CardDescription>
      </CardHeader>
      <div className="px-6">
        {repo.origin === 'github' ? (
          <Button variant={'link'} className="px-0 text-xs italic">
            Connect Repo to Cosmos
          </Button>
        ) : (
          <div className="py-3 flex flex-col  text-xs italic gap-2">
            <p>Repo is connected to Cosmos</p>
            <Link
              href={`
        /home/board/${repo.owner || repo.repo_owner}/${repo.repo_name}?view=kanban&priority=none
        `}
              className="hover:text-purple-300"
            >
              {`View Board ->`}
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
}
