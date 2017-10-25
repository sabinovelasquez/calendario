import React from 'react';
import { render } from 'react-dom';
import InfiniteCalendar, {Calendar, withMultipleDates, defaultMultipleDateInterpolation} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; 
import './index.css';

import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDvT7DC1ruv9KYDPg-rSnwwo-rJLfh0MuU",
  authDomain: "hueveoctm.firebaseapp.com",
  databaseURL: "https://hueveoctm.firebaseio.com",
  projectId: "hueveoctm",
  storageBucket: "hueveoctm.appspot.com",
  messagingSenderId: "1024067333962"
};

const firebaseApp = firebase.initializeApp(config);
const itemsRef = firebaseApp.database().ref();

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

itemsRef.child(`cal`).on('value', (snap) => {
  const info = snap.val();
});
const booked = [
new Date(2017, 10, 14),
new Date(2017, 10, 19),
new Date(2017, 10, 18),
new Date(2017, 10, 29),
new Date(2017, 10, 30),
new Date(2017, 10, 31),
new Date(2017, 10, 26)
];
const selectDate = (val) => {
  const params = {
    date: `${val}`,
    name: 'monkey'
  };
  itemsRef.child(`cal`).push(params, (error) => {
    if (error) {
      alert('conéctate a intené mono ql');
    } else{
      console.log('ok');
    }
  });
};

render(
  <InfiniteCalendar
    selected={today}
    minDate={lastWeek}
    locale={locale}
    theme={theme}
    onSelect={selectDate}
    Component={withMultipleDates(Calendar)}
    selected={booked}
    interpolateSelection={defaultMultipleDateInterpolation}
    />,
  document.getElementById('root')
);