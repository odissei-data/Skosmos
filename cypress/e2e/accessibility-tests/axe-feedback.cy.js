import { accessibilityTestRunner } from '../../support/accessibility.js'

/* If you want the test to be skipped, add a skip command after the describe part:
    - test enabled: describe('Check accessibility of ...
    - test to be skipped: describe.skip('Check accessibility of ... */
describe.skip('Check accessibility of the feedback page', () => {
  before(() => {
    cy.visit('/fi/feedback')
    cy.injectAxe()
  })

  accessibilityTestRunner()
})
