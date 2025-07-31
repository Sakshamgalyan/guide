import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const CompanyName = () => {
  const { siteConfig } = useDocusaurusContext();
  return <>{siteConfig.customFields.companyName}</>;
};
