import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  const researchDirections = [
    {
      icon: '',
      title: 'Interaction as Intelligence',
      description: 'Advancing Human-AI interaction through natural, intuitive, and collaborative interfaces that amplify human capabilities.',
      category: 'Human-AI Interaction',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: '/research#interaction'
    },
    {
      icon: '',
      title: 'Model Architecture',
      description: 'Exploring innovative model architectures beyond transformers to unlock new possibilities in AI system design.',
      category: 'Architecture Research',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: '/research#architecture'
    },
    {
      icon: '',
      title: 'Foundation Model',
      description: 'Building the next generation of foundation models with enhanced reasoning, understanding, and generalization capabilities.',
      category: 'Foundation Models',
      color: 'linear-gradient(135deg,rgb(16, 133, 236) 0%,rgb(122, 238, 244) 100%)',
      link: '/research#foundation'
    },
    {
      icon: '',
      title: 'Agents',
      description: 'Creating autonomous agents with sophisticated agency that can understand goals, plan actions, and execute complex tasks.',
      category: 'Agent Systems',
      color: 'linear-gradient(135deg,rgb(247, 85, 134) 0%,rgb(250, 220, 47) 100%)',
      link: '/research#agents'
    },
    {
      icon: '',
      title: 'Benchmark',
      description: 'Developing comprehensive evaluation frameworks and benchmarks to measure AI system capabilities and safety.',
      category: 'Evaluation & Safety',
      color: 'linear-gradient(135deg,rgb(19, 145, 139) 0%,rgb(243, 97, 143) 100%)',
      link: '/research#benchmark'
    }
  ];

  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        <Link to="/articles/asi4ai-vision-post" className={styles.mainCard}>
          <div className={styles.decorativeElement}></div>
          <div className={styles.mainCardContent}>
            <div className={styles.mainCardTop}>
              <div className={styles.dateTag}>July 2025 • Blog</div>
              <Heading as="h1" className={styles.mainTitle}>
                ASI for AI
              </Heading>
              <p className={styles.mainSubtitle}>
              Igniting the Intelligence Explosion
              </p>
            </div>
            
            <div className={styles.mainCardMiddle}>
              <div className={styles.mainCardFigure}>
                <img src={useBaseUrl('/img/asi4ai_blog/asi4ai_blog_cover.jpg')} alt="ASI for AI Vision" />
              </div>
            </div>
            
            <div className={styles.mainCardBottom}>
              <div className={styles.buttons}>
                <span className={styles.learnMore}>
                  Learn more about our vision →
                </span>
              </div>
            </div>
          </div>
        </Link>

        <div className={styles.sideCards}>
          {researchDirections.map((direction, idx) => (
            <Link key={idx} to={direction.link} className={styles.sideCard} style={{background: direction.color}}>
              <div className={styles.sideCardContent}>
                <h3 className={styles.sideCardTitle}>{direction.title}</h3>
                <p className={styles.sideCardDescription}>{direction.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Advanced AI research and applications - building the future of artificial intelligence through five core research directions">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
