describe('PostCard Component - E2E Tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://lumoshive-academy-media-api.vercel.app/api/games/news',
      {
        body: [
          {
            key: 'test-post',
            title: 'E2E Test Post',
            thumb: '/e2e-image.jpg',
            author: 'E2E User',
            tag: 'E2E Tag',
            time: '2023-03-01',
            desc: 'E2E description.',
          },
        ],
      }
    ).as('getPosts');

    cy.visit('http://localhost:5173/');
  });

  it('displays post details correctly', () => {
    cy.wait('@getPosts');

    // Validate image
    cy.get('img')
      .should('have.attr', 'src', '/e2e-image.jpg')
      .and('have.class', 'object-cover');

    // Validate title
    cy.contains('E2E Test Post').should('be.visible');

    // Validate author and time
    cy.contains('E2E User').should('be.visible');
    cy.contains('2023-03-01').should('be.visible');

    // Validate description
    cy.contains('E2E description.').should('be.visible');

    // Validate tag
    cy.contains('E2E Tag').should('be.visible');
  });

  it('navigates to blog details on click', () => {
    cy.wait('@getPosts');
    cy.contains('E2E Test Post').click();

    // Validate navigation
    cy.url().should('include', '/blog/test-post');
  });
});
