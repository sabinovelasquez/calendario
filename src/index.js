import React from 'react';
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Render the Calendar
const today = new Date();
const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
const locale = {
  blank: 'Selecciona una fecha',
  headerFormat: 'dddd, D MMM',
  locale: require('date-fns/locale/es'), // You need to pass in the date-fns locale for the language you want (unless it's EN)
  todayLabel: {
    long: "Hoy",
  },
  weekdays: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
  weekStartsOn: 1, // Start the week on Monday
};

const theme = {
  selectionColor: 'rgb(146, 118, 255)',
  textColor: {
    default: '#333',
    active: '#FFF'
  },
  weekdayColor: 'rgb(146, 118, 255)',
  headerColor: 'rgb(127, 95, 251)',
  floatingNav: {
    background: 'rgba(81, 67, 138, 0.96)',
    color: '#FFF',
    chevron: '#FFA726'
  }
};

render(
  <InfiniteCalendar
    selected={today}
    minDate={lastWeek}
    locale={locale}
    theme={theme}
  />,
  document.getElementById('root')
);