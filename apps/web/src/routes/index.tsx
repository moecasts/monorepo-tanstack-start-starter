import { Button } from '@repo/ui/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Getting started</h1>
        <p className="mt-2 text-zinc-500">Built with TanStack Start</p>
        <div className="mt-4">
          <Button>Click me</Button>
        </div>
      </div>
    </div>
  );
}
