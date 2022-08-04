export function getByTestId(testId) {
    return cy.get(`[data-test=${testId}]`);
  }