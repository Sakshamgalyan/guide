import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
            <Link
            className="button button--secondary button--lg"
            to="/docs/White‑Label Merchant Onboarding and Configuration"
            style={{ 
              backgroundColor: '#5223BC', 
              color: 'white',
              transition: 'background-color 0.3s ease',
            }}
            >
            Get Started with Onboarding
            </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Comprehensive guide for merchant onboarding and configuration on Paysecure."
    >
      <HomepageHeader />
      <main>
        <section className="container">
          <p>
            Welcome to the Paysecure Guide. This guide will walk you
            through the process of onboarding and configuring your account
            on the Paysecure platform.
          </p>
          <p>
            Whether you're new to Paysecure or looking to optimize your setup,
            you'll find all the information you need here.
          </p>
        </section>
      </main>
    </Layout>
  );
}