.PHONY: test build

install:
	@yarn

watch:
	@yarn watch

dev:
	@yarn dev

test: install
	@yarn lint && yarn flow && yarn jest

build: test
	@yarn build
