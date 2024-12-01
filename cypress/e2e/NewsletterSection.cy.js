describe('NewsletterSection Component - E2E Tests', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://lumoshive-academy-media-api.vercel.app/api/subscribe',
      {
        statusCode: 200,
        body: { success: true },
      }
    ).as('subscribe');
    cy.visit('http://localhost:5173/blog/2024/11/16/ratatan-16112024'); // Ganti dengan URL sebenarnya
  });

  it('renders the form correctly', () => {
    cy.get('h2').contains('Newsletter').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('button[type="submit"]').contains('Subscribe').should('be.visible');
  });

  it('allows user to subscribe successfully', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('button[type="submit"]').click();

    cy.wait('@subscribe').then((interception) => {
      // eslint-disable-next-line jest/valid-expect
      expect(interception.response.statusCode).to.equal(200);
    });

    cy.get('input[name="email"]').should('have.value', '');
  });
});
