import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQ7_oW-LVcNmu2yBqhnNsM4ISWokh6d94",
    authDomain: "luxurious-rooms.firebaseapp.com",
    databaseURL: "https://luxurious-rooms.firebaseio.com",
    projectId: "luxurious-rooms",
    appId: "1:65341963748:web:a9a5fa91c061a01bee9bf1",
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    const databaseRef = firebase.database().ref();
    export const todosRef = databaseRef.child("todos")
