import { renderComponent , expect } from '../test_helper';
import VideoPreview from '../../src/components/video_preview';

describe('VideoPreview' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(VideoPreview);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('video-preview');
  });
});
