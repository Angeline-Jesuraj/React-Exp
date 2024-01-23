import React from 'react';
import { render, waitFor } from '@testing-library/react';
import AxiosEg from './AxiosEg';

jest.mock('axios');

describe('AxiosEg Component', () => {
  it('renders loading initially and then displays data', async () => {
    // Mock Axios response
    const mockData = { userId: 1, id: 1, title: 'delectus aut autem', completed: false };
    // @ts-ignore
    axios.get.mockResolvedValueOnce({ data: mockData });

    // Render the component
    const { getByText } = render(<AxiosEg />);

    // Assert that "Loading..." is displayed initially
    expect(getByText('Loading...')).toBeInTheDocument();

    // Wait for the asynchronous data fetching to complete
    await waitFor(() => {
      // Assert that the data is displayed
      expect(getByText('Axios Example')).toBeInTheDocument();
      expect(getByText(/delectus aut autem/)).toBeInTheDocument();
    });
  });

  it('handles errors and displays an error message', async () => {
    // Mock Axios error
    const errorMessage = 'Mocked error message';
    // @ts-ignore
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    // Render the component
    const { getByText } = render(<AxiosEg />);

    // Wait for the asynchronous data fetching to complete
    await waitFor(() => {
      // Assert that the error message is displayed
      expect(getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });
  });
});
