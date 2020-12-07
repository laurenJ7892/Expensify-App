import {
  login,
  logout
} from '../../actions/auth';

let user = {
  uid: '0987654kjhg'
};

test('should return login action', () => {
  const action = login(user.uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '0987654kjhg'
  });
});


test('should return logot action', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});