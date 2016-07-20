import { renderComponent , expect } from '../test_helper';
import SearchBar from '../../../src/components/search_bar';

describe('SearchBar' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchBar);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('search-bar-component');
  });
});
