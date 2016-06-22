(function(){

	var tutorData,
		tutorTemplate,
		tutorDataPromise,
		$tutorResults,

		init = function(){
			$tutorResults = $("#tutorResults");

			parseTutorTemplate();
			displayInitialTutorResults();
		},

		getTutorData = function(){
			$.ajax({
				url: "data/tutorResults.json",
				type: "GET",
				dataType: "json"
			}).done(function(d){
				tutorData = dataParsers.tutor(d);

				if(typeof tutorDataPromise === "function"){
					tutorDataPromise();
				}
			});
		},

		parseTutorTemplate = function(){
			tutorTemplate = $("#tutorTemplate").html();
			Mustache.parse(tutorTemplate);
		},

		displayInitialTutorResults = function(){
			if(typeof tutorData === "undefined"){
				tutorDataPromise = displayInitialTutorResults;
				return;
			}

			displayTutorResults(tutorData);
		},

		displayTutorResults = function(d){
			d.SeachCount = d.SearchResults.length;
			d.TutorCountIsNotOne = d.SearchResults.length !== 1;

			$tutorResults.html(Mustache.render(tutorTemplate, d));
		},

		dataParsers = {
			tutor: function(d){
				var l = d.SearchResults.length;

				while(l--){
					d.SearchResults[l].starPercent = (d.SearchResults[l].StarRating/5) * 100;
				}

				return d;
			}
		};

	getTutorData();

	$(function(){
		init();
	});

})();

$(document).ready(function(){

	$('.search > form').on('submit', function(e){
		e.preventDefault();
		var online = $('#online').prop('checked')
		var distance = $('#distance').prop('checked')

		$.ajax({
				url: "data/tutorResults.json",
				type: "GET",
				dataType: "json"
			}).done(function(results){

				var info = $('.submit').serializeArray()[0].value
				var sort = $('select').val();

				switch(sort){
					case "HighR":
						// sortByRanking(sort);
						var tutors = sortByRanking(sort, results.SearchResults)
						break;
					case "LowR":
						console.log(sort);
						break;
					case "HighPr":
						console.log(sort);
						break;
					case "LowPr":
						console.log(sort);
						break;
					default:
						console.log(sort);
				}

				if (online && distance){
					//parse online, distance, AND subject
					parseTutors(parseTutorsOnline(parseTutorsDistance(results.SearchResults)), info);
					// console.log('we parse this ish')
				} else if (online){
					//parse online AND subject
					parseTutors(parseTutorsOnline(results.SearchResults), info);
				} else if (distance){
					//parse distance AND subject
					parseTutors(parseTutorsDistance(results.SearchResults), info);
				} else {
					//parse Subject
					parseTutors(results.SearchResults, info);
				};


			});
	});

});

//ruby spaceship comparator
var spaceship = function(fVal, sVal){
	if(fVal > sVal){
		return 1
	} else if(fVal < sVal){
		return -1
	} else
		return 0
};

var sortByRanking = function(sort, tutors){
	if (sort === 'HighR'){
		var comparator = 1
	} else {
		var comparator = 0
	};

	for(var i=1; i < tutors.length; i++){


	}

};


var parseTutorsOnline = function(tutors){
	var online_tutors = [];

	for(var i =0; i < tutors.length; i++){
		if(tutors[i].IsOnline){
			online_tutors.push(tutors[i]);
		};
	};
	return online_tutors;
};

var parseTutorsDistance = function(tutors){
	var close_tutors = [];

	for(var i =0; i < tutors.length; i++){
		if(tutors[i].Distance < 5.0){
			close_tutors.push(tutors[i]);
		};
	};
	return close_tutors;
};

var parseTutors = function(tutors, subject){
	var matching_tutors = []

	for(var i =0; i < tutors.length; i++){
		for(var j =0; j < tutors[i].Subjects.length; j++){

			if(subject.toLowerCase() === tutors[i].Subjects[j].toLowerCase().slice(0, subject.length)){
				matching_tutors.push(tutors[i]);
			};

		};
	};
	return matching_tutors
}