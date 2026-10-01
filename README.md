# Nhat — Product Builder & Contract Developer

A personal portfolio built with Next.js, React, TypeScript, and custom CSS illustrations.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` for production, `npm run lint` for linting, and `node --test tests/publication.test.mjs` for publication timing tests.

- `/`: selected products, open source, writing, introduction, and contact.
- `/projects`: filterable portfolio with individual project pages.
- `/writing`: topic filters and article pages.
- `/about`, `/contact`: engineering services and email contact.
- `/feed.xml`: RSS for published posts.
- `/resume`: redirects to the new about page.

Project content lives in `data/projects.ts`; articles live in `data/posts.ts`.

See [writing and scheduling](docs/writing.md) for 06:00 Vietnam publication, and [design notes](docs/design.md) for the design direction and provenance. Scheduled publication is implemented; automatic AI research and generation are not connected. Keep the application dynamically hosted to support time-based publication.
