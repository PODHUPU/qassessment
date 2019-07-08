// export function getTitle() {
//     return browser.getTitle()
// }

// export function landingPageURL() {
//     console.log(browser.getUrl());
//     return browser.getUrl()
// }


class Common {

    getTitle() {
        return browser.getTitle();
    }
}

export default new Common();
