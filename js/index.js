// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

console.log('firebase loaded.....', firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function clearForm() {
  $("#name").val('');
  $("#contact").val('');
  $("#email").val('');
  $("#message").val('');
}
function validateFields(params) {
  return !!params.trim().length
}

function notify(type, msg) {
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: type === 'success' ? "#38C18B" : '#E9716C',
      color: "#fff",
      display: 'flex',
      'justify-content': 'space-between',
      'border-radius': '6px',
      'font-family': "Heebo",
      width: 'auto',

    }
  }).showToast();
}
$('#contactform').submit(async function (e) {

  e.preventDefault();

  var name = $("#name").val();
  var contact = $("#contact").val();
  var email = $("#email").val();
  var message = $("#message").val();
  const isValid = validateFields(name) && validateFields(contact) && validateFields(email) && validateFields(message);
  if (isValid) {
    try {
      const docRef = await addDoc(collection(db, "enquiries"), {
        name,
        email,
        contact,
        message,
        timestamp: Date()
      });
      if (docRef.id) {
        notify('success', 'Thanks, Our representative will get in touch with you soon.')
        clearForm();
      }

    }
    catch (e) {
      console.error("Error adding document: ", e);
      notify('error', 'Somethig went wrong, please try again.')
    }
  } else {
    console.error("Validation Error ");
    $('#contactform').addClass('hasError');
    notify('error', 'Validation Error - Please fill all the fields')
  }
});