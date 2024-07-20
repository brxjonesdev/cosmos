import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function KanbanUpdates() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Repo Updates</CardTitle>
        <CardDescription>
          Commits, PRs, and Issues will be shown here, if you have Cosmos
          installed in your repo.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow bg-black/10 mx-6 mb-6 rounded-xl flex items-center justify-center">
        <div>
          <p className="text-black/30">No updates yet. Go code something!</p>
        </div>
      </CardContent>
    </Card>
  );
}
