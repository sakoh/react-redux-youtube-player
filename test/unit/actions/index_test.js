import { expect } from 'chai';
import { searchVideos, selectVideo } from '../../../src/actions';
import { SEARCH_VIDEOS, SELECT_VIDEO } from '../../../src/actions/types';

describe('Action Creators', () => {
  describe('searchVideos', () => {
    it('should have the action.type SEARCH_VIDEOS', () => {
      const action = searchVideos('Batman');
      expect(action.type).to.be.equal(SEARCH_VIDEOS);
    });

    it('should return its parameter as its payload', () => {
      const action = searchVideos('Batman');
      expect(action.payload).to.be.equal('Batman');
    });
  });
});
