import FinalForm from '.';

describe('<FinalForm />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<FinalForm />);
    });
});
