# Dockerize Node.js Address Book

## Getting Started

Install all dependencies

```bash
npm i
```

Build and run the containers `docker compose up -d`

To setup the db you'll need to get into the container to run a script

To get inside the container `docker compose exec [containerId] sh`

Then run `node ./bin/migrate.js`

To stop the running container without destroying it `docker compose stop`

To stop the running container and destroy them `docker compose down`

It will be available at the un-proxyed site `localhost:3000` and `http://localhost:3000/persons/all`

and your new custom URL `https://myapp.local`

## SSL Setup

### Windows

You'll need to install some packages using `Chocolatey`, you can download it from [here](https://chocolatey.org/install)

Once you have verified `Chocolatey` is installed, you'll need to execute a few scripts.

To run the first script pop open `cmd` or `powershell`

```powershell
pwsh.exe -ExecutionPolicy Unrestricted
```

More Info on Execution Policies [here](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1)

This will set your `powershell` execution policy to Unrestricted for only the session. This allows us to run unsigned scripts.

Execute `configure-hosts-windows.ps1` to configure your custom domain name in host.

Once that has been configured you'll need to finish the setup by loading `Git Bash`.

Execute `setup-windows.sh` to finish setting up the apps and generate the certs you need
