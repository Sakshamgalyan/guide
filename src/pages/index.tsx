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
        <Heading as="h1" className="hero__title"
        style={{ color: 'white' }}>
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
        
        <section className='cardContainer'
          style={{
            marginBottom: '100px', marginTop: '50px'
          }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Link to="/docs/White‑Label Merchant Onboarding and Configuration"
            className={styles.merchantDocs}>
              <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Merchant Docs
              </div>
              <div style={{ fontSize: '14px' }}>
                Get Started →
              </div>
              </div>
            </Link>
            <Link to="/"
            className={styles.apiDocs}>
              <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Alternative Payment Methods(APM) Guide
              </div>
              <div style={{ fontSize: '14px' }}>
                Coming Soon
              </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}