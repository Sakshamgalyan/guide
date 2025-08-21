import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';

export default function DocSidebarItem(props) {
  const { item } = props;

  return (
    <div >
      <OriginalDocSidebarItem {...props} />
    </div>
  );
}
