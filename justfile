# build artifact
build: clean
    bun build src/index.html --outdir dist --minify
    minify dist/index.html -o dist/index.html

# clean build artifacts
clean:
    rm -rf dist

# dev mode
dev:
        bun run src/index.html
