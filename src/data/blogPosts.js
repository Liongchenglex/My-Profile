// src/data/blogPosts.js
export const blogSections = {
    'public-diary': {
      title: 'Public Diary',
      description: 'Personal thoughts and daily musings',
      activeClass: 'bg-purple-600 text-white',
      hoverClass: 'hover:bg-purple-50'
    },
    'technology': {
      title: 'Technology',
      description: 'Insights and experiences in tech',
      activeClass: 'bg-blue-600 text-white',
      hoverClass: 'hover:bg-blue-50'
    },
    'wellbeing': {
      title: 'Wellbeing',
      description: 'Health, mindfulness, and personal growth',
      activeClass: 'bg-green-600 text-white',
      hoverClass: 'hover:bg-green-50'
    },
    'book-reviews': {
        title: 'Book Reviews',
        description: "Thoughts and analysis on books I've read",
        activeClass: 'bg-yellow-600 text-white',
        hoverClass: 'hover:bg-yellow-50'
      }
  };
  
  export const blogPosts = [
    {
      id: 1,
      title: 'From Legal Briefs to Tech Sprints: A Career Pivot Guide',
      slug: 'From Legal Briefs to Tech Sprints: A Career Pivot Guides',
      description: 'A look into my journey pivoting into tech and the actonable steps to take',
      mediumUrl: "https://medium.com/@chenglex1/from-legal-briefs-to-tech-sprints-a-career-pivot-guide-bfb7b0ef245b",
      section: 'public-diary',
      tags: ['Career', 'Technology', 'Learning', 'Self-Improvement'],
      date: '2024-11-22',
      readTime: '5 mins',
      image: 'images/blog1.jpg'
    },
    {
        id: 2,
        title: 'Microservices: Breaking Down the Modern Software Architecture',
        slug: 'my-journey-into-web-development',
        description: 'A deep dive into microservices and its relevance today',
        mediumUrl: "https://medium.com/@chenglex1/microservices-breaking-down-the-modern-software-architecture-6e666119ece9",
        section: 'Technology',
        tags: ['Technology', 'Cloud', 'Microservices'],
        date: '2024-11-23',
        readTime: '4 min',
        image: 'images/blog2.png'
      },

      // {
      //   id: 3,
      //   title: 'Atomic Habits - Book Review',
      //   slug: 'atomic-habits-book-review',
      //   description: 'An in-depth review of James Clear`s Atomic Habits and how it changed my perspective',
      //   section: 'book-reviews', // Using our new section
      //   tags: ['books', 'self-improvement', 'habits'],
      //   date: '2024-02-05',
      //   readTime: '6 min',
      //   image: '/api/placeholder/400/300'
      // },
    // Add more posts here...
  ];
  
  // Helper function to get post by slug
  export const getPostBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
  };
  
  // Helper function to get posts by section
  export const getPostsBySection = (section) => {
    if (section === 'all') return blogPosts;
    return blogPosts.filter(post => post.section === section);
  };
  
  // Helper function to get all unique tags from posts
  export const getAllTags = () => {
    const tags = new Set();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  };
  
  // Helper function to get tags for a specific section
  export const getTagsBySection = (section) => {
    const tags = new Set();
    getPostsBySection(section).forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  };

  // Helper function to get recommended posts based on tags
export const getRecommendedPosts = (currentPost, limit = 3) => {
    // Get posts that share tags with current post but aren't the current post
    const relatedPosts = blogPosts
      .filter(post => 
        post.id !== currentPost.id && // Exclude current post
        post.tags.some(tag => currentPost.tags.includes(tag)) // Must share at least one tag
      )
      .map(post => ({
        ...post,
        // Calculate relevance score based on number of shared tags
        relevanceScore: post.tags.filter(tag => 
          currentPost.tags.includes(tag)
        ).length
      }))
      .sort((a, b) => 
        // Sort by relevance score (most relevant first)
        b.relevanceScore - a.relevanceScore
      )
      .slice(0, limit); // Get only the specified number of posts
  
    return relatedPosts;
  };