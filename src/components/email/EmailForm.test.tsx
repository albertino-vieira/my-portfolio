import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import EmailForm from './EmailForm';

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn().mockResolvedValue({ status: 200 }),
  },
}));

describe('EmailForm', () => {
  it('handles user input and submission', () => {
    render(<EmailForm />);

    const emailInput = screen.getByPlaceholderText(/jacob@google.com/i);
    const subjectInput = screen.getByPlaceholderText(/Just saying hi/i);
    const messageInput = screen.getByPlaceholderText(/Let's talk about.../i);
    const submitButton = screen.getByText(/Send Message/i);

    fireEvent.change(emailInput, { target: { value: 'jacob@google.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageInput, { target: { value: 'Test Message' } });

    expect(emailInput).toHaveValue('jacob@google.com');
    expect(subjectInput).toHaveValue('Test Subject');
    expect(messageInput).toHaveValue('Test Message');

    fireEvent.click(submitButton);
  });
});
