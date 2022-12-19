import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { describe, it, expect } from 'vitest';
import WeatherLayout from './weatherlayout';

describe('Weather Component', () => {
  it('renders', () => {
    const queryClient = new QueryClient();

    const rendered = render(
      <QueryClientProvider client={queryClient}>
          <WeatherLayout />
      </QueryClientProvider>);

    expect(rendered).toMatchSnapshot();
  });
});
