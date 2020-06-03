import firebase from 'firebase/app'
import 'firebase/firestore'

 import devConfig from '../../firebase.config'
export const prodConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };
//   console.log(process.env.NODE_ENV === "production")
//   let config 
//   if(process.env.NODE_ENV === "production"){
//         config = prodConfig
//   }else{
//       config = devConfig
//   }
//   console.log(config)
firebase.initializeApp(prodConfig)
// firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase