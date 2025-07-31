import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import type { ComponentProps } from 'react';
import OriginalLink from '@docusaurus/Link';
import OriginalHeading from '@theme/Heading';
import OriginalLayout from '@theme/Layout';

const Layout = OriginalLayout as (props: ComponentProps<'div'> & {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}) => JSX.Element;


const Heading = OriginalHeading as (props: ComponentProps<'h1'> & { as: keyof JSX.IntrinsicElements }) => JSX.Element;
const Link = OriginalLink as (props: ComponentProps<'a'> & { to: string }) => JSX.Element;


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
              backgroundColor: '#DFF34F',
              color: '#1F1438',
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
            <Link to="/docs/api"
            className={styles.apiDocs}>
              <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                API Reference
              </div>
              <div style={{ fontSize: '14px' }}>
                Try it out →
              </div>
              </div>
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
            <Link to="/"
            className={styles.apmDocs}>
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