import moment from 'moment';

export default[{
    id: '1lkjhgf',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},  {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 500000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 30000,
  createdAt: moment(0).add(4, 'days').valueOf()
}];