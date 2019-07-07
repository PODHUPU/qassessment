
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

    // enterSearchParameters(searchValue) {
    //     this.searchTextBox.setValue(searchValue);
    // }

    // clickSearchButton() {
    //     this.searchButton.click();
    // }
    // get pageMessage() {
    //     return browser.$(this.baseSelectors.pageMessageLocator);
    // }

    // get closeButton() {
    //     return browser.$(this.baseSelectors.closeButton);
    // }

    // getPageHeader() {
    //     if ($$(this.baseSelectors.h2Selector).length > 0) {
    //         return $(this.baseSelectors.h2Selector).getText();
    //     }
    //     return $(this.baseSelectors.h3Selector).getText();
    // }

    // getPageSubHeader() {
    //     return this.subheader.getText();
    // }

    // getFooterText() {
    //     return this.footerText.getText();
    // }

    // getPageMessage() {
    //     return this.pageMessage.getText().split('\n')[0].trim();
    // }

    // closePageMessage() {
    //     this.closeButton.click();
    //     this.closeButton.waitForDisplayed(true);
    // }
}

module.exports = BasePage;
