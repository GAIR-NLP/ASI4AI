import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './research.module.css';

const researchDirections = {
  interaction: {
    id: 'interaction',
    title: 'Interaction as Intelligence',
    subtitle: 'Advancing Human-AI Collaboration',
    description: 'We believe that the future of AI lies not in replacing humans, but in creating intelligent systems that enhance human capabilities through natural, intuitive interaction.',
    icon: '',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    projects: [
      {
        title: 'Deep Cognition',
        description: 'Developing AI systems that can engage in natural conversations using text, voice, and visual cues simultaneously.',
        date: '22 July 2025',
        image: '/img/deep-cognition.png',
        link: 'https://opensii.ai',
        external: true
      }
    ]
  },
  architecture: {
    id: 'architecture',
    title: 'Model Architecture',
    subtitle: 'Beyond Transformers',
    description: 'Exploring innovative neural architectures that can overcome the limitations of current transformer-based models and unlock new capabilities.',
    icon: '',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    projects: [
      {
        title: 'AlphaGo Moment for Model Architecture Discovery',
        description: 'Investigating efficient alternatives to attention mechanisms for long-sequence modeling and reasoning.',
        date: '25 Jun 2025',
        image: '/img/asi-arch.png',
        link: 'https://github.com/GAIR-NLP/ASI-Arch',
        external: true
      }
    ]
  },
  foundation: {
    id: 'foundation',
    title: 'Foundation Model',
    subtitle: 'Next-Generation AI Systems',
    description: 'Building foundation models that demonstrate enhanced reasoning, understanding, and generalization across diverse domains and tasks.',
    icon: '',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    projects: [
      {
        title: 'OctoThinker',
        description: 'Our flagship foundation model series featuring advanced reasoning capabilities and multimodal understanding.',
        date: '3 March 2025',
        image: '/img/octothinker.png',
        link: 'https://github.com/GAIR-NLP/OctoThinker',
        external: true
      },
      {
        title: 'Thinking with Generated Images',
        description: 'Specialized foundation models designed for scientific discovery and hypothesis generation.',
        date: '28 May 2025',
        image: '/img/thinking_with_generated_images.png',
        link: 'https://github.com/GAIR-NLP/thinking-with-generated-images',
        external: true
      },
      // {
      //   title: 'Efficient Foundation Models',
      //   description: 'Creating powerful foundation models with reduced computational requirements for broader accessibility.',
      //   date: '14 June 2025',
      //   image: '/img/undraw_docusaurus_mountain.svg',
      //   link: '/posts/towards-asi-for-ai'
      // }
    ]
  },
  agents: {
    id: 'agents',
    title: 'Agents',
    subtitle: 'Autonomous AI Systems',
    description: 'Creating autonomous agents with sophisticated agency that can understand goals, plan actions, and execute complex tasks in dynamic environments.',
    icon: '',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    projects: [
      {
        title: 'Efficient Agent Training for Computer Use',
        description: 'A comprehensive platform for deploying and managing autonomous AI agents across various domains.',
        date: '20 May 2025',
        image: '/img/pc-agent-e.png',
        link: 'https://gair-nlp.github.io/PC-Agent-E/',
        external: true
      },
      {
        title: 'DeepResearcher',
        description: 'A comprehensive platform for deploying and managing autonomous AI agents across various domains.',
        date: '4 Apr 2025',
        image: '/img/deepresearcher.png',
        link: 'https://github.com/GAIR-NLP/DeepResearcher',
        external: true
      }
    ]
  },
  benchmark: {
    id: 'benchmark',
    title: 'Benchmark',
    subtitle: 'Evaluation & Measurement',
    description: 'Developing comprehensive evaluation frameworks and benchmarks to accurately measure AI capabilities and drive continuous improvement.',
    icon: '',
    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    projects: [
      {
        title: 'ResearcherBench',
        description: 'A benchmark and evaluation framework for evaluating deep AI research systems on the frontiers of scientific inquiry.',
        date: '21 July 2025',
        image: '/img/researcherbench.png',
        link: 'https://researcherbench.github.io/',
        external: true
      }
    ]
  }
};

function ResearchSection({ direction }) {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    e.target.parentElement.innerHTML = `
      <div style="color: white; text-align: center; font-size: 24px; line-height: 1; font-weight: 600;">
        ${direction.title}
      </div>
    `;
  };

  return (
    <section id={direction.id} className={styles.researchSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitleGroup}>
            <Heading as="h2" className={styles.sectionTitle}>
              {direction.title}
            </Heading>
            <p className={styles.sectionSubtitle}>{direction.subtitle}</p>
          </div>
        </div>
        
        <p className={styles.sectionDescription}>
          {direction.description}
        </p>

        <div className={styles.projectsGrid}>
          {direction.projects.map((project, idx) => {
            const CardComponent = project.external ? 'a' : Link;
            const linkProps = project.external 
              ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: project.link };
            
            return (
              <CardComponent
                key={idx}
                {...linkProps}
                className={styles.projectCard}
              >
                <div className={styles.projectImage}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={handleImageError}
                  />
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectDate}>{project.date}</div>
                </div>
              </CardComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Research() {
  return (
    <Layout
      title="Research"
      description="Exploring the frontiers of artificial intelligence through five core research directions: Interaction as Intelligence, Model Architecture, Foundation Models, Agents, and Benchmarks">
      <div className={styles.researchPage}>
        <div className={styles.heroSection}>
          <div className={styles.container}>
            <Heading as="h1" className={styles.pageTitle}>
              Research
            </Heading>
            <p className={styles.pageSubtitle}>
              Exploring the frontiers of artificial intelligence through five core research directions
            </p>
          </div>
        </div>

        {Object.values(researchDirections).map((direction) => (
          <ResearchSection key={direction.id} direction={direction} />
        ))}
      </div>
    </Layout>
  );
} 