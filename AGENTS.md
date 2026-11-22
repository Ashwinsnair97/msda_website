<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Styling rules

Design tokens live in `styles/tokens.css` (palette → roles → Tailwind `@theme`). Component styles live in `styles/components/`; `app/globals.css` only imports.

- Components use **role** classes only: `bg-surface-page`, `bg-surface`, `bg-surface-alt`, `text-fg`, `text-fg-copy`, `text-fg-muted`, `text-accent`, `border-line`, `bg-action`, `text-on-action`, `bg-overlay`, `shadow-card`, `rounded-card`, `text-section-heading`, etc. Never use palette names (`--midnight-navy`), hex codes, `rgb()`/`rgba()`, or Tailwind's built-in colours (they are disabled with `--color-*: initial`).
- Dark bands use `<Section tone="inverse">` (components/ui/Section.js); text laid over photos uses the `tone-inverse` class. Inside either, keep using `text-fg`, `text-fg-muted`, `text-accent`, `border-line`: the roles switch automatically. Do not add `tone` props to children.
- New colour: add it to the palette, give it a role, map the role in `@theme inline`, then use the role.
