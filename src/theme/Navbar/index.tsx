import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import ChatbotModal from '@site/src/components/ChatbotModal';

export default function Navbar(props) {
  return (
    <>
      <OriginalNavbar {...props} />
      <div className='chatbotContainer'>
        <ChatbotModal />
      </div>
    </>
  );
}
