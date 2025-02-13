export default class DataService {
  _data = {
    projectRepo: 'https://github.com/ckuang/ckuang.github.io',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Hi, Charles here!",
            "I'm a Software Engineer based in New York City. " 
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            // NOTE(charles): update resume link here
            '<insert-resume-link>',
          workExperience: [
            {
              jobTitle: 'Software Engineer',
              company: 'Propel',
              location: 'Brooklyn',
              period: 'JUNE 2019 – FEB 2025',
              accomplishments: [
                'Built stuff.',
                'Technologies used: Python, JavaScript, PostgreSQL, Redis',
              ],
            },
          ],
          education: [
            {
              credit: 'M.Eng. Computer Science',
              place: 'Cornell Tech 2019',
            },
            {
              credit: 'M.S. Teaching',
              place: 'Pace University 2015',
            },
            {
              credit: 'B.S. Biology',
              place: 'Duke University 2013',
            },
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'Pusheen Pop',
              description:
                'Cat-themed bubble shooter game',
              techStack:
                'JS, HTML Canvas',
              url: 'https://ckuang.github.io/pusheen-pop',
            },
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Python',
              progress: 100,
            },
            {
              name: 'JavaScript',
              progress: 100,
            },
          ],
          // NOTE(charles): update soft skills
          soft: 'soft skillz',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'Shoot me an email at ',
          email: 'charles.kuang@protonmail.com',
          socialText: 'Or you can reach me out through:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/insaf-khamzin-915237129/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/ckuang',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
