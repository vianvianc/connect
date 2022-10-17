import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

export default function Calendar() {
  
  const startDate = () => {
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    return `${dd}/${mm}/${yyyy}`;
  };

  const handleApply = (e) => {
    // callback(event, picker)
  };

  return (
    <DateRangePicker
      initialSettings={{ startDate: { startDate } }}
      onApply={handleApply}
    >
      <button>Calendar</button>
    </DateRangePicker>
  );
}