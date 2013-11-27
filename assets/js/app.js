$ = jQuery;

feuds = {
	"ryan" : {
		"question" : "Ryan\'s top 5 favorite cities",
		"answers" : {
			"1" : "Florance, Italy",
			"2" : "Berlin, Germany",
			"3" : "Copehagan, Denmark",
			"4" : "Seattle, WA",
			"5" : "Vancouver, BC",
		},
	},
	"leah" : {
		"question" : "What are Leah\'s favorite bands\/artists of 2013\?",
		"answers" : {
			"1" : "Macklemore \& Ryan Lewis",
			"2" : "The Civil Wars",
			"3" : "One Republic",
			"4" : "The Lumineers",
			"5" : "Imagine Dragons",
		},
	},
	"justin": {
		"question": "According to Justin, what are the ingredients for the perfect morning oatmeal?",
		"answers": {
			"1" : "Quaker Instant Oats",
			"2" : "Water",
			"3" : "Blueberries",
			"4" : "Raw Almonds",
			"5" : "Raisins",
			"6" : "cup of coffee",
			"7" : "an episode of Sex and the City"
		}
	},
	"josiah": {
		"question": "What are Josiah's favorite countries that he has visited?",
		"answers": {
			"1" : "Nepal",
			"2" : "Peru",
			"3" : "New Zealand",
			"4" : "Chile",
			"5" : "Egypt"
		}
	},
	"becca": {
		"question": "What are Becca's favorite places to hike east of the Mississippi?",
		"answers": {
			"1" : "Radnor Lake",
			"2" : "Long Hunter",
			"3" : "Cedars of Lebanon",
			"4" : "Lookout Mountain (Chattanooga)",
			"5" : "The Appalachian Trail"
		}
	},
	"tiffany": {
		"question": "What are Tiffany's favorite colors?",
		"answers": {
			"1" : "Brown :)",
			"2" : "Grey or Gray",
			"3" : "Blue",
			"4" : "Green",
			"5" : "Red"
		}
	},
	"anya": {
		"question": "What are Anya's favorite fictional characters?",
		"answers": {
			"1" : "Harry Potter",
			"2" : "Hermione",
			"3" : "Ron",
			"4" : "The Scarecrow from Wizard of Oz.",
			"5" : "Alice from Alice and Wonderland"
		}
	},
	"jonas": {
		"question": "What are Jonas' favorite games?",
		"answers": {
			"1" : "Starcraft campaign",
			"2" : "Star Wars angry birds",
			"3" : "Star Wars Legos",
			"4" : "Candy crush",
			"5" : "Monopoly"
		}
	},
	"heather k": {
		"question": "What are Heather K's favorite tv shows of all time?",
		"answers": {
			"1" : "LOST (without question)",
			"2" : "Parks & Recreation",
			"3" : "The Dick Van Dyke Show",
			"4" : "Firefly",
			"5" : "Battlestar Galactica"
		}
	},
	"gabe": {
		"question": "What are Gabe's favorite musicals?",
		"answers": {
			"1" : "Seven Brides for Seven Brothers.",
			"2" : "The Sound of Music.",
			"3" : "Moulin Rouge.",
			"4" : "Singing In the Rain",
			"5" : "Anything by Disney, including Mary Poppins"
		}
	},
	"heather": {
		"question": "According to Heather, what are the best movies of the 80s?",
		"answers": {
			"1" : "The Princess Bride",
			"2" : "The Little Mermaid",
			"3" : "Flight of the Navigator",
			"4" : "Ferris Bueller's Day Off",
			"5" : "The Breakfast Club"
		}
	},
	"melanie": {
		"question": "What are Melanie's favorite things to grow in her garden?",
		"answers": {
			"1" : "Tomatoes",
			"2" : "Corn",
			"3" : "Peppers",
			"4" : "Beans",
			"5" : "Squash"
		}
	},
	"david": {
		"question" : "What are David's top superheroes?",
		"answers" : {
			"1" : "Batman",
			"2" : "Spiderman",
			"3" : "Teenage Mutant Ninja Turtles",
			"4" : "Iron Man",
			"5" : "Gambit"
		}
	},
	"micah": {
		"question" : "Excluding Nashville, what are Micah's favorite places he has lived?",
		"answers" : {
			"1" : "Oklahoma",
			"2" : "Seattle, Washington",
			"3" : "West Virgina",
			"4" : "Oregon",
			"5" : "Alabama"
		}
	},
	"ira" : {
		"question" : "What are Ira's Favorite Psychological Disorders?",
		"answers" : {
			"1" : "Parental Relational Problems",
			"2" : "Delusional Parasitosis",
			"3" : "Pseudocyesis",
			"4" : "Conversion paralysis",
			"5" : "Sleep Related Breathing Disorder"
		}
	},
	"isaac" : {
		"question" : "What are Isaac's Top 5 favorite weapons?",
		"answers" : {
			"1" : "Taurus 738 TCP",
			"2" : "Weatherby Vanguard 7 mag",
			"3" : "Keltec 9mm",
			"4" : "Butcher Knife",
			"5" : "Lead Pipe"
		}
	},
	"isaac" : {
		"question" : "What are Isaac's Top 5 favorite cars?",
		"answers" : {
			"1" : "Nissan Murano",
			"2" : "Toyota Tacoma",
			"3" : "Lexus SC430",
			"4" : "56 Corvette",
			"5" : "54 Belair 2-Door"
		}
	}

};
feud_order = ["micah", "ryan", "leah", "justin", "josiah", "becca", "tiffany", "anya", "jonas", "heather k", "gabe", "heather", "melanie", "david", "isaac", "ira"];

var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=');
        if (p.length != 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));


current_page = Number(qs['page']);
if(!current_page || isNaN(current_page)) {
	current_page = 1;
}
next_page = current_page + 1;
if(next_page < 1) { next_page = 1; }

feud_id = feud_order[current_page - 1];
feud = feuds[feud_id];
console.log(feud);


// colors = {'#2893b9', '#b6d635'};

$(document).ready(function(){

	flip_answer = function($target, index, value) {
		if($target.hasClass('revealed')) {
			$target.flippy({
		    direction:"BOTTOM",
		    duration:"750",
		    verso:index,
		    color_target: '#b6d635',
		    onFinish: function(){
		    	$target.removeClass('revealed');
		    }
			});
		} else {
			$target.flippy({
		    direction:"TOP",
		    duration:"750",
		    verso:value,
		    color_target: '#2893b9',
		    onFinish: function(){
		    	$target.addClass('revealed');
		    }
			});
		}
	}

	add_answer = function(index, value) {
		$('#template .answer-container').clone()
			.appendTo('#survey-says')
			.children('.flipbox')
			.addClass('answer-' + index)
			.html(index)
			.click(function(e){
				flip_answer($(e.target), index, value);
			});
	}

	$('#question').html(feud.question);
	$.each(feud.answers, function(index, value){
		add_answer(index, value);
	});
	if(next_page < feud_order.length + 1) {
		$('#next').attr('href', 'game.html?page=' + next_page);
	} else {
		$('#next').attr('href', 'end.html');
	}

});