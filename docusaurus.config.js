module.exports = {
  title: 'HRsolution',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/time_icon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HRsol',
      logo: {
        alt: 'Hrsol citynow',
        src: 'img/time_icon.ico',
      },
      items: [
        {
          to: 'docs/Login',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SẢN PHẨM',
          items: [
            {
              label: 'ResourceChains',
              to: 'https://resourcechains.com/',
            },
            {
              label: 'Assignlog',
              to: 'https://assignlog.com/',
            },
            {
              label: 'Courseact',
              to: 'https://www.courseact.com/',
            },
          ],
        },
        {
          title: 'CÔNG TY',
          items: [
            {
              label: 'Giới thiệu',
              href: '#',
            },
            {
              label: 'Khách hàng',
              href: '#',
            },
            {
              label: 'Liên hệ',
              href: '#',
            },
            {
              label: 'Điều khoản',
              href: '#',
            },
            {
              label: 'Chính sách bảo mật',
              href: '#',
            },
            {
              label: 'Báo chí',
              href: '#',
            },
            {
              label: 'Tuyển dụng',
              href: '#',
            },
          ],
        },
        {
          title: 'LIÊN KẾT',
          items: [
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/citynow.vn/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Citynowltd',
            },
            {
              label: 'Linkedin',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by Citynow All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
