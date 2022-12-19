import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { describe, it, expect } from 'vitest';
import Header from './header';

describe('Header Component', () => {
  it('renders', async () => {
    const queryClient = new QueryClient();

    const rendered = render(
      <QueryClientProvider client={queryClient}>
          <Header title="Simple Weather App"/>
      </QueryClientProvider>);

    const title = await screen.findByText('Simple Weather App');

    expect(title).toBeInTheDocument();
  });
});
