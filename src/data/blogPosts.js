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
      title: 'Understanding Blockchain Fundamentals',
      slug: 'understanding-blockchain-fundamentals',
      description: 'A deep dive into blockchain technology and its applications',
      mediumUrl: "https://medium.com/@chenglex1",
      section: 'technology',
      tags: ['blockchain', 'cryptocurrency', 'web3'],
      date: '2024-01-15',
      readTime: '5 min',
      image: '/api/placeholder/400/300'
    },
    {
        id: 2,
        title: 'My Journey into Web Development',
        slug: 'my-journey-into-web-development',
        description: 'Personal reflections on becoming a web developer and lessons learned along the way',
        content: `
# My Journey into Web Development
    
When I first started my journey into web development, I had no idea where it would lead me...
    
## The Beginning
It all started when I decided to make a career switch...
    
## Key Learnings
1. Consistency is key
2. Build real projects
3. Engage with the community
    
## Current Status
Now, after months of dedicated learning...
        `,
        section: 'public-diary',
        tags: ['career', 'web-development', 'learning', 'blockchain'],
        date: '2024-02-01',
        readTime: '4 min',
        image: '/api/placeholder/400/300'
      },

      {
        id: 3,
        title: 'Atomic Habits - Book Review',
        slug: 'atomic-habits-book-review',
        description: 'An in-depth review of James Clear`s Atomic Habits and how it changed my perspective',
        content: `
# My Journey into Web Development

When I first started my journey into web development, I had no idea where it would lead me...

## The Beginning
It all started when I decided to make a career switch...

## Key Learnings
1. Consistency is key
2. Build real projects
3. Engage with the community

## Current Status
Now, after months of dedicated learning...
`,
        section: 'book-reviews', // Using our new section
        tags: ['books', 'self-improvement', 'habits'],
        date: '2024-02-05',
        readTime: '6 min',
        image: '/api/placeholder/400/300'
      },
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