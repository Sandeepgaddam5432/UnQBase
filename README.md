# UnQBase

Welcome to UnQBase, an AI-powered, full-stack web development environment. This project is maintained by Sandeep Gaddam.

---

## Features

- **AI-Powered Development**: Build, test, and iterate on your web applications with a modern, chat-first UX.
- **Multi-Provider Support**: Seamlessly switch between local and cloud LLM providers.
- **Project Scaffolding**: Import Git repositories or start from popular templates.
- **Integrated Workbench**: A complete environment with a code editor, preview, and terminal.

---

## ? Local Installation & Setup

### 1. Clone the Repository
git clone https://github.com/Sandeepgaddam5432/UnQBase.git
cd UnQBase

### 2. Install Dependencies
This project uses pnpm as the package manager.
pnpm install

### 3. Configure Environment Variables
Rename `.env.example` to `.env.local` and add your provider API keys.
mv .env.example .env.local

### 4. Run the Development Server
pnpm run dev

---

## ? Docker Deployment

### Development
To build and run the development container with hot-reloading:
docker compose --profile development up --build

### Production
To build and run a production-ready container:
docker compose --profile production up --build

---

## ?? Deploy to Cloudflare Pages

This project is optimized for Cloudflare Pages.

### 1. Build the Project
pnpm run build

### 2. Deploy via Wrangler
Ensure you have Wrangler CLI installed and configured. Then run:
pnpm run deploy

---

## ? Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---
