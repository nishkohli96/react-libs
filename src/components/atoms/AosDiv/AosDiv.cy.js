import AosDiv from '.';

it('matches AosDiv Text', () => {
  cy.mount(<AosDiv />);
  cy.get('[data-aos="fade-right"]').should(
    'contains.text',
    'some scrollable text animated'
  );
});
