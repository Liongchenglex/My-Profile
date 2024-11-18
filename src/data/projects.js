export const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      status: 'Completed',
      slug: 'portfolio-website',
      image: 'images/Project1.png',
      skills: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO'],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://yourwebsite.com',
      brief: {
        problemStatement: 'Need for a professional online presence to showcase work and skills',
        description: 'Built a responsive portfolio website using React and Tailwind CSS with smooth animations and SEO optimization',
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
    {
        id: 2,
        title: 'Simple Landing Page',
        status: 'Completed',
        slug: 'landing-page',
        image: 'images/Project2.png',
        skills: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/yourusername/portfolio',
        liveLink: 'https://yourwebsite.com',
        brief: {
          problemStatement: 'Client needed a simple, effective landing page',
          description: 'Created a responsive landing page with focus on conversion'
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
      
      // Example 2: Technical Project
      {
        id: 3,
        title: 'API Integration Service',
        status: 'In Progress',
        slug: 'api-service',
        skills: ['Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/yourusername/portfolio',
        liveLink: 'https://yourwebsite.com',
        brief: {
          problemStatement: 'Need for a robust API integration service',
          description: 'Building a scalable API integration platform'
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