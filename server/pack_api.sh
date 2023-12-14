#!/bin/zsh
swag init
echo "正在切换到 10.24.1"
source ~/.nvm/nvm.sh
nvm use 10.24.1
cd ../swagger-to-postman
node converter.js




