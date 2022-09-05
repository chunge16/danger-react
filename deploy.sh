#!/bin/bash
echo "NPM deploy"
newversion=$1

echo newversion: ${newversion:=patch}

#npm version newversion && /
#git push --follow-tags
