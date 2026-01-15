// Import React to provide the React namespace for ReactNode
import React from 'react';

export interface ComparisonItem {
  feature: string;
  thirdParty: string;
  greenNova: string;
}

export interface SavingsData {
  monthlyRevenue: number;
  ordersPerDay: number;
  averageOrderValue: number;
}

export interface Article {
  id: string;
  category: string;
  title: string;
  desc: string;
  tag: string;
  content: React.ReactNode;
  image: string;
}