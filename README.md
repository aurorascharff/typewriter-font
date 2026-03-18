# Typewriter Font

A simple tool to convert text into Unicode monospace characters that look like a terminal or typewriter. Copy and paste them anywhere — social media, notes, messages.

No ads, no layout shift, no tracking. Everything runs in your browser.

## How it works

Regular ASCII letters and digits are mapped to their [Mathematical Alphanumeric Symbols](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) equivalents in Unicode:

| Input | Output | Range |
|-------|--------|-------|
| A–Z | 𝙰–𝚉 | U+1D670 – U+1D689 |
| a–z | 𝚊–𝚣 | U+1D68A – U+1D6A3 |
| 0–9 | 𝟶–𝟿 | U+1D7F6 – U+1D7FF |

All other characters (punctuation, spaces, emoji) pass through unchanged.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com) components
- [Geist](https://vercel.com/font) font

## Deploy

```bash
npm run build
```

Or deploy directly to [Vercel](https://vercel.com).
