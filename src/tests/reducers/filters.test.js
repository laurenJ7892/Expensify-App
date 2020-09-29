import filtersReducer from '../../Reducers/filters';
import moment from 'moment'

test('should return default fitler values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
  });
});

test('should return sortby Amount on sortBY Field', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
  });

  test('should return sortby Amount on sortBY Date', () => {
    const defaultState = {
        sortBy: 'amount',
        text: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    } 
    const state = filtersReducer(defaultState, {type: 'SORT_BY_DATE'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
  });

  test('shoudl sort by text filter', ()=> {
     const text = 'filter'
     const action = {
         type: 'SET_TEXT_FILTER',
         text
     }
      const state = filtersReducer(undefined, action);
      expect(state.text).toBe(text);
  });

  test('should return set Start Date on state', () => {
    const startDate = moment().endOf('month')
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
  });

  test('should return set End Date on state', () => {
    const endDate = moment().startOf('month')
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
  });