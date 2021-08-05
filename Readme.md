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

You'll need to run these scripts as an administrator, this script will open a new `powershell` as an administrator in the current directory

```powershell
Start-Process powershell -Verb runas -ArgumentList "-NoExit -c cd '$pwd'"
```

Execute `configure-hosts-windows.ps1` to configure your custom domain name in host.

If you get an error related to Execution Policies you can learn more [here](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1)

Execute `setup-windows.ps1` to finish setting up the apps and generate the certs you need
