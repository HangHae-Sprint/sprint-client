// import { Router } from 'react-router-dom';
import Router from './shared/Router';
import './App.css';
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
