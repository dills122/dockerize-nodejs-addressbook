#!/bin/bash

set -e

# Note: update /etc/hosts separately, may require sudo privileges

# Install mkcert, assumes brew already installed
choco install mkcert

# Initialize and create certificates
mkcert -install
mkdir -p certs
mkcert -key-file ../certs/ssl.key -cert-file ../certs/ssl.crt myapp.local
