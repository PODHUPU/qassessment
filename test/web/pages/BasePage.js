
import baseSelectors from '../selectors/basePage';

class BasePage {
    constructor() {
        this.baseSelectors = baseSelectors;
    }

    get serviceCentreSearchTextBox() {
        return browser.$(this.baseSelectors.pageServiceCentreSearchTextBoxSelector);
    }

    get serviceCentreSearchSubmitButton() {
        return browser.$(this.baseSelectors.pageServiceCentreSearchSubmitButtonSelector);
    }
}

module.exports = BasePage;
