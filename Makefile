.PHONY: test build

install:
	@yarn

watch: install
	@yarn watch

dev: install
	@yarn dev

test: install
	@yarn lint && yarn flow && yarn jest

build: test
	@yarn build
