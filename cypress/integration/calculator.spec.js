describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
cy.get('#number1');
cy.get('#number2');
cy.get('#number3');
cy.get('#number4');
cy.get('#number5');
cy.get('#number6');
cy.get('#number7');
cy.get('#number8');
cy.get('#number9');
cy.get('#number0');
cy.get('#operator_add');
cy.get('#operator-multiply');
cy.get('#operator-equals');
cy.get('#clear');
cy.get('#operator-subtract');
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should change the running total when pressing number buttons', () => {
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
  })

  it('should update display following calculation', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should allow multiplications to be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('should function as intended when range of numbers are clicked', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6075')
  })

  it('should return null when divided by zero', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Infinity')
  })
})