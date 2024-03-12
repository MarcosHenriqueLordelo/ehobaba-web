import moment from 'moment';

export default (date: string): boolean => {
  const maxDate = moment();
  const dateM = moment(date, 'DD/MM/YYYY');
  const minDate = moment().subtract(100, 'years');

  return minDate.unix() < dateM.unix() && dateM.unix() < maxDate.unix();
};
