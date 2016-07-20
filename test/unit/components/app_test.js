import { renderComponent , expect } from '../test_helper';
import App from '../../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('app-component');
  });

  it('renders the SearchBar', () => {
    expect(component.find('.search-bar-component')).to.exist
  });

  it('renders the VideoPlayer', () => {
    expect(component.find('.video-player-component')).to.exist
  });

  it('renders the VideoPreviewList', () => {
    expect(component.find('.video-preview-list-component')).to.exist
  });
});
