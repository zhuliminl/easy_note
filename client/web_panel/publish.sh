#!/bin/bash
echo "正在切换到 v21.2.0"
source ~/.nvm/nvm.sh
nvm use v21.2.0
cd ..
cd web_panel
rm -rf dist
rm -rf ../chrome_plugin/content-script/index.html
rm -rf ../chrome_plugin/content-script/src
echo "移动 content script 文件到主项目"
cp ./index.html ../chrome_plugin/content-script/index.html
cp -r ./src/ ../chrome_plugin/content-script/src
cd ..
echo "开始打包 chrome 插件"
cd chrome_plugin
rm -rf dist
yarn build
echo "打包结束"


