#!/usr/bin/env sh

# abort on errors
cd dist

#build

git init
git checkout -b main
git add -A
git commit -m 'deploy'


git push -f git@github.com:Brunodv/Ansys.git main:gh-pages

cd .