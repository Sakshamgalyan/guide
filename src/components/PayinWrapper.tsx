"use client"
import React, { Suspense } from 'react';
import PayinComp from './payinComp';

export default function PayinWrapper({ src }: { src: string }) {
   console.log('PayinWrapper mounted with src:', src);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PayinComp src={src} />
    </Suspense>
  );
}
