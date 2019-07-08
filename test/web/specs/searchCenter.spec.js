// import { assert } from 'chai';
import HomePage from '../pages/HomePage';
import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import util from '../util/common';
import testData from '../testData';
describe('Search test', () => {
    before('Load search page', () => {
        NavigationMenu.loadPage('/');
    });

    it(`Verify search result value : ${testData.searchParameter} opens valid page`, () => {
        HomePage.searchTextBox.setValue(testData.searchParameter);
        HomePage.searchButton.click();
        NavigationMenu.loadPage(HomePage.searchFirstResultLink.getAttribute('href'));
        expect(util.getTitle()).to.include(testData.searchParameter);
        HomePage.searchLocateLink.click();
    });
    
    testData.postal_code.forEach(function(test) {
        it(`Verify ${test.code} opens ${test.serviceCenter}`, function() {
            HomePage.serviceCentreSearchTextBox.setValue(test.code);
            HomePage.serviceCentreSearchSubmitButton.click();
            const getServiceCenterUrl = browser.$(`//*[text()="${test.serviceCenter}"]`).getAttribute('href');
            NavigationMenu.loadPage(getServiceCenterUrl);
            expect(util.getTitle()).to.include(test.serviceCenter);
            browser.back();
        });
      });

});
