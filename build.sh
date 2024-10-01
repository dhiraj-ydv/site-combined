#!/bin/bash

# Build Jekyll site
cd digitalgarden
jekyll build

# Build React app
cd ../home
npm run build

# Copy Jekyll output to React build
cp -r ../digitalgarden/_site/* build/jekyll
