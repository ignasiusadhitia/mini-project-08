describe('Navbar Component - E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('displays all navigation links and logo', () => {
    const navLinks = [
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Newsletter',
        href: '/newsletter',
      },
    ];

    cy.get('[data-cy="main-nav"]').within(() => {
      cy.contains('LumosBlog').should('be.visible');
      navLinks.forEach((link) => {
        cy.contains(link.label).should('be.visible');
      });
    });
  });

  it('opens and closes mobile navigation menu', () => {
    cy.viewport('samsung-s10');
    cy.get('[data-cy="hamburger-icon"]').click();
    cy.get('[data-cy="mobile-nav"]').should('be.visible');
    cy.get('[data-cy="close-icon"]').click();
    cy.get('[data-cy="main-nav"]').should('be.visible');
  });

  it('navigates to Blog page when clicking Blog link', () => {
    cy.contains('Blog').click();
    cy.url().should('include', '/');
  });
});
