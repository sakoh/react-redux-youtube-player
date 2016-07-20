var expect = require('chai').expect;

describe('webdriver.io page', function() {
    it('should have the right title', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        expect(title).to.equal('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
});
