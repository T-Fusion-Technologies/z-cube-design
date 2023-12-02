"use strict";

// try {
//   const docRef = await addDoc(collection(db, "enquiries"), {
//     name: "test",
//     email: "test@test.com",
//     contact: 9999999999,
//     message: "test message",
//     timestamp: Date()
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

var fetchData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var querySnapshot;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _firestore.getDocs)((0, _firestore.collection)(db, "enquiries"));

          case 3:
            querySnapshot = _context.sent;

            querySnapshot.forEach(function (doc) {
              console.log(doc.id + " => " + JSON.stringify(doc.data()));
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);

            console.error("Error fetching data:", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function fetchData() {
    return _ref.apply(this, arguments);
  };
}();

var _app = require("firebase/app");

var _analytics = require("firebase/analytics");

var _firestore = require("firebase/firestore");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCdDBrgB1YfqP0wN1kqc93-HHdym2IfTj0",
  authDomain: "z-cube-design.firebaseapp.com",
  projectId: "z-cube-design",
  storageBucket: "z-cube-design.appspot.com",
  messagingSenderId: "934456108377",
  appId: "1:934456108377:web:249a8dea0e2a09e9f1d848",
  measurementId: "G-WB9ZDL7DVD"
};

// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
fetchData();
// const querySnapshot = await getDocs(collection(db, "enquiries"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// });
// console.log('app ', app);
// const analytics = getAnalytics(app);