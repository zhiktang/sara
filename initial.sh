#!/bin/bash

git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui stable-diffusion-webui

cd stable-diffusion-webui

./install

cd ../

node deploy-commands.js
node bot.js
