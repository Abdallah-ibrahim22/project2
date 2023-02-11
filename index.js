var array = document.querySelectorAll(".drum");
for (var i = 0 ; i < array.length ; i++)
{
    array[i].addEventListener("click", function(){ 
        // the first input to the (addEventListener) function is the input that get processed 
        // and the second input (function) is the function the recive the output from the parent function
        // (addEventListener) & we write the implementation of this function (the second input)
        var button1 = this.innerHTML ;
        sound_play(button1);
        animation_button(button1);
        
    });
}
document.addEventListener("keydown" , function(event){ // this used to detect any pressing on the keyboard
    sound_play(event.key);
    animation_button(event.key);
});

function animation_button(key){
    var selected_button = document.querySelector('.'+key);
    selected_button.classList.add('pressed');
    setTimeout(function(){selected_button.classList.remove('pressed');},100);
    // this function is used to make a delay & then executes the first input function
}

function sound_play(button1){
    switch (button1) {
        case 'w':
            var song = new Audio("sounds/tom-1.mp3");
            song.play();
            break;
        case 'a':
            var song = new Audio("sounds/tom-2.mp3");
            song.play();
            break;
        case 's':
                var song = new Audio("sounds/tom-3.mp3");
                song.play();
                break;
        case 'd':
                var song = new Audio("sounds/tom-4.mp3");
                song.play();
                break;
        case 'j':
                var song = new Audio("sounds/snare.mp3");
                song.play();
                break;
        case 'k':
                var song = new Audio("sounds/crash.mp3");
                song.play();
                break;
        case 'l':
                var song = new Audio("sounds/kick-bass.mp3");
                song.play();
                break;
        default:
            break;
    }
}

// function HouseKeeper (year_of_experience , name , cleaning_reper){
//     this.year_of_experience = year_of_experience ; 
//     this.name = name ;
//     this.cleaning_reper = cleaning_reper ;
//     this.work = function (){ // used as function in this liitel class (constructor function)
//         console.log("am okay don't worry !");
//     }
// } // used as constructor function 

// keeper = new HouseKeeper( 19 , "alia" , ['cooking','cleaning']); // declaring a new object 
// console.log(keeper.year_of_experience);
// console.log(keeper.name);
// keeper.work();
