import { renderComponent , expect } from '../test_helper';
import VideoPreviewList from '../../src/components/video_preview_list';

describe('VideoPreview' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(VideoPreviewList);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('video-preview-list');
  });
});
