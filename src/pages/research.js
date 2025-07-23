import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
        description: 'We introduce Deep Cognition, a system that transforms the human role from giving instructions to cognitive oversight.',
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
        description: 'For the first time, AI discovers 106 new model architectures better than human-designed ones.',
        date: '24 July 2025',
        image: '/img/asi-arch.png',
        link: 'https://github.com/GAIR-NLP/ASI-Arch',
        external: true
      }
    ]
  },
  foundation: {
    id: 'foundation',
    title: 'Foundation Model',
    subtitle: 'Next-Generation Foundation Models',
    description: 'Building foundation models that demonstrate enhanced reasoning, understanding, and generalization across diverse domains and tasks.',
    icon: '',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    projects: [
      {
        title: 'MegaScience',
        description: 'Pushing the frontiers of post-training datasets for science reasoning.',
        date: '23 July 2025',
        image: '/img/megascience.png',
        link: 'https://github.com/GAIR-NLP/MegaScience',
        external: true
      },
      {
        title: 'OctoThinker',
        description: 'Exploring how different early pre(mid)-training strategies could bring impact to post-training stages, especially during the period of Reinforcement Learning (RL).',
        date: '3 March 2025',
        image: '/img/octothinker.png',
        link: 'https://github.com/GAIR-NLP/OctoThinker',
        external: true
      },
      {
        title: 'Thinking with Generated Images',
        description: 'A single LMM (Large Multimodal Model) that spontaneously generates and reasons with intermediate visual thoughts via a native long-multimodal thought process.',
        date: '28 May 2025',
        image: '/img/thinking_with_generated_images.png',
        link: 'https://github.com/GAIR-NLP/thinking-with-generated-images',
        external: true
      }
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
        description: 'An efficient agent training framework that elicits strong computer use capabilities with remarkable data efficiency.',
        date: '20 May 2025',
        image: '/img/pc-agent-e.png',
        link: 'https://gair-nlp.github.io/PC-Agent-E/',
        external: true
      },
      {
        title: 'DeepResearcher',
        description: 'Scaling deep research via reinforcement learning in real-world environments.',
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
        date: '22 July 2025',
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
                    src={useBaseUrl(project.image)} 
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