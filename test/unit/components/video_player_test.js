import { renderComponent , expect } from '../test_helper';
import VideoPlayer from '../../../src/components/video_player';

describe('VideoPlayer' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(VideoPlayer);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('video-player-component');
  });
});
