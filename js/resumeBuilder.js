/// <reference path="jQuery.js"/>
/// <reference path="helper.js"/>



var bio = {
    "name": "Joseph Fayad",
    "role": "Web Developer",
    "welcomeMessage": "WELCOME TO MY WEB PAGE",
    "contacts": {
        "mobile number": "973-460-9323",
        "email": "joefayad86@gmail.com",
        "github": "fiyrefido",
        "location": " 6415 Bergenwood Ave, North Bergen, NJ"
    },
    "skills": ["ninjato", "samurai", "giant", "skill"],
    "bioPic": "images/fry.jpg"
};

bio.display = function () {
    var formattedname = HTMLheaderName.replace("%data%", bio.name);
    var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedwelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").prepend(formattedrole);
    $("#header").prepend(formattedname);
    $("#header").append(formattedpic);
    $("#header").append(formattedwelcome);

    bio.displayContacts("#topContacts");
    bio.displayContacts("#footerContacts");

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var index in bio.skills) {
            var formattedskill = HTMLskills.replace("%data%", bio.skills[index]);
            $("#skills").append(formattedskill);
        }
    }

}

bio.displayContacts = function (selector) {
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedloc = HTMLlocation.replace("%data%", bio.contacts.location);
    $(selector).append(formattedmobile);
    $(selector).append(formattedemail);
    $(selector).append(formattedgithub);
    $(selector).append(formattedloc);

}




var work = {
    "jobs": [
        {
            "employer": "Encapsulated",
            "title": "Code Guru",
            "location": "4004 Broadway, Allentown, PA",
            "dates worked": "2014",
            "description": "Code ninja guru master"
        },
        {
            "employer": "Assassin Rogue",
            "title": "Code Guru Monk Master",
            "location": " 128 Broad Street, Clifton, NJ",
            "dates worked": "2015 ",
            "description": "Code ninja gunsmith"
        }
    ]
};

work.display = function () {

    for (var index in work.jobs) {
        var job = work.jobs[index];

        var formattedemployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedtitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedlocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedworkdates = HTMLworkDates.replace("%data%", job["dates worked"]);
        var formatteddescription = HTMLworkDescription.replace("%data%", job.description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedemployer + formattedtitle + formattedlocation + formattedworkdates + formatteddescription)
    }
}



var projects = {
    "projects": [
        {
            "title": "Udacity mug webpage",
            "dates worked": "2014",
            "description": "webpage designed with header custom fonts and bootstrap framework for udacity mug marketing",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "Udacity Resume",
            "dates worked": "2014",
            "description": "Udacity Javascript resume",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        }
    ]
}

projects.display = function () {
    for (var index in projects.projects) {
        var project = projects.projects[index];

        var projecttitle = HTMLprojectTitle.replace("%data%", project.title);
        var projectdates = HTMLprojectDates.replace("%data%", project["dates worked"]);
        var projectdesc = HTMLprojectDescription.replace("%data%", project.description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(projecttitle + projectdates + projectdesc);

        for (var indeximg in project.images) {
            var projectimg = HTMLprojectImage.replace("%data%", project.images[indeximg]);
            $(".project-entry:last").append(projectimg);
        }
    }
}






var education = {
    "schools": [
        {
            "name": "Parkland",
            "location": "1210 Springhouse Road, Allentown, PA",
            "degree": "HS Diploma",
            "majors": ["Psycology", "Math"],
            "dates attended": "2005",
            "url": "http://www.parklandsd.org/"
        },
        {
            "name": "Clifton highschool",
            "location": "Clifton, NJ",
            "degree": "HS Diploma",
            "majors": ["History", "Science"],
            "dates attended": "2005",
            "url": "http://www.clifton.k12.nj.us/hs/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End web developer (Nano-Degree)",
            "school": "Udacity",
            "dates attended": "2014-2015",
            "url": "https://www.udacity.com/course/nd001"

        },
        {
            "title": "college",
            "school": "PCCC",
            "dates attended": "2010",
            "url": "http://www.pccc.edu/"

        }
    ]
};

education.display = function () {
    education.displaySchool();
    education.displayOnlineCourses();
}


education.displaySchool = function () {
    for (var index in education.schools) {

        var school = education.schools[index];

        var formattedschoolname = HTMLschoolName.replace("#", school.url).replace("%data%", school.name);
        var formattedschoolloc = HTMLschoolLocation.replace("%data%", school.location);
        var formattedschooldegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolmaj = HTMLschoolMajor.replace("%data%", school.majors.join(", "));
        var formattedschooldates = HTMLschoolDates.replace("%data%", school["dates attended"]);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedschoolname + formattedschooldegree + formattedschooldates + formattedschoolloc + formattedschoolmaj);
    }
}

education.displayOnlineCourses = function () {
    $("#education").append(HTMLonlineClasses);
    for (var index in education.onlineCourses) {
        var onlineCourse = education.onlineCourses[index];

        var formattedonlinetitle = HTMLonlineTitle.replace("#", onlineCourse.url).replace("%data%", onlineCourse.title);
        var formattedonlinesch = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formatteddates = HTMLonlineDates.replace("%data%", onlineCourse["dates attended"]);
        var formattedurl = HTMLonlineURL.replace("#", onlineCourse.url).replace("%data%", onlineCourse.url);


        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedonlinetitle + formattedonlinesch + formatteddates + formattedurl);
    }

}




bio.display();
work.display();
projects.display();
education.display();





$("#mapDiv").append(googleMap);




function inName(oldName) {
    // Your code goes here!
    var a = oldName.split(" ");
    if (a.length != 2) {
        throw Error("The inName function only supports strings with two words separated by a single space.");
    }
    var firstname = a[0];
    var lastname = a[1].toUpperCase();
    var firstnamecap = firstname.slice(0, 1).toUpperCase();
    var firstnamelcase = firstname.slice(1);
    firstnamelcase = firstnamelcase.toLowerCase();
    firstname = firstnamecap + firstnamelcase;
    var finalName = firstname + " " + lastname;
    return finalName;
};

$("#main").append(internationalizeButton);
var name = bio.name;


