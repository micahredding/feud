$ = jQuery;

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
if(!current_page || current_page == NaN) {
	current_page = 1;
}
next_page = current_page + 1;
if(next_page < 1) { next_page = 1; }

feuds = {
	"justin": {
		"question": "What is your name?",
		"answers": {
			"1": "Hi",
			"2": "Bye",
			"3": "Sigh",
			"4": "Try",
			"5": "Fly"
		}
	},
	"micah": {
		"question": "What is your number?",
		"answers": {
			"1": "Hi",
			"2": "Bye",
			"3": "Sigh",
			"4": "Try",
			"5": "Fly"
		}
	}
}

feud_order = {
	"1": "justin",
	"2": "micah"
}

feud_id = feud_order[current_page];
feud = feuds[feud_id];

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
	$('#next').attr('href', 'game.html?page=' + next_page);

});