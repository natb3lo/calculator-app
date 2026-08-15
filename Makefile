name := calculator-app
version := $(shell cat version)
tag := $(name):$(version)

build-dev:
	docker build -t $(tag) --target development .