import { expect } from 'chai';
import {
  SEARCH_VIDEOS,
  SELECT_VIDEO
} from '../../../src/actions/types';

describe('Action Types', () => {
  describe('SEARCH_VIDEOS', () => {
    it('should have a set value', () => {
      expect(SEARCH_VIDEOS).to.be.equal('SEARCH_VIDEOS');
    });
  });

  describe('SELECT_VIDEO', () => {
    it('should have a set value', () => {
      expect(SELECT_VIDEO).to.be.equal('SELECT_VIDEO');
    });
  });
});
