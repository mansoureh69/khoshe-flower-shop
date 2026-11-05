# Khosheh Flower Shop (Next.js)

Clean Next.js 15 + Tailwind CSS frontend for **Khosheh Flower Shop** (خوشه), connected to the existing ASP.NET Core backend.

**Backend repository:** https://github.com/mansoureh69/Flower-shop

## Features

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS with the elegant design system (ivory, blush, rose, sage)
- RTL + Persian language ready
- API client ready for your ASP.NET endpoints (`/api/auth`, `/api/products`, `/api/carts`, `/api/orders`)
- Beautiful home page matching the design package style

## Getting Started

### 1. Install dependencies

```bash
cd khosheh-flower-shop
npm install
```

### 2. Configure API connection

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://localhost:7185
```

(Use your real ASP.NET backend URL)

### 3. Run the backend first

In the original repository (`Flower-shop`):

```bash
dotnet run --project Flower-shop.Server
```

### 4. Run the Next.js frontend

```bash
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
  app/               # Next.js App Router pages
  components/        # Header, Footer, etc.
  lib/api.ts         # API client for ASP.NET backend
public/              # Static assets (put logo here)
```

## Deploy to Vercel

1. Push this folder to a new GitHub repository
2. Import the repo in Vercel
3. Set environment variable `NEXT_PUBLIC_API_URL` to your production API URL
4. Deploy

## Next Steps

- [ ] Add real product photos and logo
- [ ] Complete Shop / Product / Cart pages
- [ ] Connect login & cart fully to the ASP.NET API
- [ ] Add Persian/English language switcher
- [ ] SEO & Open Graph tags
