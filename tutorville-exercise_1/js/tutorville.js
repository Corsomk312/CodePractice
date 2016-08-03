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
			d.SearchCount = d.SearchResults.length;
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

				var subject = $('.submit').serializeArray()[0].value
				var sort = $('select').val();

				if (online && distance){
					//parse online, distance, AND subject
					var tutors = parseTutors(parseTutorsOnline(parseTutorsDistance(results.SearchResults)), subject);
				} else if (online){
					//parse online AND subject
					var tutors = parseTutors(parseTutorsOnline(results.SearchResults), subject);
				} else if (distance){
					//parse distance AND subject
					var tutors = parseTutors(parseTutorsDistance(results.SearchResults), subject);
				} else {
					//parse Subject
					var tutors = parseTutors(results.SearchResults, subject);
				};

				switch(sort){
					case "HighR":
						tutors = sortTutors(sort, tutors, 'Rank');
						break;
					case "LowR":
						tutors = sortTutors(sort, tutors, 'Rank');
						break;
					case "HighPr":
						tutors = sortTutors(sort, tutors, 'HourlyRate')
						break;
					case "LowPr":
						tutors = sortTutors(sort, tutors, 'HourlyRate')
						break;
				}

				results.SearchResults = tutors
				renderSearchResults(results);

			});
	});

});

var renderSearchResults = function(d){
	d.SearchCount = d.SearchResults.length;
	d.TutorCountIsNotOne = d.SearchResults.length !== 1;
	var tutorTemplate = $("#tutorTemplate").html();
	var $tutorResults = $("#tutorResults");

	var l = d.SearchResults.length;

	while(l--){
	d.SearchResults[l].starPercent = (d.SearchResults[l].StarRating/5) * 100;
	};

	Mustache.parse(tutorTemplate);
	$tutorResults.html(Mustache.render(tutorTemplate, d));

};

var sortTutors = function(direction, tutors, sortBy){
	if (direction === 'LowR' || direction === 'HighPr'){
		var comparator = -1
	} else {
		var comparator = 1
	};

	var count = 1
	while(count < tutors.length){

		if(compare(tutors[count-1][sortBy], tutors[count][sortBy]) === comparator){

			var hold = tutors[count-1];
			tutors[count-1] = tutors[count];
			tutors[count] = hold;
			count = 1;
		} else {
			count++;
		}
	}
	return tutors;
};


var parseTutorsOnline = function(tutors){
	return tutors.filter(function(tutor){
		if(tutor.IsOnline){
			return tutor;
		}
	})
};

var parseTutorsDistance = function(tutors){
	return tutors.filter(function(tutor){
		if(tutor.Distance < 5.0){
			return tutor;
		}
	})
};

var parseTutors = function(tutors, subject){
	var matching_tutors = []

	for(var i =0; i < tutors.length; i++){
		for(var j =0; j < tutors[i].Subjects.length; j++){

			if(subject.length == 0){
				return [];
			}else if(subject.toLowerCase() === tutors[i].Subjects[j].toLowerCase().slice(0, subject.length)){
				matching_tutors.push(tutors[i]);
			};

		};
	};
	return matching_tutors
}