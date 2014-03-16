/* Koiwu Beyan
   http://www.koiwu.com
*/

//Global Declarations isn't necessarily a bad thing
var list;
//Create an Array

function create() {
    list = [];
    list.push(0);
}
//Sort Alphabetically

function sort() {
    var first_item = list[0];
    var last_item = list[list.length - 1];
    if (last_item > first_item) {
        list.sort(function(a, b) {
            return a - b
        });
        list.reverse();
    } else {
        list.sort(function(a, b) {
            return a - b
        });
    }
}
//Create a Push

function push() {
    list.push(Math.max.apply(Math, list) + 1);
}
//Create a Pop

function pop() {
    list.pop();
}
//Create a Shift

function shift() {
    list.shift();
}
//Create an Unshift

function unshift() {
    list.unshift(Math.max.apply(Math, list) + 1);
}
//Create a Splice

function splice() {}
//Create a Clear

function clear() {
    list.length = 0;
    $("#array_class").html('');
    $('.buttons').css({
            'display': 'none'
        });
        $("#create_id").css({
            'display': 'inline'
        });
}
//Event Handlers
window.onload=function(){
	eventHandlers();
};

function eventHandlers(){
		
    $('#create_id').click(function() {
        create();
        $('.buttons').css({
            'display': 'inline'
        });
        $(this).css({
            'display': 'none'
        });
        $("#clear_id").css({
            'display': 'inline'
        });
    });
    
    $('#clear_id').click(function() {
        clear();
    });
    $('#sort_id').click(function() {
        sort();
    });
    $('#push_id').click(function() {
        push();
    });
    $('#pop_id').click(function() {
        pop();
    });
    $('#shift_id').click(function() {
    	console.log(list.length);
        if(list.length == 1){
        	clear();
        } else{
        	shift();
        }
    });
    $('#unshift_id').click(function() {
        unshift();
    });
    /*$('#array_class li').onclick = (function() { alert('blah'); })
    $('#array_class li').click(function() {
    	alert('hey');
    	var ul = document.getElementById( "array_class" );
        var li_pos = $( this ).index( ul );
        console.log(li_pos);
    });*/
    $('.buttons').click(function() {
        $("#array_class").html('');
        for (i = 0; i < list.length; ++i) {
            $("#array_class").append("<li> Item  " + list[i] + "</li>");
        }
        console.log(list);
    });
}
