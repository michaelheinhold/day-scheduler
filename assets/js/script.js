//gets current date
var currentDate = moment().format("dddd, MMMM D");
//displays current date
document.getElementById('currentDay').textContent=currentDate;

//assigning timeblocks colors
var checkHour =function () {
    //gets the current hour
    var currentHour = moment().format('H');

    //gets all timeblocks as an array
    var blockEl = $('textarea');

    //clears previous classes
    $(blockEl).removeClass('past present future');

    for(var i=0; i< blockEl.length; i++){
        //gets what time each block is assigned
        var time = blockEl[i].id;
        var selectedBlock = blockEl[i];

        //checks what color is currently needed
        if(time === currentHour) {
            $(selectedBlock).addClass('present');
        } else if (time > currentHour){
            $(selectedBlock).addClass('future');
        } else if (time < currentHour) {
            $(selectedBlock).addClass('past');
        }
    }
};

$('button').on('click', function (){
    //gets text of task
    var text = $(this).siblings('textarea').val().trim();
    //gets data id 
    var block = $(this).siblings('textarea').data('hour');

    //store text 
    localStorage.setItem(block, text);
});

//gets data from local storage
$('textarea').each(function(){
    $(this).val(localStorage.getItem($(this).data('hour')));
});

//runs on opening and every minute
checkHour();
setInterval(checkHour,(1000*60));

