# Monorepo Tanstack Start Starter

A modern React starter built on Turborepo, powered by TanStack Start, Biome, shadcn/ui, Lefthook, and Vitest.

## Tech Stack

| Category        | Tool                                                                            |
| --------------- | ------------------------------------------------------------------------------- |
| Framework       | [TanStack Start](https://tanstack.com/start) + [React 19](https://react.dev)    |
| Build           | [Vite](https://vite.dev) + [Turborepo](https://turborepo.dev)                   |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) |
| Lint & Format   | [Biome](https://biomejs.dev)                                                    |
| Git Hooks       | [Lefthook](https://lefthook.dev)                                                |
| Testing         | [Vitest](https://vitest.dev)                                                    |
| Package Manager | [pnpm](https://pnpm.io)                                                         |

## Structure

```
monorepo-tanstack-start-starter/
├── apps/
│   └── web/              # TanStack Start app (Vite + React)
│       └── src/
│           ├── routes/   # File-based routing
│           ├── router.tsx
│           └── app.css
├── packages/
│   ├── ui/               # Shared UI components (shadcn/ui)
│   │   └── src/
│   │       ├── components/ui/
│   │       ├── hooks/
│   │       └── lib/
│   └── typescript-config/ # Shared tsconfig presets
├── biome.json
├── lefthook.yml
├── turbo.json
└── pnpm-workspace.yaml
```

## Getting Started

```sh
# Install dependencies
pnpm install

# Start dev server (port 3000)
pnpm dev

# Build all packages
pnpm build

# Run linting
pnpm lint

# Fix lint & format issues
pnpm format

# Type check across the monorepo
pnpm check-types
```

## Adding shadcn/ui Components

Components are installed into `packages/ui`:

```sh
pnpm dlx shadcn@latest add button
```

## Scripts

| Script             | Description                  |
| ------------------ | ---------------------------- |
| `pnpm dev`         | Start all apps in dev mode   |
| `pnpm build`       | Build all apps and packages  |
| `pnpm lint`        | Run Biome lint               |
| `pnpm format`      | Fix lint & format with Biome |
| `pnpm check-types` | TypeScript type checking     |

## Requirements

- Node.js >= 18
- pnpm 9

## License

[MIT](./LICENSE)
