// import { initializeApp } from 'firebase/app';
import React, { createContext } from 'react';

import app from 'firebase/compat/app';

import {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID
} from '@env';

const FirebaseContext = createContext(null);
const config = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  projectId: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID
};

const FirebaseProvider = ({ children }) => {
  let firebase = {
    app: null,
    db: null
  };
  if (!app.apps.length) {
    let defaultApp = app.initializeApp(config);
    firebase = {
      app: defaultApp,
      db: defaultApp.database()
    };
  }
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};
console.log('Firebase Initial');

export { FirebaseContext, FirebaseProvider };