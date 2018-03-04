var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("views"));
app.set("view engine", "ejs");


//////////////////////////////////
app.get("/", function(req, res){
	res.render("home");
});

// app.get("/campgrounds", function(req, res){
// 	Campground.find({}, function(err, campgrounds){
// 		if(err){
// 			console.log(err);
// 		} else{
// 			res.render("campgrounds/index", {campgrounds: campgrounds});
// 		}
// 	});	
// });

// app.post("/campgrounds", function(req, res){
// 	var name = req.body.name;
// 	var image = req.body.image;
// 	var desc = req.body.description;
// 	var newCampground = {name: name, image: image, description: desc};
	
// 	Campground.create(newCampground, function(err, newlyCreated){
// 		if(err){
// 			console.log(err);
// 		} else{
// 			res.redirect("/campgrounds");
// 		}
// 	});	
// 	// res.send("You hit the post route");
// });

// app.get("/campgrounds/new", function(req, res){
// 	res.render("campgrounds/new.ejs");
// });


// app.get("/campgrounds/:id", function(req, res){
// 	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
// 		if(err){
// 			console.log(err);
// 		} else{
// 			console.log(foundCampground);
// 			res.render("campgrounds/show", {campground: foundCampground});
// 		}
// 	});
// });



app.listen(3000, function(){
	console.log("Campground Server Running on 3000!");
});