import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const NewsList = [
  {
    title: 'AlphaGo Moment for Model Architecture Discovery',
    date: '24 Jun 2025',
    category: 'Model Architecture',
    researchDirection: 'Model Architecture',
    description: 'For the first time, AI discovers 106 new model architectures better than human-designed ones.',
    image: useBaseUrl('/img/asi-arch.png'),
    link: 'https://github.com/GAIR-NLP/ASI-Arch',
    external: true
  },
  {
    title: 'MegaScience',
    date: '23 July 2025',
    category: 'Foundation Model',
    researchDirection: 'Foundation Model',
    description: 'Pushing the frontiers of post-training datasets for science reasoning.',
    image: useBaseUrl('/img/megascience.png'),
    link: 'https://github.com/GAIR-NLP/MegaScience',
    external: true
  },
  {
    title: 'Deep Cognition',
    date: '22 July 2025',
    category: 'Interaction as Intelligence',
    researchDirection: 'Interaction',
    description: 'We introduce Deep Cognition, a system that transforms the human role from giving instructions to cognitive oversight.',
    image: useBaseUrl('/img/deep-cognition.png'),
    link: 'https://opensii.ai',
    external: true
  },
  {
    title: 'ResearcherBench',
    date: '22 July 2025',
    category: 'Benchmark',
    researchDirection: 'Benchmark',
    description: 'A benchmark and evaluation framework for evaluating deep AI research systems on the frontiers of scientific inquiry.',
    image: useBaseUrl('/img/researcherbench.png'),
    link: 'https://researcherbench.github.io/',
    external: true
  },
  {
    title: 'Thinking with Generated Images',
    date: '28 May 2025',
    category: 'Foundation Model',
    researchDirection: 'Foundation Model',
    description: 'A single LMM (Large Multimodal Model) that spontaneously generates and reasons with intermediate visual thoughts via a native long-multimodal thought process.',
    image: useBaseUrl('/img/thinking_with_generated_images.png'),
    link: 'https://github.com/GAIR-NLP/thinking-with-generated-images',
    external: true
  },
  {
    title: 'Efficient Agent Training for Computer Use',
    date: '20 May 2025',
    category: 'Agents',
    researchDirection: 'Agents',
    description: 'An efficient agent training framework that elicits strong computer use capabilities with remarkable data efficiency.',
    image: useBaseUrl('/img/pc-agent-e.png'),
    link: 'https://gair-nlp.github.io/PC-Agent-E/',
    external: true
  }
];

function NewsCard({title, date, category, researchDirection, description, image, link, external}) {
  const CardComponent = external ? 'a' : Link;
  const linkProps = external 
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : { to: link };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    e.target.parentElement.innerHTML = `
      <div style="color: white; text-align: center; font-size: 24px; line-height: 1; font-weight: 600;">
        ${researchDirection}
      </div>
    `;
  };

  return (
    <CardComponent
      {...linkProps}
      className={styles.newsCard}
    >
      <div className={styles.newsImage}>
        <img 
          src={image} 
          alt={title}
          onError={handleImageError}
        />
      </div>
      <div className={styles.newsContent}>
        <div className={styles.newsHeader}>
          <h3 className={styles.newsTitle}>{title}</h3>
        </div>
        <p className={styles.newsDescription}>{description}</p>
        <div className={styles.newsFooter}>
          <div className={styles.newsDate}>{date}</div>
          <div className={styles.researchDirection}>{researchDirection}</div>
        </div>
      </div>
    </CardComponent>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        <Heading as="h2" className={styles.featuresTitle}>
          Latest News
        </Heading>
        <p className={styles.featuresSubtitle}>
          Stay updated with our latest research breakthroughs, product releases, 
          and developments in ASI4AI.
        </p>
        <div className={styles.newsGrid}>
          {NewsList.map((props, idx) => (
            <NewsCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
