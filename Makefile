install: 
	npm install

start: 
	npx babel-node src/bin/brain-games.js

files:
	npm publish --dry-run
lint: 
	npx eslint
