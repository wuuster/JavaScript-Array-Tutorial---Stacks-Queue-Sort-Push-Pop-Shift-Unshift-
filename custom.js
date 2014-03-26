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

function sort_f() {
    var first_item = list[0];
    var last_item = list[list.length - 1];
    if (last_item > first_item) {
        list.sort(function(a, b) {
            return b - a;
        });
    } else {
        list.sort(function(a, b) {
            return a - b
        });
    }
}
//Create a Push

function push_f() {
    list.push(Math.max.apply(Math, list) + 1);
}
//Create a Pop

function pop_f() {
    list.pop();
}
//Create a Shift

function shift_f() {
    list.shift();
}
//Create an Unshift

function unshift_f() {
    list.unshift(Math.max.apply(Math, list) + 1);
}
//Create a Splice

function splice_f(id) {
	id = parseInt(id);
	id= id;
	console.log('This is ID value: '+id);
	    if(list.length == 1){
        	clear();
        } else{
        	list.splice(id, 1);
        }
	console.log(list +' - > ' +list.length);

	}
//Create a Clear

function clear() {
    list.length = 0;
    $("#array_class").html('');
    $('.buttons').css({ 'display': 'none' });
    $('.instructions').css({ 'display': 'none' });
    $("#create_id").css({ 'display': 'inline'  });
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
		 $('.instructions').css({ 'display': 'block' });

    });
    
    $('#clear_id').click(function() {
        clear();
    });
    $('#sort_id').click(function() {
        sort_f();
    });
    $('#push_id').click(function() {
        push_f();
    });
    $('#pop_id').click(function() {
        pop_f();
    });
    $('#shift_id').click(function() {
    	console.log(list.length);
        if(list.length == 1){
        	clear();
        } else{
        	shift_f();
        }
    });
    $('#unshift_id').click(function() {
        unshift_f();
    });
    
	function insert(){
		for (i = 0; i < list.length; ++i) {
            $("#array_class").append("<li id='post-"+i+"'> Item  " + list[i] + "</li>");
        }
		}
	// Get the element, add a click listener...
	document.getElementById("array_class").addEventListener("click",function(e) {
		// e.target is the clicked element!
		// If it was a list item
		if(e.target && e.target.nodeName == "LI") {
			var get_list_id = e.target.id;
			id = get_list_id.split("-");
			console.log("List item ",id[1]," was clicked!");
			splice_f(id[1]);
		}
	});

    $('.buttons').click(function() {
        $("#array_class").html('');
        insert();
        console.log(list);
    });
	$('#array_class').click(function(){
		$("#array_class").html('');
		console.log('LI clicked');
		insert();
		});
}
