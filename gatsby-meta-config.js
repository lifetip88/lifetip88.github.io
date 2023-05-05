module.exports = {
  title: `Life tips.`,
  description: `생활, 인테리어, 레시피, 여행`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://lifetip88.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: ``,
    bio: {
      role: `블로그`,
      description: [ '실생활에서 유용한 정보를 공유하고 더 나은 생활을 할수 있도록 생활 팁을 공유하는 '],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: ``, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2023.05 ~',
        activity: '생활 블로그',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/lifetip88/lifetip88.github.io',
          demo: 'https://lifetip88.github.io/',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Life tips.',
        description:
          '혼자 사는 사람들은 생활에 필요한 정보를 얻기가 어려울 수 있습니다. 이에 따라 혼자 사는 사람들을 위한 블로그를 운영하여, 실생활에서 유용한 정보를 공유하고 혼자 사는 사람들이 더 나은 생활을 할 수 있도록  블로그 를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/lifetip88/lifetip88.github.io',
          demo: 'https://lifetip88.github.io/',
        },
      },
    ],
  },
};
