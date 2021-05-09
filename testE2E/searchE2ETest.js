describe('Location Search', function() {

    before(browser => browser.url('http://localhost:3000/'));
  
    test('Test Search Page', function (browser) {
        browser
            .waitForElementVisible('body')
            .assert.titleContains('Locations')
            .assert.visible('input.rbt-input-main')

        browser
            .setValue('input.rbt-input-main', 'Carmarthen')
            .waitForElementVisible('#location-example')
            .assert.visible('#location-example')
            .click('#location-example #location-example-item-0')

        browser.getValue("input.rbt-input-main", function(result) {
            this.assert.equal(result.value, 'Carmarthen Railway Station')
        });
    });

    after(browser => browser.end());
  });