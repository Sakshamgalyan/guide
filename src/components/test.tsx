import React, { useEffect, useRef } from 'react';
// import '@stoplight/elements/styles.min.css';
// import '@stoplight/elements/web-components.min.js';

interface StoplightViewerProps {
  specUrl: string;
}

const StoplightViewer: React.FC<StoplightViewerProps> = ({ specUrl }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.apiDescriptionUrl = specUrl;
      el.router = 'hash';
      el.layout = 'stacked';
      el.tryIt = true;
      el.hideSidebar = true;
    }
  }, [specUrl]);

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '1rem' }}>
      <elements-api ref={ref} />
    </div>
  );
};

export default StoplightViewer;
