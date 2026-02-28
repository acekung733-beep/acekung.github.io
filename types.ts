// Added missing React import to fix the namespace error for React.ReactNode
import React from 'react';

export interface Biography {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  category: string;
}

export interface Work {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  image: string;
}

export interface Policy {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}
  color: white;
  text-align: center;
  padding: 20px;
}
