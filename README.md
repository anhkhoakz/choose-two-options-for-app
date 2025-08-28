# Pick Two (Fast • Cheap • Good)

A tiny, dependency-free web app demonstrating the classic "Pick Two" trade-off.
Toggle switches let you select any two of Fast, Cheap, and Good; selecting a
third automatically deselects the oldest selection.

## Features

- Minimal HTML/CSS/JS; no frameworks
- Inline SVG icons
- Simple logic to enforce "choose any two"

## Tech

- HTML/CSS/Vanilla JS
- Built with Bun
- HTML minified for production

## Prerequisites

- Just (task runner): <https://just.systems>
- Bun (build tool/runtime): <https://bun.sh>
- minify CLI (to minify HTML): `npm i -g minify` or `bun add -g minify`

## Scripts

The project uses a `justfile` with these tasks:

- build: build to `dist/` and minify HTML
- clean: remove `dist/`

Run them with:

```bash
just build
```

```bash
just clean
```

Equivalent without Just:

```bash
bun build src/index.html --outdir dist --minify && minify dist/index.html -o dist/index.html
```

## Run / Preview

- Open `dist/index.html` in a browser after building, or
- Serve the `dist/` folder locally, e.g.:

```bash
bun run dist/index.html
```

During development you can also open `src/index.html` directly in the browser.

## License

See `LICENSE` for details.
