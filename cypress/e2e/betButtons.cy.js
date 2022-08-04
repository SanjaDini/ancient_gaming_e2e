import { getByTestId } from '../helpers/getters';
import { parametars } from '../helpers/betParametars';
import { labels } from '../helpers/labels';

describe('Bet buttons should work as expected', () => {
    beforeEach('Navigate to the web page', () => {
        cy.visit('/');
    });
    parametars.forEach(({ opt, testId }) => {
        it(`Should be able to bet on ${opt} and roll dice`, () => {
            getByTestId('profit-on-win').then((element) => {
                const profitOnWinBefore = element.text();
                getByTestId(testId).click({ force: true });
                const profitOnWinAfter = element.text();
                expect(profitOnWinBefore).to.not.eq(profitOnWinAfter);
                cy.contains(labels.ROLL_DICE).click({ force: true });
                cy.contains(labels.SIGN_IN).should('be.visible');
            });
        })
    })
});