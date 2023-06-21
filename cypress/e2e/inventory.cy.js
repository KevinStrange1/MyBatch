// must have the stout recipe found in server/models/recipes.json in the ourRecipes database

describe('ingredients', () => {
  it('renders all the content on the page', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Inventory').click();

    cy.contains('Current hops').should('be.visible');
    cy.contains('Current malts').should('be.visible');
    cy.contains('Current yeast').should('be.visible');
    cy.contains('Current additions').should('be.visible');
    
    cy.get('#hops-dd').should('exist');
    cy.get('#malts-dd').should('exist');
    cy.get('#yeast-dd').should('exist');
    cy.get('#additions-dd').should('exist');

    cy.get('input').should('have.length', 4);

    cy.contains('Add').should('be.visible')
  })

  it('should add, save and delete ingredients', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Inventory').click();

    cy.get('#hops-dd').select('Fuggle');

    cy.get('input').first().type('3');

    cy.contains('Add').click();

    cy.reload();

    cy.contains('Fuggle').should('be.visible');
    cy.contains('3').should('be.visible');

    cy.get('.delete-button').first().click();

    cy.contains('Fuggle 3').should('not.exist');
  })
})