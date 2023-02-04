import React from 'react';
import FinalForm from './FinalForm';

describe('<FinalForm />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<FinalForm />);
    });
});
