var expect = require('chai').expect;

describe('Youtube App', function() {
    it('searches for videos when I type into search', function () {
        browser
          .url('http://localhost:8080')
          .setValue('.form-control', 'Batman')
          .getText('.details>strong', (text) => {
            expect(text).to.be.equal('Honest Trailers - Batman v Superman: Dawn of Justice');
          });
    });

    it('changes selected video when I click on a video preview', function () {
        browser
          .url('http://localhost:8080')
          .setValue('.form-control', 'Batman')
          .click('li.list-group-item.video-preview-component:nth-child(1)')
          .getText('.details>strong', (text) => {
            expect(text).to.be.equal('BATMAN The Telltale Series Trailer (PS4 / Xbox One)');
          });
    });
});
