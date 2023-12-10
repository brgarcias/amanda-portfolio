type Settings = {
  siteName: string;
};

type Logo = {
  symbol: string;
  link: string;
};

type Button = {
  link: string;
};

type MenuItem = {
  label: string;
  link: string;
  children?: MenuItem[] | number;
};

type Header = {
  logo: Logo;
  button: Button;
  menu: MenuItem[];
};

type Footer = {
  copy: string;
  dev: string;
};

type SocialItem = {
  link: string;
  icon: string;
  title: string;
};

type Config = {
  settings: Settings;
  header: Header;
  footer: Footer;
  social: SocialItem[];
};

const appConfig: Config = {
  settings: {
    siteName: 'Amanda Roque',
  },
  header: {
    logo: {
      symbol: 'A',
      link: '/',
    },
    button: {
      link: '/contact',
    },
    menu: [
      {
        label: 'Home',
        link: '/',
        children: 0,
      },
      {
        label: 'Professional Experience',
        link: '/story',
        children: 0,
      },
      {
        label: 'Projects',
        link: '/projects',
        children: [
          {
            label: 'Projects list',
            link: '/projects',
          },
          {
            label: 'Projects 2 column list',
            link: '/projects-2',
          },
          {
            label: 'Full width list',
            link: '/projects-3',
          },
          {
            label: 'Full width simple list',
            link: '/projects-4',
          },
          {
            label: 'Carousel',
            link: '/projects-5',
          },
          {
            label: 'Single Project',
            link: '/projects/project-1',
          },
          {
            label: 'Full width Single Project',
            link: '/projects/project-2',
          },
        ],
      },
      {
        label: 'Services',
        link: '/services',
        children: [
          {
            label: 'Single Service',
            link: '/services/service-1',
          },
        ],
      },
      {
        label: 'Contact',
        link: '/contact',
        children: 0,
      },
    ],
  },
  footer: {
    copy: '© 2023. Amanda Roque. All rights reserved.',
    dev: 'Developed by: &nbsp;<a href="https://brgarcias-portfolio.netlify.app/" target="_blank">brgarcias</a>',
  },
  social: [
    {
      link: 'https://behance.net',
      icon: 'fab fa-behance',
      title: 'Behance',
    },
    {
      link: 'https://dribbble.com',
      icon: 'fab fa-dribbble',
      title: 'Dribbble',
    },
    {
      link: 'https://twitter.com',
      icon: 'fab fa-twitter',
      title: 'Twitter',
    },
    {
      link: 'https://github.com/brgarcias',
      icon: 'fab fa-github',
      title: 'Bruno Garcia Github',
    },
  ],
};

export default appConfig;
