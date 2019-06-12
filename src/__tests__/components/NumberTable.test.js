import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import NumbersTable from '../../components/NumbersTable';

Enzyme.configure({ adapter: new Adapter() });

describe('NumbersTable', () => {
  const numbersList = ["07011031609","07011031608","07011031649","07011031659","07011031689"];
  it('renders without crashing', () => {
    const wrapper = shallow(<NumbersTable numbersList={numbersList} />);
    expect(wrapper).toMatchSnapshot();
  });
});

