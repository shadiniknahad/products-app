🛍️ Product List App (Next.js)
This is a simple product listing application built with Next.js, which demonstrates modern best practices in:

Data fetching

Caching

Separation of concerns (services, utils, hooks)

Error handling

Responsive and clean UI


This project follows a clean and modular structure with proper separation of concerns:

src/
├── app/                 # Next.js app directory (pages, routes)
│   └── product/[id]/    # Dynamic product detail page
├── components/          # Reusable UI components
├── services/            # Data-fetching logic (API layer)
│   └── productService.js
├── hooks/               # Custom React hooks (e.g., useProducts)
├── utils/               # General-purpose, pure utility functions
│   └── storage.js       # LocalStorage helpers: loadFromCache, saveToCache
├── helpers/             # UI-related logic helpers
│   └── ratingHelpers.js # getRatingColor
└── constants/           # Static values like API URLs


🔧 Features
Fetches product list from https://dummyjson.com/products

Caches product data in localStorage for performance

Uses custom React hooks (useProducts) for data fetching

Includes UI-specific helper functions such as getRatingColor to determine styling based on product rating

Supports viewing individual product details by dynamic route (/product/:id)

Error and loading states are gracefully handled



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
