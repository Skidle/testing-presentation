import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { UserProfileEdit } from '../components/example_advanced';

// Popisuje testování komponenty UserProfileEdit
describe('UserProfileEdit', () => {
    // Arrange: nastavíme test a potřebná data

    // Mockování API volání
    const submitFormMock = jest.fn().mockResolvedValue({});

    // Testovací data
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password',
    };

    test('should submit form data correctly', () => {
        // Act: zobrazíme komponentu a vyplníme pole formuláře

        render(
            <UserProfileEdit onSave={submitFormMock} user={user} />
        );

        fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Jane Doe' } });
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'jane.doe@example.com' } });
        fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'newpassword' } });

        // Odeslání formuláře
        fireEvent.submit(screen.getByRole('button'));

        // Assert: ověříme, že se volá submitFormMock s korektními daty
        expect(submitFormMock).toHaveBeenCalledWith({
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            password: 'newpassword',
        });
    });
});
