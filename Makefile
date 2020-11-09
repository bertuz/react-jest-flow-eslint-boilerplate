.PHONY: test build

install-frontend:
	cd frontend && yarn

install-backend:
	cd backend && yarn

install: install-backend install-frontend

watch: install
	cd backend && yarn watch

dev: install
	cd frontend && yarn dev

test: install
	cd frontend && yarn lint && yarn flow && yarn jest

build: test
	cd frontend && yarn build
