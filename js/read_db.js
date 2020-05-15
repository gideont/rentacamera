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

//console.log(myFirebase)

// or do the above 2 lines in 1 line
// var cameraRef = firebase.database().ref("cameras/");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
/*
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
*/
/*
myFirebase.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});
*/

var camerasRef = firebase.database().ref("cameras/");

var i=0;
var models = [];
var imgs = [];

function display_items(data) {
   console.log("items are displayed!");
}

camerasRef.on('value', function(data) {

        if(data.exists()){
            var content = '';
             data.forEach(function(child) {
             //snapshot.forEach(function(data){
                var val = child.val();
                content +='<div class="col-sm-2">';
                content +='<div class="panel panel-primary">';
                content +='<div class="panel-heading">' + val.model + '</div>';
                content += '<div class="panel-body"><img src="' + val.image_url + '" style="width:100%" alt="Image"></div>';
                content += '<div class="panel-footer">' + val.rental_price + '</div>';
                content += '</div>';
                content += '</div>';
            });
            $('#items').append(content);
        }
});

/*
camerasRef.on('value', function(data) {
   //camerasRef.on('child_added', function(data) {
   //updateStarCount(postElement, snapshot.val());
   console.log("Data is updated: " + i + "times!");
   i++;

   //var h1 = data[0];
   console.log(data.val().model);

   data.forEach(function(child) {
        //console.log(child.key+": "+child.val());
        //console.log(child.val().model);
        console.log("*");
        console.log(child.val().model);
        models.push(child.val().model);

        console.log(child.val().image_url);
        imgs.push(child.val().image_url);
   });
   //console.log("Data is: " + data.val());
   //console.log(data.val().model);
   //console.log(data.val().rental_price);
  console.log("Hello:" + models[0]);
  console.log("imgs[0]:" + imgs[0]);

  document.getElementById("demo_header01").innerHTML = models[0];
  document.getElementById("demo_header02").innerHTML = models[1];
  document.getElementById("demo_header03").innerHTML = models[2];

  document.getElementById("demo_img01").src = imgs[0];
  document.getElementById("demo_img02").src = imgs[1];
  document.getElementById("demo_img03").src = imgs[2];

});
*/


// can read properly
/*
camerasRef.orderByChild("model").on("child_added", function(data) {
   console.log(data.val().model);
   console.log(data.val().rental_price);
});
*/

/*
myFirebase.orderByChild("rental_price").on("child_added", function(data) {
   console.log(data.val().rental_price);
});
*/

/*
myFirebase.orderByChild("brand").endAt("Canon").on("child_added", function(data) {
   console.log("Listing Canon models: " + data.val().model);
});
*/

console.log("Trying to read firebase realtime database......");


