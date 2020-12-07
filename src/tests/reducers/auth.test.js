import authReducer from '../../Reducers/auth';

test('should return an empty object on logout call', () => {
  const state = authReducer({uid: ';lkjhgfdsdft'}, {type: 'LOGOUT'});
  expect(state).toEqual({});
});

test('should expect state to return a user id when login is called', ( )=> {
  const action = {
    type: 'LOGIN'
,    uid: 'lkjhgf'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});