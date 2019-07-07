// import { assert } from 'chai';
import HomePage from '../pages/HomePage';
import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';
import util from '../util/common';
import testData from '../testData';
describe('Search test', () => {
    before('Load search page', () => {
        browser.url('/');
    });

    it(`Verify search result value : ${testData.searchParameter} opens valid page`, () => {
        HomePage.searchTextBox.setValue(testData.searchParameter);
        HomePage.searchButton.click();
        browser.url(HomePage.searchFirstResultLink.getAttribute('href'));
        // console.log(browser.getUrl() + "  "+ browser.getTitle());
        // expect(browser.getUrl()).to.include(searchParameter.split(' ').join(','))
        // assert.include(browser.getTitle(),searchParameter.split(' ').join(','))
        // expect(browser.getTitle()).to.contain(searchParameter.split(' ').join(','))
        HomePage.searchLocateLink.click();
    });
    
    testData.postal_code.forEach(function(test) {
        it(`Verify ${test.code} opens ${test.serviceCenter}`, function() {
            HomePage.serviceCentreSearchTextBox.setValue(test.code);
            HomePage.serviceCentreSearchSubmitButton.click();
            const getServiceCenterUrl = browser.$(`//*[text()="${test.serviceCenter}"]`).getAttribute('href');
            browser.url(getServiceCenterUrl);
            browser.back();
        });
      });

});
