import React from 'react';
import Navbar from '@/components/dashboard_components/Navbar';

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-dvh ">
      <Navbar />
      {children}
    </section>
  );
}
