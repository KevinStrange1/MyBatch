// must have the stout recipe found in server/models/recipes.json in the ourRecipes database

describe('template spec', () => {
  it('render the content on the page', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('My Recipes').click();

    cy.contains('Release creativity').should('be.visible');
    cy.contains('Create your own recipe').should('be.visible');

    cy.contains('Name').should('be.visible');

    cy.contains('Beer Style').should('be.visible');

    cy.contains('Add Your Instructions here').should('be.visible');

    cy.contains('Details').should('be.visible');

    cy.contains('Ingredients').should('be.visible');

    cy.contains('Hops').should('be.visible');
    cy.contains('Malts').should('be.visible');
    cy.contains('Yeas').should('be.visible');

    cy.contains('Qty').should('be.visible');

    cy.contains('Your recipe list').should('be.visible');
  })

  it('should be able to add recipes', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('My Recipes').click();

    cy.get('#recipeName').invoke('removeAttr', 'disabled').type('pale ale');
    cy.get('#beerStyle').type('ale')

    cy.get('textarea').type('this is where the instructions go')

    cy.get('select').eq(0).select('Fuggle')
    cy.get('select').eq(1).select('Pale Malt')
    cy.get('select').eq(2).select('English Ale')

    cy.get('#hopsQuantity').type(1)
    cy.get('#maltsQuantity').type(2)
    cy.get('#yeastQuantity').type(3) 

    cy.get('button[type="submit"]').click()
  })
})