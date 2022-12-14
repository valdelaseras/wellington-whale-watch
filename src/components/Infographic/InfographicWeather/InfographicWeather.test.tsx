import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InfographicWeather from './InfographicWeather';

describe('<InfographicWeather />', () => {
  test('it should mount', () => {
    render(<InfographicWeather />);
    
    const infographicWeather = screen.getByTestId('InfographicWeather');

    expect(infographicWeather).toBeInTheDocument();
  });
});