export function landingPageTitle() {
    return browser.getTitle()
}

export function landingPageURL() {
    console.log(browser.getUrl());
    return browser.getUrl()
}