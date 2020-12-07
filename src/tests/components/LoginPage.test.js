// react-test-renderer
import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startLogin;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage
        startLogin={startLogin} />);
});

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});


test('should call Login on Login Button Click', ()=> {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
