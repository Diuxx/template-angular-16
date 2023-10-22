#!/usr/bin/bash

app_name="template-angular-16"
deliver_path="/var/www/nicoblog";
repo="git@github.com:Diuxx/template-angular-16.git"
branch="develop"

# Check if the directory already exists
if [ ! -d "$deliver_path" ]; then
    # If the directory doesn't exist, create it
    eval "sudo mkdir -p \"$deliver_path\""
    echo "Directory created: $deliver_path"
else
    echo "Directory already exists: $deliver_path"
fi

# Remove all files and subdirectories in the directory
eval "sudo rm -r \"$deliver_path\"/*"
echo "Directory contents removed: $deliver_path"

eval "git clone --branch $branch $repo"
eval "cd ./${app_name}"
eval "npm i"
eval "npm run build-prod"

# Deploy
eval "sudo cp -R ./dist/ ${deliver_path}"

# Finalize
# echo "cleaning files..."
# eval "cd .."
# eval "sudo rm -rf ./${app_name}"