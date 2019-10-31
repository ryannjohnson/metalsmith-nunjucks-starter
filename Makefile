.PHONY: build
build: node_modules
	mkdir -p build
	cp -r -t build public/*

	node index.js

	cp style.css build/style.css
	cat node_modules/highlight.js/styles/github.css >> build/style.css
	npx cleancss -o build/style.css build/style.css

.PHONY: clean
clean:
	rm -rf build

node_modules: package.json
	npm install
