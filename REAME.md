# NodeJS JSON Web Token Examples
## Create private key with openssl
* with passphrase: openssl genrsa -des3 -out private.pem 2048
* without passphrase: openssl genrsa -out private.pem 2048
## Create public key with openssl and privatekey
* openssl rsa -in private.pem -outform PEM -pubout -out public.pem