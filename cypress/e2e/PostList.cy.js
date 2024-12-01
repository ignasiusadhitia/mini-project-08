describe('PostList Component - E2E Tests', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://lumoshive-academy-media-api.vercel.app/api/games/news',
      {
        body: [
          { id: 1, title: 'Test Post 1', desc: 'Description 1' },
          { id: 2, title: 'Test Post 2', desc: 'Description 2' },
        ],
      }
    ).as('getPosts');

    cy.visit('http://localhost:5173/');
  });

  it('displays posts correctly', () => {
    cy.wait('@getPosts');

    // Assert the number of rendered PostCards
    cy.get('[data-cy="all-posts"]').should('have.length', 2);

    // Validate content for each post
    cy.contains('Test Post 1').should('be.visible');
    cy.contains('Description 1').should('be.visible');

    cy.contains('Test Post 2').should('be.visible');
    cy.contains('Description 2').should('be.visible');
  });

  it('renders no posts when API returns empty array', () => {
    cy.intercept(
      'GET',
      'https://lumoshive-academy-media-api.vercel.app/api/games/news',
      { body: [] }
    ).as('getEmptyPosts');
    cy.visit('http://localhost:5173/');

    cy.wait('@getEmptyPosts');
    cy.get('.post-card').should('not.exist');
  });

  it('renders error message when API fails', () => {
    cy.intercept(
      'GET',
      'https://lumoshive-academy-media-api.vercel.app/api/games/news',
      { statusCode: 500 }
    ).as('getPostsError');
    cy.visit('http://localhost:5173/');

    cy.wait('@getPostsError');
    cy.contains('Error: Request failed with status code 500').should(
      'be.visible'
    );
  });
});
