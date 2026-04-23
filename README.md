# Wedding Website

A beautiful wedding website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Photo gallery with Cloudflare Worker backend
- Admin panel for managing content
- Modern UI with shadcn/ui components

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Frontend (Cloudflare Pages)
1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Add environment variables from `.env.example`

### Backend (Cloudflare Workers)
```bash
cd worker
npm install
npm run deploy
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

- `VITE_API_BASE`: Your Cloudflare Worker URL