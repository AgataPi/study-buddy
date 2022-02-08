import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('FormField', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
