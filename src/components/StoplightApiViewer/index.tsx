import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const StoplightWebComponent = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState('350px');

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'stoplightHeight' && typeof event.data.height === 'number') {
        setIframeHeight(`${event.data.height}px`);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      iframeRef.current?.contentWindow?.postMessage(
        { type: 'setTheme', theme: isDark ? 'dark' : 'light' },
        '*'
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-6 px-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-7xl overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <iframe
          ref={iframeRef}
          src="/redoc.html"
          title="API Reference"
          style={{
            width: '100%',
            height: iframeHeight,
            border: 'none',
            overflow: 'hidden',
            borderRadius: '12px',
          }}
        />
      </motion.div>
    </div>
  );
};

export default StoplightWebComponent;
