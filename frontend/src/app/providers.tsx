import { queryClient } from '@/core/lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
