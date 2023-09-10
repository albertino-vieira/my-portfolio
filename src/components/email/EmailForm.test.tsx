import { render, screen, fireEvent } from '@testing-library/react';
import EmailForm from './EmailForm';

describe('EmailForm', () => {
  it('handles user input and submission', () => {
    render(<EmailForm />);
    
    // Find form elements
    const emailInput = screen.getByPlaceholderText(/jacob@google.com/i);
    const subjectInput = screen.getByPlaceholderText(/Just saying hi/i);
    const messageInput = screen.getByPlaceholderText(/Let's talk about.../i);
    const submitButton = screen.getByText(/Send Message/i);

    // Enter user input
    fireEvent.change(emailInput, { target: { value: 'jacob@google.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageInput, { target: { value: 'Test Message' } });

    // Verify user input
    expect(emailInput).toHaveValue('jacob@google.com');
    expect(subjectInput).toHaveValue('Test Subject');
    expect(messageInput).toHaveValue('Test Message');

    // Submit the form
    fireEvent.click(submitButton);
  });
});