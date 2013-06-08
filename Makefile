JSX=jsx
NPM=npm

all: lib/ESA.js

.PHONY: all test clean

lib/ESA.js: ESA.jsx
	$(JSX) --release --output $@ $<

clean:
	rm lib/*

