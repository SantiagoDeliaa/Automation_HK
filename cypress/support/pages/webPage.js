export class WebPage {
    constructor(){
        this.botonContinue = '#continue'
    };

    btnContinue(boton) {
        cy.get(boton).click();
    };
}