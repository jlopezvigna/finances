import numeral from 'numeral';

const FORMAT_DATE = 'MM/DD/YYYY';
const FORMAT_DATE_TIME = 'MM/DD/YYYY, hh:mm A';
const FORMAT_DB_DATE = 'YYYY-MM-DD';

const FORMAT_NUMBER = '0,0[.]00';
const FORMAT_CURRENCY = '$0,0.00';

const formats = {
  currency: (number, inCents = false) => {
    const amount = inCents ? number / 100 : number;
    return numeral(amount).format(FORMAT_CURRENCY);
  },
  formatNumber: (num, format = FORMAT_NUMBER) => {
    return numeral(num).format(format);
  },
};

export default formats;
