// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BuildRift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BuildRift/i);
    expect(titleElement).toBeInTheDocument();
});
