

class NavigationMenu {
    constructor() {
        this.homePageUrl = '/';
    }

    loadHomePage() {
        browser.url(this.homePageUrl);
    }
}

export default new NavigationMenu();
