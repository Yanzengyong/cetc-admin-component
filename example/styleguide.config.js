const path = require('path')

module.exports = {
  title: '智能数据服务小组【后台管理】模版组件',
  version: '1.0.1',
  template: {
    favicon: './src/styleguide-components/mainLogo.png',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://alifd.alicdn.com/npm/@alifd/next/1.22.12/next.css'
        }
      ]
    }
  },
  getComponentPathLine(componentPath) {
    const pathDir = path.dirname(componentPath).split('/')
    const pathDirLength = pathDir.length
		const name = pathDirLength > 0 ? pathDir[pathDirLength - 1] : ''
		return `import { ${name} } from 'cetc-admin-component';`
	},
  styles: {
    Playground: {
      preview: {
        padding: '16px 10px',
        borderWidth: [[2, 2, 2, 2]],
        borderRadius: 10,
        borderColor: '#eaeaea',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    Code: {
      code: {
        // make inline code example appear the same color as links
        color: '#767676'
      }
    }
  },
  styleguideComponents: {
    ComponentsListRenderer: path.resolve(__dirname, './src/styleguide-components/ComponentsList'),
    HeadingRenderer: path.resolve(__dirname, './src/styleguide-components/Heading'),
    PathlineRenderer: path.resolve(__dirname, './src/styleguide-components/Pathline'),
    StyleGuideRenderer: path.resolve(__dirname, './src/styleguide-components/StyleGuide'),
    TableRenderer: path.resolve(__dirname, './src/styleguide-components/Table'),
    VersionRenderer: path.resolve(__dirname, './src/styleguide-components/Version'),
	},
  pagePerSection: true,
  sections: [
    {
      name: '介绍',
      content: 'src/docs/introduction.md',
    },
    {
      name: '文档',
      sections: [
        {
          name: '安装',
          content: 'src/docs/install.md',
        },
        {
          name: '快速开始',
          content: 'src/docs/start.md'
        }
      ]
    },
    {
      name: 'UI 组件',
      content: 'src/docs/ui.md',
      components: 'src/components/**/*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    }
  ]
}
