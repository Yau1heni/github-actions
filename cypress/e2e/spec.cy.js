describe('template spec', () => {
  before('visit url', () => cy.visit('/'));

  const text = 'some text';

  it('get input element, type some text', () => {
    cy.get('#hw1-textarea').type(text);
    cy.get('#hw1-button').click();
    cy.get('#hw1-text-1').should('have.text', text);
  });

  it('renders the title', () => {
    cy.get('#hw1').find('#hwTitle').should('have.text', 'Homework #1');
  });
});