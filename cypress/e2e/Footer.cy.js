describe('Footer Component - E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('displays all footer navigation links', () => {
    const navLinks = [
      { name: 'Twitter', path: 'https://twitter.com' },
      { name: 'LinkedIn', path: 'https://linkedin.com' },
      { name: 'Email', path: '#' },
      { name: 'RSS feed', path: '#' },
      { name: 'Add to Feedly', path: '#' },
    ];

    navLinks.forEach(({ name, path }) => {
      cy.contains(name)
        .should('be.visible')
        .should('have.attr', 'href', path)
        .and('have.attr', 'target', '_black')
        .and('have.attr', 'rel', 'noreferrer noopener');
    });
  });

  it('clicking on links navigates to the correct URL', () => {
    cy.contains('Twitter').should('have.attr', 'href', 'https://twitter.com');
    cy.contains('LinkedIn').should('have.attr', 'href', 'https://linkedin.com');
  });
});
