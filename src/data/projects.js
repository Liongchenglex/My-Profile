export const projects = [
            // Resume Analysis Job Board
            {
              id: 1,
              title: 'AI Powered Job Board',
              status: 'In Progress',
              slug: 'job-board',
              image: 'images/Project4.png',
              skills: ['React', 'JavaScript'],
              githubLink: 'https://github.com/Liongchenglex/job-board',
              // liveLink: 'https://yourwebsite.com',
              brief: {
                problemStatement: 'Creating tailored, high-quality job applications is time-intensive and repetitive.',
                description: 'AI tool that automatically personalizes resumes and cover letters to match job descriptions while maintaining authenticity.'
              },
              sections: [
                {
                  type: 'text',
                  title: 'Project Details',
                  content: ['This project is currently a Work in Progress. Currently, only the Frontend is completed. The details will be fully updated on completion.',
                  ]
                },
                {
                  type: 'text',
                  title: 'The Inspiration',
                  content: [`After recently leaving my job, I realized how time-consuming and unnecessarily complex the process of crafting personalized and optimized job applications can be. To address this, I decided to build an AI tool to streamline the application process and make it more efficient.`,
                    `I’ve also been attending a career service, and I plan to incorporate the valuable advice I’ve received into the tool’s design. This includes ensuring applications are ATS-friendly, highlighting untapped skill sets, and more. My goal is to create a solution that not only saves time but also improves the quality and impact of job applications.` 
                  ]
                },
              ]
            },
      // Example 2: Youtube Assistant
      {
        id: 2,
        title: 'AI Youtube Chat Assistant Chrome Extension',
        status: 'MVP',
        slug: 'youtube-assistant',
        image: 'images/Project3.png',
        skills: ['Youtube-transcpt-API', 'Python', 'Javascript', 'FastAPI','OpenAI GPT4'],
        githubLink: 'https://github.com/Liongchenglex/Youtube-Assistant',
        liveLink: 'https://youtu.be/LsuW0W0QKSs',
        brief: {
          problemStatement: 'Valuable information in long YouTube videos is difficult to access efficiently.',
          description: 'AI chatbot that extracts and summarizes key points from videos, enabling quick content digestion through interactive Q&A.'
        },
        sections: [
          {
            type: 'text',
            title: 'Project Details',
            content: ['This project is a A Chrome extension that enables interactive AI-powered conversations about YouTube videos. Users can ask questions, get summaries, and interact with video content through a chat interface powered by GPT-4.',
              'You can read more at [[https://github.com/Liongchenglex/Youtube-Assistant/blob/main/README.md||GitHub README]].'
            ]
          },
          {
            type: 'video',
            title: 'Project Demonstrations',
            items: [
              {
                title: 'Portfolio Website Overview',
                description: 'A walkthrough of the main features and functionality',
                url: 'https://www.youtube.com/embed/LsuW0W0QKSs?si=HYyqV8cK6rRfdrYM'
              }
            ]
          },
          {
            type: 'text',
            title: 'The Inspiration',
            content: [`The idea for the YouTube AI Assistant extension came to me while watching a lengthy Jubilee video discussing the political climate in the US. I often found myself wanting to revisit specific moments where someone made an interesting point but struggling to locate them in the video. Additionally, I noticed a lot of unnecessary rambling and thought it would be helpful to have a tool that could summarize the key points effectively.`,
            `This inspired me to create the YouTube AI Assistant, designed to identify important moments in a video and provide concise summaries of its content. While I’m eager to launch it, I’m currently focused on resolving residual issues such as rate control and cost management to make the extension commercially viable.`]
          },
          {
            type: 'list',
            title: 'Key Features',
            items: [
              ` Real-time YouTube video analysis`,
              `Interactive chat interface.`,
              `GPT-4 powered responses`,
              `Timestamp-aware responses`,
              `Video transcript analysis.`,
              `Context-aware responses`,
              `Seamless video navigation support`
            ]
          },
        ]
      },

    {
      id: 3,
      title: 'Portfolio Website',
      status: 'Completed',
      slug: 'portfolio-website',
      image: 'images/Project1.png',
      skills: ['React', 'Javascript', 'Framer Motion','EmailJS', 'Tailwind CSS'],
      githubLink: 'https://github.com/Liongchenglex/My-Profile',
      liveLink: 'https://liongchenglex.github.io/My-Profile/#/',
      brief: {
        problemStatement: 'Need for a professional online presence to showcase work and skills.',
        description: 'Built a responsive portfolio website using React and Tailwind CSS with smooth UI/UX.',
      },
      // Flexible sections that you can add/remove as needed
      sections: [
        {
          type: 'text',
          title: 'Project Details',
          content: ['This project is a modern, responsive portfolio website built with React, showcasing my professional journey, projects, blogs and contact information.',
            'You can read more at [[https://github.com/Liongchenglex/My-Profile/blob/main/README.md||GitHub README]].'
          ]
        },
        {
          type: 'text',
          title: 'The Inspiration',
          content: ['I was inspired to create a portfolio to showcase my technical abilities. Coming from a background in law, I often find myself needing to explain and prove my technical expertise. Instead of constantly telling people about my skills, I decided to build a website that demonstrates them. This platform highlights my projects, inspirations, and journey, serving as a one-stop destination to show who I am and what I’ve accomplished.'
          ]
        },
        {
          type: 'list',
          title: 'Key Features',
          items: [
            `Responsive design for all devices`,
            `Interactive UI with smooth animations`,
            `Mobile-friendly navigation`,
            `Working contact form`,
            `Dynamic Blog Filter and Search`
          ]
        },
      ]
    },
      


          // Excel Assitant
    {
      id: 4,
      title: 'AI Excel Assistant',
      status: 'Completed',
      slug: 'excel-assistant',
      image: 'images/Project2.png',
      skills: ['Node JS', 'AI Integration', 'JavaScript'],
      githubLink: 'https://github.com/Liongchenglex/excel-assistant',
      liveLink: 'https://youtu.be/q7-RkpwauAM',
      brief: {
        problemStatement: 'Excel users struggle to create Excel formulas and macros despite knowing their desired data outcomes.',
        description: 'AI assistant that generates Excel formulas and macros by analyzing initial and target data states, with step-by-step guidance.'
      },
      sections: [
        {
          type: 'text',
          title: 'Project Details',
          content: [`The Excel Table Processor is a user-friendly application designed to empower 
          Excel users by bridging the knowledge gap in table transformations. It provides clear, step-by-step 
          guidance to help users achieve their desired table layout or structure. Users can choose their preferred method of 
          transformation, whether through traditional Excel formulas or VBA macros, offering flexibility and ease of learning.
          `,
          `You can read more at [[https://github.com/Liongchenglex/excel-assistant/blob/main/README.md||GitHub README]]. `]
        },
        {
          type: 'video',
          title: 'Project Demonstrations',
          items: [
            {
              description: 'A walkthrough of the main features and functionality',
              url: 'https://www.youtube.com/embed/q7-RkpwauAM?si=LYZsZuERUhwh47fu'
            }
          ]
        },
        {
          type: 'text',
          title: 'The Inspiration',
          content: [
`I was inspired to build this application after facing challenges with a complex Excel table transformation at work. My colleagues were also struggling with similar issues, which motivated me to find a solution. As someone who takes pride in problem-solving,I experimented with different prompts in ChatGPT to tackle the problem. I discovered that the most effective approach was to provide both the current state of the table and the desired output.`,
`However, at the time, ChatGPT's interface did not support multiple attachments, making it cumbersome to share both inputs. This sparked the idea to create a user-friendly interface that simplifies the process by allowing users to input both the current table state and the desired result seamlessly.`,
`While I am committed to refining and launching this application, its future depends on the genuine interest it generates. If there's little demand, it may remain a personal project, especially considering that OpenAIs continuous advancements could eventually make this solution obsolete.`
          ]},
        {
          type: 'list',
          title: 'Key Features',
          items: [
            `Dynamic Table Input: Users can paste multiple Excel tables directly into the application, preserving their structure and formatting.`,
            `AI-Powered Formula Generation: Utilizes OpenAI's GPT model to create complex Excel formulas based on sample data and expected outcomes.`,
            `Automated VBA Script Creation: Generates VBA scripts to automate repetitive tasks and data transformations in Excel.`,
            `Interactive Follow-up System: Allows users to ask follow-up questions and receive clarifications on the generated formulas or VBA scripts.`,
            `Responsive Design: Fully responsive web interface that works seamlessly across desktop and mobile devices.`
          ]
        },
      ]
    },
      // Example
    // {
    //   id: 3,
    //   title: 'Portfolio Website',
    //   status: 'Completed',
    //   slug: 'portfolio-website',
    //   image: 'images/Project1.png',
    //   skills: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    //   githubLink: 'https://github.com/Liongchenglex/My-Profile',
    //   liveLink: 'https://liongchenglex.github.io/My-Profile/#/',
    //   brief: {
    //     problemStatement: 'Need for a professional online presence to showcase work and skills',
    //     description: 'Built a responsive portfolio website using React and Tailwind CSS with smooth UI/UX',
    //   },
    //   // Flexible sections that you can add/remove as needed
    //   sections: [
    //     {
    //       type: 'text',
    //       title: 'Project Background',
    //       content: 'This project started as a way to showcase my work...'
    //     },
    //     {
    //       type: 'list',
    //       title: 'Key Features',
    //       items: [
    //         'Responsive design for all devices',
    //         'Dynamic blog system',
    //         'Portfolio showcase with filtering'
    //       ]
    //     },
    //     {
    //       type: 'video',
    //       title: 'Project Demonstrations',
    //       items: [
    //         {
    //           title: 'Portfolio Website Overview',
    //           description: 'A walkthrough of the main features and functionality',
    //           url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    //         }
    //       ]
    //     },
    //     {
    //       type: 'tech-stack',
    //       title: 'Technologies Used',
    //       items: {
    //         Frontend: ['React', 'Tailwind CSS', 'Framer Motion'],
    //         Backend: ['Node.js', 'Express'],
    //         Deployment: ['Vercel']
    //       }
    //     },
    //     {
    //       type: 'gallery',
    //       title: 'Development Journey',
    //       items: [
    //         {
    //           image: '/path-to-image1',
    //           caption: 'Initial wireframe design'
    //         },
    //         {
    //           image: '/path-to-image2',
    //           caption: 'Final implementation'
    //         }
    //       ]
    //     },
    //     {
    //       type: 'metrics',
    //       title: 'Impact & Results',
    //       items: [
    //         { label: 'Load Time', value: '0.8s', change: '-40%' },
    //         { label: 'SEO Score', value: '95/100', change: '+15' }
    //       ]
    //     }
    //   ]
    // },
  ];