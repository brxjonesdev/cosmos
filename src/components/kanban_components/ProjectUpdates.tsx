import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function KanbanUpdates() {
  const styles = {
    noUpdates: '',
    updates: '',
  };
  const updates = [
    {
      title: 'Update 1',
      description: 'This is a test of the card description component.',
      content: 'Content goes here',
    },
  ];
  return (
    <section className="bg-black/5 px-1 py-2 rounded-xl ">
      <div className="flex items-center h-full gap-3">
        <Badge className="bg-purple-300 min-w-fit p-2">New Commit</Badge>
        <p className="text-sm  text-black/50">
          This is a long example of a commit message that spans multiple lines.
        </p>
      </div>
    </section>
  );
}
