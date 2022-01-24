module.exports = {
  title: 'TypeScript4 文档',
  description: 'TypeScript4 最新官方文档翻译',
  base: '/blog/',
  //-- todo --
  // theme: 'reco',
  themeConfig: {
    nav: [
        { text: '首页', link: '/' },
        { 
            text: '冴羽的 JavaScript 博客', 
            items: [
                { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
            ]
        }
    ],
    sidebar: [
      {
        title: 'doc1',
        path: '/webpack/doc1',
        collapsable: false, // 不折叠
      },
      {
        title: 'doc2',
        path: '/webpack/doc2',
        collapsable: false, // 不折叠
      },
    ]
  }
}