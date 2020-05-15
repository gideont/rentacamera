// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"

var config = {
  apiKey: "AIzaSyCe51yvgEv8asOeQLFr_9PcF1ce6FouzTs",
  authDomain: "fir-project-01-c99ec.firebaseapp.com",
  databaseURL: "https://fir-project-01-c99ec.firebaseio.com",
  projectId: "fir-project-01-c99ec",
  storageBucket: "fir-project-01-c99ec.appspot.com",
  messagingSenderId: "870354973178",
  appId: "1:870354973178:web:608952a31daa2c79b4f443",
  measurementId: "G-P7H9B7HJVT"
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var cameras = myFirebase.child("cameras");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
cameras.push({
      "brand": "Canon",
      "model": "",
      "rental_price": "$",
      "item_price": "$",
      "quantity": "",
      "purchased_date": "",
      "no_of_rented": "",
      "image_url": ""
});

console.log("New Camera JSON pushed to firebase successfully!");



