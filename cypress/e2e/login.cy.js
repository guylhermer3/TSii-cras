describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://front-cras.app.fslab.dev/');
    });

    it('Deve realizar o login com sucesso - cenário de sucesso', () => {
        cy.get('#email').type('adelson.moreira7293298820@gmail.com');
        cy.get('#senha').type('123');
        cy.get('.styles_button__dr0t2').click();
    });

    it("Deve retornar mensagem de erro devido a usuário inválido - cenário de insucesso", () => {
        cy.get("#email").type("guilherme@gmail.com");
        cy.get("#senha").type("123");
        cy.get(".styles_button__dr0t2").click();
        cy.contains("Usuário ou Senha inválida!");
    });

    it("Deve retornar mensagem dos campos obrigatórios para login - cenário de insucesso", () => {
        cy.get(".styles_button__dr0t2").click();
        cy.contains("O email é obrigatório");
        cy.contains("A senha é obrigatória");
    });
});