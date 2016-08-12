import { expect } from 'chai';
import { searchVideos, selectVideo } from '../../../src/actions';
import { SEARCH_VIDEOS, SELECT_VIDEO } from '../../../src/actions/types';

describe('Action Creators', () => {
  describe('searchVideos', () => {
    it('should have the action.type SEARCH_VIDEOS', done => {
      const action = searchVideos('Batman');

      action(object => {
        expect(object.type).to.be.equal(SEARCH_VIDEOS);
        done();
      });
    });

    it('selects the first video in the search result', done => {
      const action = searchVideos('Batman');

      action(object => {
        const { selectedVideo, videos } = object.payload;

        expect(selectedVideo).to.be.equal(videos[0]);
        done();
      });
    });
  });
});
