import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { describe, it, expect } from 'vitest';
import { mockData, weatherMock } from '../../tests/mocks/weather-data';
import Cards from './cards';

describe('Header Component', () => {
  it('renders card and city name', async () => {
    const queryClient = new QueryClient();
    weatherMock();

    const rendered = render(
      <QueryClientProvider client={queryClient}>
          <Cards data={mockData} />
      </QueryClientProvider>);

    const cityName = await screen.findByText('Paris');
    expect(cityName).toBeInTheDocument();
  });
});
