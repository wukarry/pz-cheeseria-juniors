/// <reference types="cypress" />

context('Cart Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Add items to cart', () => {

    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-3]').click();

    cy.get('[data-cy=badge-count]').should('have.text', '2');

    // check Cart items
    cy.get('[data-cy=cart-button]').click();
    cy.get('[data-cy=cart-drawer]').should('be.visible');
    cy.get('[data-cy=cart-item-2]').should('be.visible');
    cy.get('[data-cy=cart-item-3]').should('be.visible');
  })

})
context('Description Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Shows item\'s description card', () => {
    cy.get('[data-cy=cheese-card-2]').click();
    cy.get('[data-cy=description-dialog]').should('be.visible');
  })

})

context('Show Purchases History', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('User\'s purchases history', () => {
    cy.get('[data-cy=add-to-cart-1]').click();
    cy.get('[data-cy=add-to-cart-1]').click();
    cy.get('[data-cy=cart-button]').click();
    cy.get('[data-cy=purchase-button]').click();
    cy.visit('/');
    cy.get('[data-cy=purchases-button]').click();
    cy.get('[data-cy=history-drawer]').should('be.visible');
    cy.get('[data-cy=history-item-1]').should('be.visible');
  })

})