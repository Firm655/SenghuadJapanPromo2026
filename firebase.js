// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD3QtsPuTT9v6EwNCiwycMZ8_5FUCIEj1E",
    authDomain: "senghuad-japan-luckydraw-2026.firebaseapp.com",
    projectId: "senghuad-japan-luckydraw-2026",
    storageBucket: "senghuad-japan-luckydraw-2026.firebasestorage.app",
    messagingSenderId: "1004245641810",
    appId: "1:1004245641810:web:c7b9ed25c7ed9d29fe0d8b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };