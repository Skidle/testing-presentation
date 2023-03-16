import React from 'react';
import { render, screen } from '@testing-library/react';
import { Greeting } from '../components/example_basic';

describe('Greeting', () => {
    // Arrange - nastavíme test a potřebná data
    const props = { name: 'Jane' };

    // Act - zobrazíme komponentu a provedeme akci
    render(<Greeting {...props} />);
    const greetingElement = screen.getByText('Hello Jane!');

    // Assert - ověříme očekávaný výsledek testu
    test('renders a greeting with the correct name', () => {
        expect(greetingElement).toBeInTheDocument();
    });
});
