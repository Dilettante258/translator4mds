const text = `
# Translator4mds

一个专门翻译[Markdown](https://markdown.com.cn/basic-syntax/)文件的应用（当然也能翻译其他的），目前支持调用微软Azure翻译的API和OpenAI GPT-3.5的API来翻译。

## 🚀 关于
最近正在学习全栈开发，这是为了练习前端开发技能而写的一个网站。


## 🗺️路线图

- [ ] 增加夜间模式
- [ ] 增加更多API的支持
- [ ] 将面板上目前disabled的功能补全
- [ ] 消息流式处理，不再傻等
- [ ] 表格翻译

## 💻🛠️技术栈

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://www.axios-http.cn/)
- [OpenAI API](https://platform.openai.com/overview)

## 🙏致谢

- 网站托管服务商[Vercel](https://vercel.com/)
- 设计参考[openai-translator](https://github.com/LanceMoe/openai-translator)
- 设计参考[vercel/ai-chatbot](https://github.com/vercel/ai-chatbot)
- 使用[Tailwind CSS](https://tailwindcss.com/)设计样式
- [Shadcn/ui](https://ui.shadcn.com/)的无头原生组件
- 来自[Phosphor Icons](https://phosphoricons.com/)的图标
- [react-markdown](https://github.com/remarkjs/react-markdown)渲染Md。

## ⬇️🔧安装

使用 npm 安装 my-project

\`\`\`bash
  npm install
  npm run dev
\`\`\`

## 🌍⚙️环境变量

要运行这个项目，你将需要在你的 .env 文件中添加以下环境变量

\`OPENAI_API_KEY\`

\`OPENAI_API_URL\`


`

export default text;