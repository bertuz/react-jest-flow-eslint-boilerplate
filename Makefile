.PHONY: test build

install-frontend:
	cd frontend && yarn

install-backend:
	cd backend && yarn

install: install-backend install-frontend

watch: install
	cd backend && yarn watch

dev-front:
	cd frontend && yarn dev

dev-back:
	cd backend && yarn dev

dev: install dev-front dev-back

test: install
	cd frontend && yarn lint && yarn flow && yarn jest

build: test
	cd frontend && yarn build
