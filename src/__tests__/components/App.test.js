import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from '../../components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('onNumberCountChange', () => {
    wrapper.setState({
      numberCount: 90
    });
    wrapper.find('.numberCountInput').simulate('change', { target: { value: 100 } });
    expect(wrapper.state().numberCount).toEqual(100);
  });

  it('onNumberCountSubmit', () => {
    wrapper.setState({
      numberCount: 90,
      numbersList: []
    });
    wrapper.find('.numberCountForm').simulate('submit', { preventDefault: () => null });
    expect(wrapper.state().numbersList.length).toEqual(90);
  });

  it('handleDownloadClick', () => {
    wrapper.setState({
      numberCount: 2,
      numbersList: ["07011031609", "07011031607"]
    });
    window.URL.createObjectURL = jest.fn();
    window.URL.revokeObjectURL = jest.fn();
    const handleDownloadClick = jest.spyOn(wrapper.instance(), 'handleDownloadClick')
    wrapper.instance().handleDownloadClick();
    expect(handleDownloadClick).toBeCalled();
  });

});

