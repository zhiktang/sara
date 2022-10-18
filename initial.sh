#!/bin/bash

git clone https://github.com/CompVis/stable-diffusion stable-diffusion

cd stable-diffusion

conda env create -f environment.yaml
conda activate ldm

cd ../

node deploy-commands.js
node bot.js
