import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './blog.module.css';

export default function Blog() {
  // Manual blog posts data - this ensures the page always works
  const blogPosts = [
    {
      metadata: {
        permalink: '/articles/asi4ai-vision-post',
        title: 'ASI for AI - Igniting the Intelligence Explosion',
        description: 'A comprehensive manifesto outlining how AI can accelerate its own development through recursive self-improvement. We present ASI4AI: turning the intelligence explosion from science fiction into an engineering roadmap, built on five research pillars that transform linear progress into exponential growth.',
        formattedDate: 'July 20, 2025',
        readingTime: 7,
        tags: [
          { label: 'ASI' },
          { label: 'AI Research' },
          { label: 'Position' },
          { label: 'Superintelligence' }
        ]
      }
    },
    // {
    //   metadata: {
    //     permalink: '/articles/first-blog-post',
    //     title: 'First Blog Post',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies.',
    //     formattedDate: 'May 28, 2019',
    //     readingTime: 1,
    //     tags: [
    //       { label: 'docusaurus' }
    //     ]
    //   }
    // },
    // {
    //   metadata: {
    //     permalink: '/articles/long-blog-post',
    //     title: 'Long Blog Post',
    //     description: 'This is the summary of a very long blog post, which would be too long to display entirely.',
    //     formattedDate: 'May 29, 2019',
    //     readingTime: 2,
    //     tags: [
    //       { label: 'hello' },
    //       { label: 'docusaurus' }
    //     ]
    //   }
    // },
    // {
    //   metadata: {
    //     permalink: '/articles/mdx-blog-post',
    //     title: 'MDX Blog Post',
    //     description: 'Blog posts support Docusaurus Markdown features, such as MDX.',
    //     formattedDate: 'August 1, 2021',
    //     readingTime: 1,
    //     tags: [
    //       { label: 'docusaurus' }
    //     ]
    //   }
    // },
    // {
    //   metadata: {
    //     permalink: '/articles/welcome',
    //     title: 'Welcome',
    //     description: 'Docusaurus blogging features are powered by the blog plugin.',
    //     formattedDate: 'August 26, 2021',
    //     readingTime: 2,
    //     tags: [
    //       { label: 'facebook' },
    //       { label: 'hello' },
    //       { label: 'docusaurus' }
    //     ]
    //   }
    // }
  ];

  return (
    <Layout
      title="Blog"
      description="Our vision for Artificial Superintelligence in AI research and development">
      <div className={styles.blogPage}>
        <div className={styles.heroSection}>
          <div className={styles.container}>
            <Heading as="h1" className={styles.pageTitle}>
              Blog
            </Heading>
            <p className={styles.pageSubtitle}>
              Turning the intelligence explosion from science fiction into engineering reality
            </p>
          </div>
        </div>
        
        <div className={styles.container}>
          <div className={styles.blogPostsList}>
            {blogPosts.map((post, index) => {
              const {metadata} = post;
              const {permalink, title, description, date, formattedDate, readingTime, tags} = metadata;
              
              return (
                <article key={index} className={styles.blogPostCard}>
                  <Link to={permalink} className={styles.blogPostLink}>
                    <div className={styles.blogPostContent}>
                      <div className={styles.blogPostMeta}>
                        <span className={styles.blogPostDate}>{formattedDate}</span>
                        {readingTime && (
                          <span className={styles.readTime}>
                            {Math.ceil(readingTime)} min read
                          </span>
                        )}
                        {tags && tags.length > 0 && (
                          <div className={styles.blogPostTags}>
                            {tags.slice(0, 3).map((tag, tagIndex) => (
                              <span key={tagIndex} className={styles.blogPostTag}>
                                {tag.label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <h2 className={styles.blogPostTitle}>{title}</h2>
                      
                      {description && (
                        <p className={styles.blogPostDescription}>{description}</p>
                      )}
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
} 