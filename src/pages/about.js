import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './about.module.css';

const teamMembers = [
  {
    name: 'Pengfei Liu',
    role: 'Director',
    bio: 'Leading AI research with focus on safe AGI development and human-AI alignment.',
    expertise: ['Machine Learning', 'AI Safety', 'Neural Networks']
  },
  {
    name: 'Prof. Michael Zhang',
    role: 'Chief Technology Officer',
    bio: 'Expert in large language models and distributed AI systems architecture.',
    expertise: ['Language Models', 'System Architecture', 'Distributed Computing']
  },
  {
    name: 'Dr. Emma Rodriguez',
    role: 'AI Ethics Lead',
    bio: 'Ensuring responsible AI development and addressing bias in AI systems.',
    expertise: ['AI Ethics', 'Bias Mitigation', 'Policy Research']
  },
  {
    name: 'Dr. James Liu',
    role: 'Principal Research Scientist',
    bio: 'Pioneering work in multimodal AI and human-computer interaction.',
    expertise: ['Computer Vision', 'Multimodal AI', 'HCI']
  }
];

export default function About() {
  return (
    <Layout
      title="About ASI4AI"
      description="Learn about our team and mission to advance artificial intelligence for the benefit of humanity">
      <div className={styles.aboutPage}>
        <div className={styles.heroSection}>
          <div className={styles.container}>
            <Heading as="h1" className={styles.pageTitle}>
              About
            </Heading>
            <p className={styles.pageSubtitle}>
              Our mission to advance artificial intelligence for the benefit of humanity
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.contentSection}>
            <div className={styles.missionSection}>
              <Heading as="h2" className={styles.sectionTitle}>
                Our Mission
              </Heading>
              <p className={styles.missionText}>
                ASI4AI is dedicated to building Artificial Superintelligence (ASI) that accelerates the development of AI itself. Our mission is to ignite the intelligence explosion: a self-reinforcing cycle where AI recursively improves its own capabilities, transforming the pace of scientific discovery from a linear crawl to exponential growth.
              </p>
              <p className={styles.missionText}>
                We believe the future of AI is a symbiotic partnership between humans and superintelligent systems. By combining autonomous AI discovery with human guidance and validation, we aim to create a new era of research where breakthroughs in medicine, science, and technology are achieved at unprecedented speed and scale.
              </p>
            </div>

            <div className={styles.visionSection}>
              <Heading as="h2" className={styles.sectionTitle}>
                Our Vision
              </Heading>
              <p className={styles.visionText}>
                We envision a world where ASI acts as its own research engine, designing and building ever more capable versions of itself. This intelligence explosion will be guided by human values and oversight, ensuring that the benefits of superintelligence are safe, aligned, and broadly distributed. Our goal is to compress decades of progress into years, unlocking discoveries that expand the frontiers of human knowledge.
              </p>
            </div>

            <div className={styles.teamSection}>
              <Heading as="h2" className={styles.sectionTitle}>
                Our Team
              </Heading>
              <p className={styles.teamIntro}>
                Our diverse team brings together world-class researchers, engineers, and ethicists from leading 
                institutions around the globe. Together, we're pushing the boundaries of what's possible in AI 
                while ensuring responsible development practices.
              </p>
              
              <div className={styles.teamGrid}>
                {teamMembers.map((member, index) => (
                  <div key={index} className={styles.teamMember}>
                    <div className={styles.memberPhoto}>
                      <div className={styles.photoPlaceholder}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className={styles.memberInfo}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberRole}>{member.role}</p>
                      <p className={styles.memberBio}>{member.bio}</p>
                      <div className={styles.memberExpertise}>
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className={styles.expertiseTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 