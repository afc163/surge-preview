#!/usr/bin/env bash
export PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin::/usr/local/bin
# set -e;

echo $PATH

# project_name=surge-preview

project_name=$1

project_branch=$2

cd ..

echo "\033[49;32m \n******* ${project_name} cloning *******\n \033[0m"

git clone -b ${project_branch} https://github.com/antvis/${project_name}.git

cd ./${project_name}

echo "\033[49;32m \n******* ${project_name} installing *******\n \033[0m"

tnpm i

echo "\033[49;32m \n******* ${project_name} building *******\n \033[0m"

tnpm run dist

cd ../surge-preview/web-server/client

echo "\033[49;32m \n******* client installing *******\n \033[0m"

tnpm i

echo "\033[49;32m \n******* client building *******\n \033[0m"

tnpm run build

cd ../server

echo "\033[49;32m \n******* server installing *******\n \033[0m"

tnpm i

echo "\033[49;32m \n******* server starting *******\n \033[0m"

tnpm start

# cd ..

# time=$(date "+%Y-%m-%d-%H-%M-%S")

# git checkout -b "${time}"
