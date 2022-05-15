import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firestore = getFirestore();

// firestore.collection('users').doc('Dc9RXYIQOmXkqBv08PWe').collection('cardItems').doc('Fz8skj9vpb0KAYeD9O2H')
firestore.doc('/users/Dc9RXYIQOmXkqBv08PWe/cardItems')