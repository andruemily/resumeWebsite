/*
  This is the code I wrote from using the Udacity JavaScripts Basics course. This code gives defines the main objects that are used on the site to give all the personal information. It also appends this information dynamically to the html code.

Author: Emily Andrulis
 */

/*
Starting experiments


 var firstName = "Emily is awesome"
 console.log(firstName);

 var funThoughts = firstName.replace("awesome", "fun");
 $("#main").append(funThoughts);
 */




//Bio objecct defined
var bio = {
	"name" : "Emily Andrulis",
	"role" : "Software Developer",
	"contacts" : {
		"email" : "eandrulis16@cornellcollege.edu",
		"phone" : "630-666-2391",
		"github" : "andruemily",
		"location" : "Brookfield, IL"
	},
	"picture" : "images/emilyLinkedIn.jpg",
	"welcomeMessage" : "Hello, and welcome to my resume site",
	"skills" : ["Java", "Python", "VB"]
}

//Work object defined
var work = {
	"jobs" : [
	{
		"title" : "Peer Consultant",
		"employer" : "Writing Studio at Cornell College",
		"dates" : "May 2013-May 2016",
		"location" : "Mount Vernon, IA",
		"description" : "Helped students improve their writing"
	},
	{
		"title" : "Student Researcher",
		"employer" : "University of Washington Computer Science Department",
		"dates" : "May 2015-August 2015",
		"location" : "Seattle, WA",
		"description" : "Worked with a team on a big data project that aimed to maximize efficiency in the King County public transit system."
	},
	{
		"title" : "Student Researcher",
		"employer" : "Cornell College Computer Science Department",
		"dates" : "May 2014-August 2014",
		"location" : "Mount Vernon, IA",
		"description" : "Conducted research and published a resulting paper on the effects of video manipulation techniques on remote prescence systems"
	}
	]
}


//Project object defined
var projects = {
 "projects" : [
	{
		"title" : "Paratransit",
		"dates" : "May 2015-August 2015",
		"description" : "Worked with a team on a big data project that aimed to maximize efficiency in the King County public transit system.",
		"images" : ["images/fry.jpg"] 		//needs to be filled in with pictures
	}
	]

}

//Education object defined
var education = {
 	"schools" : [
		{
			"name" : "Cornell College",
			"dates" : "August 2012- May 2016",
			"location" : "Mount Vernon, IA",
			"major" : "Computer Science",
			"minor" : "Spanish",
			"url" : "www.cornellcollege.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udactiy",
			"dates" : "September - October 2015",
			"url" : "www.udacity.com"
		}
	],
	"courses" : [
		{
			"title" : "Francophone Cultural Immersion in Martinique",
			"block" : 6,
			"dates" : "February 2014",
			"location" : "Fort de France, Martinique"
		},
		{
			"title" : "Peninsular Culture and Civilization",
			"block" : 7,
			"dates" : "March-April 2014",
			"location" : "Seville, Spain"
		}
	]

}

//Prepending the header (name and role)
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//email, phone, github, location
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


//Adding elements to page
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedPhone, formattedEmail, formattedGithub, formattedLocation);



//Display info from work object
work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkDates.replace("%data%", work.jobs[job].location);

		//$(".work-entry:last").append(formattedLocation);
	 	$(".work-entry:last").append(formattedDate);
		$(".work-entry:last").append(formattedDesc);
	}
}





//Display all the projects info
projects.display = function() {
	for(project in projects.projects){
		//New project start needed each time
		$("#projects").append(HTMLprojectStart);
		//Formatting variables
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		console.log(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		//next line should be in a loop
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		//Appending info to html
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDesc);
		$(".project-entry:last").append(formattedImage);
	}
}


//Display info from education object
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		//var formattedUrl = HTMLschoolUrl.replace("%data%", education.schools[school].url);

		//$(".school-entry:last").append(formattedLocation);
	 	$(".education-entry:last").append(formattedName);
	 	console.log(formattedName, formattedDates, formattedLocation, formattedMajor, formattedMinor);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedMinor);
	}
}


//In Where I've Lived and Worked section
//Adds the googleMap to mapDiv, more info in helper.js
$("#mapDiv").append(googleMap);

//email, phone, github, location
var formattedEmail2 = HTMLemail2.replace("%data%", bio.contacts.email);
var formattedPhone2 = HTMLmobile2.replace("%data%", bio.contacts.phone);
var formattedGithub2 = HTMLgithub2.replace("%data%", bio.contacts.github);
var formattedLocation2 = HTMLlocation2.replace("%data%", bio.contacts.location);

//Using vars from earlier, add to contacts to footer at the end
$("#footerContacts").append(formattedPhone2, formattedEmail2, formattedGithub2, formattedLocation2);



//ADDITIONAL FUNCTIONS





//Function that logs in console where the page is clicked
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});











