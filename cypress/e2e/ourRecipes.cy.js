// must have the stout recipe found in server/models/recipes.json in the ourRecipes database

describe('Our Recipes', () => {
  it('renders everyhting on the page', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Our Recipes').click();

    cy.contains('Here are some of our most popular recipes').should('be.visible');

    cy.contains('Stout').should('be.visible');

    cy.contains('A rich and dark beer with flavors of roasted malt, coffee, and chocolate, balanced bitterness, and a creamy mouthfeel.').should('be.visible');

    cy.get('.triangle-down').eq(0).as('btn').click();

    cy.contains('Hops').should('be.visible');

    cy.contains('Fuggle 30 g Adding time: 60 minutes');

    cy.contains('Fuggle 20 g Adding time: 15 minutes').should('be.visible');

    cy.contains('Yeast').should('be.visible');

    cy.contains('English Ale').should('be.visible');

    cy.contains('Malts').should('be.visible');

    cy.contains('Pale Malt 4 kg').should('be.visible');

    cy.contains('Roasted Barley 0.5 kg').should('be.visible');

    cy.contains('Chocolate Malt 0.3 kg').should('be.visible');

    cy.contains('Black Patent Malt 0.2 kg').should('be.visible');

    cy.contains('Recipe instructions').should('be.visible');

    cy.contains('Mash the Pale Malt, Roasted Barley, Chocolate Malt, and Black Patent Malt with hot water at 67°C for 60 minutes.').should('be.visible');
    cy.contains('Boil the wort and add Fuggle hops for bittering at 60 minutes.').should('be.visible');
    cy.contains('Add Fuggle hops at 15 minutes remaining in the boil.').should('be.visible');
    cy.contains('Cool the wort and transfer to a fermentation vessel.').should('be.visible');
    cy.contains('Pitch the English Ale yeast and ferment at 18-20°C for one to two weeks.').should('be.visible');
    cy.contains('Bottle or keg the beer, carbonate, and enjoy!').should('be.visible');
  })
})