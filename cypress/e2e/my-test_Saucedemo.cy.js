/// <reference types="cypress" />

import { WebPage } from "../support/pages/webPage";

describe("Prueba Tecnica", () => {
    let datos;
    const webPage = new WebPage

    before('Before', () => {
        cy.fixture('archivoFixture').then(archivoFixtureParametro => {
            datos = archivoFixtureParametro;
        })
    })

    it('my-test_Saucedemo - firstUser', () => {
        cy.visit('')
        cy.doType('#user-name', datos.login.user)
        cy.doType('#password', datos.login.pass)
        cy.doClick('#login-button')
        cy.doClick('#add-to-cart-sauce-labs-backpack')
        cy.doClick('.shopping_cart_link')
        cy.doClick('#checkout')
        cy.get('#first-name').type(datos.ckeckout.firstName)
        cy.get('#last-name').type(datos.ckeckout.lastName)
        cy.get('#postal-code').type(datos.ckeckout.zip)
        webPage.btnContinue('#continue')
        cy.get('.inventory_item_name').should('have.text', datos.ckeckoutOverview.product)
        cy.get('.item_pricebar').should('have.text', datos.ckeckoutOverview.price)
        cy.doClick('#finish')
        cy.get('.complete-header').invoke('text').then(text => {
            assert.equal(text, 'Thank you for your order!')
        })
        cy.doClick('#back-to-products')
        cy.doClick('#react-burger-menu-btn')
        cy.doClick('#logout_sidebar_link')
    });

    it('my-test_Saucedemo - secondUser', () => {
        cy.visit('')
        cy.doType('#user-name', datos.login.user2)
        cy.doType('#password', datos.login.pass)
        cy.doClick('#login-button')
        cy.doClick('#add-to-cart-sauce-labs-backpack')
        cy.doClick('.shopping_cart_link')
        cy.doClick('#checkout')
        cy.get('#first-name').type(datos.ckeckout.firstName)
        cy.get('#last-name').type(datos.ckeckout.lastName)
        cy.get('#postal-code').type(datos.ckeckout.zip)
        webPage.btnContinue('#continue')
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        cy.get('.item_pricebar').should('have.text', '$29.99')
        cy.doClick('#finish')
        cy.get('.complete-header').invoke('text').then(text => {
            assert.equal(text, 'Thank you for your order!')
        })
        cy.doClick('#back-to-products')
        cy.doClick('#react-burger-menu-btn')
        cy.doClick('#logout_sidebar_link')
    });
})
