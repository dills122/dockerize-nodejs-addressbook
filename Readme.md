# Dockerize Node.js Address Book

## Getting Started

Install all dependencies

```bash
npm i
```

Build and run the containers `docker compose up -d`

To setup the db you'll need to get into the container to run a script

To get inside the container `docker compose exec [containerId] sh`

Then run `node ./bin/migrate.ts`

To stop the running container without destroying it `docker compose stop`

To stop the running container and destroy them `docker compose down`

It will be available at `localhost:3000` and `http://localhost:3000/persons/all`
