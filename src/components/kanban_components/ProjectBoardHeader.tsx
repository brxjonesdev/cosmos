'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import Kanban from './board_views/Kanban';
import KanbanUpdates from './ProjectUpdates';
import { Button } from '../ui/button';
import { Switch } from '@/components/ui/switch';

export default function ProjectBoardHeader() {
  const project = {
    name: 'I love Irene!',
    description: `
         A very long description of the project that spans multiple lines.
         This is a test of the card description component.
         I love Irene from Red Velvet.
        `,
  };
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const toggleView = () => {
    const view = searchParams.get('view');
    const newView = view === 'kanban' ? 'list' : 'kanban';
    const newQueryString = createQueryString('view', newView);
    router.push(`${pathname}?${newQueryString}`);
  };
  const setPriority = (priority: string) => {
    if (searchParams.get('priority') === priority) {
      const newQueryString = createQueryString('priority', 'noPriority');
      router.push(`${pathname}?${newQueryString}`);
    }
    const newQueryString = createQueryString('priority', priority);
    router.push(`${pathname}?${newQueryString}`);
  };
  return (
    <div className="flex gap-4 flex-wrap p-2 justify-between">
      <div className="flex items-center gap-3 flex-wrap max-w-[800px]">
        <CardTitle>{project.name}</CardTitle>
        <div className="flex gap-2 flex-col">
          <CardDescription>{project.description}</CardDescription>
          <KanbanUpdates />
        </div>
      </div>
      <div className="self-end flex gap-3 justify-between w-full xl:w-fit max-w-[800px]">
      <ToggleGroup
          type="single"
          className="justify-between gap-2"
          onValueChange={(value) => setPriority(value)}
        >
          <ToggleGroupItem
            value="1"
            className="w-full bg-red-100 data-[state=on]:bg-red-400 hover:bg-red-200 "
          >
            P1
          </ToggleGroupItem>
          <ToggleGroupItem
            value="2"
            className=" bg-yellow-100 data-[state=on]:bg-yellow-400 hover:bg-yellow-200  "
          >
            P2
          </ToggleGroupItem>
          <ToggleGroupItem
            value="3"
            className="w-full bg-blue-100 data-[state=on]:bg-blue-400 hover:bg-blue-200 "
          >
            P3
          </ToggleGroupItem>
        </ToggleGroup>
        <Toggle
          onPressedChange={(pressed) => {
            toggleView();
          }}
          className={`
          data-[state=on]:bg-purple-300 
          data-[state=off]:bg-purple-300
          text-black
          hover:text-black/75
          `}
        >
          View {searchParams.get('view') === 'kanban' ? 'Kanban' : 'List'}
        </Toggle>
      </div>
    </div>
  );
}