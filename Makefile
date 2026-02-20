APP_NAME = log_watcher
PKG = ./...

ifeq ($(OS),Windows_NT)
	BIN_NAME = $(APP_NAME).exe
else
	BIN_NAME = $(APP_NAME)
endif

all: run-web run-service

run-web:
	@echo "Running a Front-end Web"
	cd ./web && pnpm run dev

run-service:
	@echo "🏃 Running $(APP_NAME) with race detection..."
	go run -race main.go

tests:
	@echo "🧪 Running tests with race detection..."
	go test -race -v $(PKG)

lint:
	@echo "🔍 Linting with staticcheck..."
	staticcheck $(PKG)

fmt:
	go fmt $(PKG)

build:
	@echo "Im Building A Go Binary"
	go build -race -o bin/$(BIN_NAME) main.go
