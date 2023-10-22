#!/usr/bin/bash

app_name="template-angular-16"
deliver_path="/var/www/nicoblog";
repo="git@github.com:Diuxx/template-angular-16.git"
branch="develop"
nginx_conf="./nginx/nicoblog_nginx_conf"

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
eval "sudo rm -rf ./${app_name}/"

echo "Directory contents removed: $deliver_path"

eval "git clone --branch $branch $repo"
eval "cd ./${app_name}"
eval "npm i"
eval "npm run build-prod"

# Deploy
eval "sudo cp -R ./dist/* ${deliver_path}"

# nginx
eval "sudo cp -u ${nginx_conf} /etc/nginx/sites-available/"
eval "sudo ln -s /etc/nginx/sites-available/nicoblog_nginx_conf /etc/nginx/sites-enabled/"

eval "sudo nginx -t"
eval "sudo systemctl reload nginx"

# Finalize
# echo "cleaning files..."
# eval "cd .."
# eval "sudo rm -rf ./${app_name}"