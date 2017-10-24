import React from 'react';
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; 
import './index.css';

const today = new Date();
const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
const locale = {
  blank: 'Selecciona una fecha',
  headerFormat: 'dddd, D MMM',
  locale: require('date-fns/locale/es'),
  todayLabel: {
    long: 'Hoy',
  },
  weekdays: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
  weekStartsOn: 1,
};

const theme = {
  selectionColor: '#16a085',
  textColor: {
    default: '#333',
    active: '#FFF'
  },
  weekdayColor: '#16a085',
  headerColor: '#1abc9c',
  floatingNav: {
    background: '#7f8c8d',
    color: '#fff',
    chevron: '#fff'
  }
};

const selectDate = (val) => {
  alert(`date: ${val}`);
};

render(
  <InfiniteCalendar
    selected={today}
    minDate={lastWeek}
    locale={locale}
    theme={theme}
    onSelect={selectDate}
  />,
  document.getElementById('root')
);