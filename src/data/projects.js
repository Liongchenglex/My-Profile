export const projects = [
            // Resume Analysis Job Board
            {
              id: 1,
              title: 'AI Powered Job Board',
              status: 'In Progress',
              slug: 'landing-page',
              image: 'images/Project4.png',
              skills: ['HTML', 'CSS', 'JavaScript'],
              githubLink: 'https://github.com/Liongchenglex/excel-assistant',
              // liveLink: 'https://yourwebsite.com',
              brief: {
                problemStatement: 'Creating tailored, high-quality job applications is time-intensive and repetitive.',
                description: 'AI tool that automatically personalizes resumes and cover letters to match job descriptions while maintaining authenticity.'
              },
              sections: [
                {
                  type: 'text',
                  title: 'Project Details',
                  content: 'A straightforward landing page project...'
                },
                {
                  type: 'metrics',
                  title: 'Results',
                  items: [
                    { label: 'Conversion Rate', value: '12%', change: '+5%' }
                  ]
                }
              ]
            },
      // Example 2: Youtube
      {
        id: 2,
        title: 'AI Youtube Chat Assistant Chrome Extension',
        status: 'MVP',
        slug: 'api-service',
        image: 'images/Project3.png',
        skills: ['Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/Liongchenglex/Youtube-Assistant',
        // liveLink: 'https://yourwebsite.com',
        brief: {
          problemStatement: 'Valuable information in long YouTube videos is difficult to access efficiently.',
          description: 'AI chatbot that extracts and summarizes key points from videos, enabling quick content digestion through interactive Q&A.'
        },
        sections: [
          {
            type: 'tech-stack',
            title: 'Technology Stack',
            items: {
              Backend: ['Node.js', 'Express', 'MongoDB'],
              Tools: ['Docker', 'Jest', 'GitHub Actions']
            }
          },
          {
            type: 'list',
            title: 'Key Features',
            items: [
              'Automatic retry mechanism',
              'Rate limiting',
              'Error handling'
            ]
          }
        ]
      },

    {
      id: 3,
      title: 'Portfolio Website',
      status: 'Completed',
      slug: 'portfolio-website',
      image: 'images/Project1.png',
      skills: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO'],
      githubLink: 'https://github.com/Liongchenglex/My-Profile',
      liveLink: 'https://liongchenglex.github.io/My-Profile/#/',
      brief: {
        problemStatement: 'Need for a professional online presence to showcase work and skills',
        description: 'Built a responsive portfolio website using React and Tailwind CSS with smooth UI/UX',
      },
      // Flexible sections that you can add/remove as needed
      sections: [
        {
          type: 'text',
          title: 'Project Background',
          content: 'This project started as a way to showcase my work...'
        },
        {
          type: 'list',
          title: 'Key Features',
          items: [
            'Responsive design for all devices',
            'Dynamic blog system',
            'Portfolio showcase with filtering'
          ]
        },
        {
          type: 'video',
          title: 'Project Demonstrations',
          items: [
            {
              title: 'Portfolio Website Overview',
              description: 'A walkthrough of the main features and functionality',
              url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
            }
          ]
        },
        {
          type: 'tech-stack',
          title: 'Technologies Used',
          items: {
            Frontend: ['React', 'Tailwind CSS', 'Framer Motion'],
            Backend: ['Node.js', 'Express'],
            Deployment: ['Vercel']
          }
        },
        {
          type: 'gallery',
          title: 'Development Journey',
          items: [
            {
              image: '/path-to-image1',
              caption: 'Initial wireframe design'
            },
            {
              image: '/path-to-image2',
              caption: 'Final implementation'
            }
          ]
        },
        {
          type: 'metrics',
          title: 'Impact & Results',
          items: [
            { label: 'Load Time', value: '0.8s', change: '-40%' },
            { label: 'SEO Score', value: '95/100', change: '+15' }
          ]
        }
      ]
    },
      


          // Excel Assitant
    {
      id: 4,
      title: 'AI Excel Assistant',
      status: 'Completed',
      slug: 'landing-page',
      image: 'images/Project2.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/Liongchenglex/excel-assistant',
      // liveLink: 'https://yourwebsite.com',
      brief: {
        problemStatement: 'Users struggle to create Excel formulas and macros despite knowing their desired data outcomes.',
        description: 'AI assistant that generates Excel formulas and macros by analyzing initial and target data states, with step-by-step guidance.'
      },
      sections: [
        {
          type: 'text',
          title: 'Project Details',
          content: 'A straightforward landing page project...'
        },
        {
          type: 'metrics',
          title: 'Results',
          items: [
            { label: 'Conversion Rate', value: '12%', change: '+5%' }
          ]
        }
      ]
    },
      
      // Example 3: Design-focused Project
      // {
      //   id: 4,
      //   title: 'Mobile App UI Design',
      //   status: 'Something else',
      //   slug: 'mobile-app-ui',
      //   skills: ['Figma', 'UI/UX', 'Prototyping'],
      //   brief: {
      //     problemStatement: 'Redesign of existing mobile app',
      //     description: 'Complete UI overhaul with focus on user experience'
      //   },
      //   sections: [
      //     {
      //       type: 'gallery',
      //       title: 'Design Evolution',
      //       items: [
      //         {
      //           image: '/path-to-before',
      //           caption: 'Original design'
      //         },
      //         {
      //           image: '/path-to-after',
      //           caption: 'New design'
      //         }
      //       ]
      //     },
      //     {
      //       type: 'metrics',
      //       title: 'User Testing Results',
      //       items: [
      //         { label: 'User Satisfaction', value: '4.8/5', change: '+0.9' },
      //         { label: 'Task Completion', value: '95%', change: '+15%' }
      //       ]
      //     }
      //   ]
      // }
  ];