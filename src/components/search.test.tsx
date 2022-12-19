import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { describe, it, expect } from 'vitest';
import Search from './search';
import { weatherMock } from '../../tests/mocks/weather-data';

describe('Header Component', () => {
  it('renders search box and button', async () => {
    const queryClient = new QueryClient();
    weatherMock();

    const rendered = render(
        <QueryClientProvider client={queryClient}>
            <Search setWeatherData={function (params: string): void {
                throw new Error('Function not implemented.');
            } } />
        </QueryClientProvider>);

    const searchBox = await screen.findByTestId('search');
    expect(searchBox).toBeInTheDocument();
    
    const searchButton = await screen.findByTestId('search-button');
    expect(searchButton).toBeInTheDocument();
  });
});
