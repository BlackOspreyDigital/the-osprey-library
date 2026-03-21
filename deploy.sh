#!/bin/bash

if [ -z "$1" ]; then
  echo "Error: Please provide a commit message."
  echo "Usage: ./deploy.sh \"Your commit message here\""
  exit 1
fi

echo "Adding changes..."
git add .

echo "Committing with message: $1"
git commit -m "$1"

echo "Pushing to GitHub (Cloudflare will auto-deploy)..."
git push

echo "Done! The site should be updated in ~30 seconds."
