import { DateTime } from './luxon.js';

const dateTimeFunc = () => {
  const dateTime = document.getElementById('time-header');
  dateTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_HUGE);
};

export default dateTimeFunc;