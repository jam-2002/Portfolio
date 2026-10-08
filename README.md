# YUHANG JIN — GitHub Pages 部署

此文件夹是已构建的静态网站，包含页面、脚本、图片、视频和字体，不需要 npm install 或服务器后端。

## 上传与发布

1. 新建一个 GitHub 仓库。使用 GitHub Desktop 克隆仓库到本机。
2. 把本文件夹**里面的全部内容**复制到仓库根目录。`index.html` 与 `.nojekyll` 必须在根目录，不要多套一层文件夹。macOS Finder 可用 Command + Shift + . 显示隐藏文件。
3. 在 GitHub Desktop 提交并 Push 到 `main` 分支。视频文件较大，请使用 GitHub Desktop / Git 上传，不要通过网页逐个拖拽上传。
4. 打开仓库 **Settings → Pages → Build and deployment**：选择 **Deploy from a branch**，分支选 `main`，文件夹选 `/(root)`，点击 Save。
5. 等待 GitHub Pages 完成发布，在同一设置页获取访问地址。

普通仓库的地址形如 `https://用户名.github.io/仓库名/`；名为 `用户名.github.io` 的仓库发布于 `https://用户名.github.io/`。本包支持这两种路径，不需要修改配置。

## 页面地址

- 首页：`#/`
- VideoMaker：`#/project/videomaker`
- 华为项目：`#/project/in-car-music`
- 兴趣实验：`#/experiments`

页面使用 hash 路由，刷新项目页不依赖服务器重写规则。所有浏览器标签标题固定为 `YUHANG JIN`。

更新内容后，请在开发项目中运行 `npm run package:pages`，用新包替换仓库文件后再次提交。请通过 HTTP 本地服务或 GitHub Pages 访问，不要直接双击 index.html。

GitHub 官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
