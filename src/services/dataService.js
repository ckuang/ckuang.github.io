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
          workExperience: [
            {
              jobTitle: 'Software Engineer',
              company: 'Propel',
              location: 'Brooklyn',
              period: 'JUNE 2019 – FEB 2025',
              accomplishments: [
                'Built out debit card program', 
                'Drove user growth',
                'Maintained scrapers',
                'Launched new features', 
                'Staffed on-call rotation', 
                'Addressed bugs',
                'Wrote tests',
                'Developed internal tools',
                'Technologies: Python, JavaScript, PostgreSQL, Redis',
              ],
            },
            {
              jobTitle: 'Computer Science Teacher',
              company: 'Stuyvesant',
              location: 'New York City',
              period: 'SEPT 2017 – JUNE 2018',
              accomplishments: [
                'Taught 10th grade introduction to computer science',
                'Technologies: Scheme, Netlogo, Python', 
              ],
            },
            {
              jobTitle: 'Web Development Instructor',
              company: 'Pursuit',
              location: 'Long Island City',
              period: 'JULY 2016 – SEPT 2017',
              accomplishments: [
                'Designed and implemented a full-stack curriculum',
                'Technologies: JavaScript', 
              ],
            },
            {
              jobTitle: 'Science Teacher',
              company: 'New York City Teaching Fellows',
              location: 'Flushing',
              period: 'JUNE 2013 – JUNE 2015',
              accomplishments: [
                'Taught 6th & 7th grade general science',
                'Taught 9th grade living environment/biology',
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
                'JavaScript, HTML Canvas',
              url: 'https://ckuang.github.io/pusheen-pop',
            },
          ],
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'Shoot me an email at ',
          email: 'chkuang8@gmail.com',
          socialText: 'Or you can reach me out through:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/charleskuang/',
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
