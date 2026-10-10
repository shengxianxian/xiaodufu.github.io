# 《登高——跟着小杜甫读经典》成果展示网站

这是一个原生 HTML、CSS 和 JavaScript 编写的静态网站，可直接通过 GitHub Pages 发布，不需要安装 Node.js 或配置后端。

## 本地预览

最简单的方式是在文件管理器中打开 `index.html`。也可以在项目目录启动本地静态服务器：

```powershell
py -m http.server 8000
```

随后在浏览器访问 `http://localhost:8000`。

## 发布到 GitHub Pages

1. 在 GitHub 创建一个公开仓库，例如 `denggao-project-showcase`。
2. 将本目录中的所有文件上传到仓库根目录，确认 `index.html` 位于根目录。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`，保存。
5. 等待 GitHub Pages 部署完成，页面地址会显示在 Pages 设置页中。

## 视频与二维码

原始 MP4 约 431 MB，不放入普通 GitHub 仓库，以免超过常见文件限制并拖慢站点克隆。作品页使用既有二维码和外部观看地址：

`https://wxxcx.sao1sao.top/a/O8kgm6G/`

如后续获得稳定的公开视频地址，可在 `work.html` 中将“打开作品观看页”按钮和二维码替换为新地址及对应二维码。

## 替换图片或文字

- 网站图片放在 `assets/` 目录。替换图片时保留原文件名即可；如改名，需同步更新 HTML 中的 `assets/...` 路径。
- 页面文案分别位于 `index.html`、`work.html`、`technology.html` 和 `team.html`。
- 全站样式位于 `css/style.css`，移动端导航交互位于 `js/main.js`。
- 财务数据是项目计划中的预测假设，修改时请同步检查团队页图表、表格和文字说明。

## 内容说明

页面仅用于项目成果展示与交流，不代替正式参赛材料。网页已完成的视频信息与人物素材来自现有作品材料；教学试点、机构合作、收入、实时问答和知识图谱等未验证或未实现内容均按计划描述。参赛资格以赛事通知及学校审核结果为准。
