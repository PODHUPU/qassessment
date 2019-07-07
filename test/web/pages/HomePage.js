import BasePage from './BasePage';
import homeSelectors from '../selectors/homePage';

class HomePage extends BasePage {
    constructor() {
        super();
        this.homeSelectors = homeSelectors;
    }

    get searchTextBox() {
        return browser.$(this.homeSelectors.pageSearchTextBoxSelector);
    }

    get searchButton() {
        return browser.$(this.homeSelectors.pageSearchButtonSelector);
    }

    get searchFirstResultLink() {
        return browser.$(this.homeSelectors.pageSearchResultSelector);
    }

    get searchLocateLink() {
        return browser.$(this.homeSelectors.pageSearchLocateLinkSelector);
    }

    enterSearchParameters(searchValue) {
        this.searchTextBox.setValue(searchValue);
    }

    clickSearchButton() {
        this.searchButton.click();
    }
}
module.exports = new HomePage();
