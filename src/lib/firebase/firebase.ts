import { GoogleAIBackend, getAI } from "firebase/ai";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCCIfR1c-BvZxkqRmLuijrpsZWha1NlAEo",
	authDomain: "rankle-73d71.firebaseapp.com",
	projectId: "rankle-73d71",
	storageBucket: "rankle-73d71.appspot.com",
	messagingSenderId: "756873187999",
	appId: "1:756873187999:web:a51b43456103e2f7edc8aa",
	measurementId: "G-V4MK7XEKLP",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const ai = getAI(app, { backend: new GoogleAIBackend() });
