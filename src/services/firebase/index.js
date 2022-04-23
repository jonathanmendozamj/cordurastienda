import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBrks95Dsna-lF_hVOUC4BLwa0Ku5Al5b8",
	authDomain: "cordurastienda.firebaseapp.com",
	projectId: "cordurastienda",
	storageBucket: "cordurastienda.appspot.com",
	messagingSenderId: "787571914319",
	appId: "1:787571914319:web:dfe089c62ae85971f31c3a"
};

const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);