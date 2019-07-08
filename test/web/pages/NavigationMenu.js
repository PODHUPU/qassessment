

class NavigationMenu {

    loadPage(path) {
        browser.url(path);
    }
}

export default new NavigationMenu();
