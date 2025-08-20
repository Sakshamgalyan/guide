import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import ChatbotButton from '@site/src/components/ChatbotButton';

export default function Navbar(props) {
  return (
    <>
      <OriginalNavbar {...props} />
      <div className='chatbotContainer'>
        <ChatbotButton />
      </div>
    </>
  );
}
