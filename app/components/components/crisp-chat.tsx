'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('cf40b258-43b2-4303-bc9b-904a32df712a');
  }, []);

  return null;
};
