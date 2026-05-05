# Hyperchain Project - Landing Page

Ekosistem digital terintegrasi. Stack: Next.js 16, React 19, TypeScript, Three.js, Framer Motion, GSAP, Neon DB, Prisma 7, Cloudflare Pages.

## Development

pnpm install
pnpm dev

## Build

pnpm build
# Output: out/ directory

## Deployment

1. Push ke GitHub
2. Cloudflare Pages -> Connect to Git
3. Build command: next build
4. Output directory: out
5. Set DATABASE_URL di Cloudflare Dashboard -> Settings -> Environment Variables

## Database (Neon)

1. Buat project di Neon Console
2. Copy pooled connection string
3. pnpm prisma migrate dev --name init
