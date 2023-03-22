//Writing the required functions as defined in README.md

//first function called shout, receives one argument and returns it in all caps
function shout(string) {
    return string.toUpperCase();
}

//second function called whisper, receives one argument and returns it in all lowercase
function whisper(string){
    return string.toLowerCase();
}

//first logging function called logShout, calls console.log() its one argument in all caps
function logShout(string){
    console.log(string.toUpperCase());
}

//second logging function called logWhisper, calls console.log() its one argument in lowercase
function logWhisper(string){
    console.log(string.toLowerCase());
}

//third function, it's called sayHiToGrandma(string) on older tutorials but the file tests require sayHiToHeadphonedRoommate(string)
function sayHiToHeadphonedRoommate(inputString){
    // performing if-else statements to check the Input String
    // remember to use === or !== for making comparisons in JS
    if(inputString === inputString.toLowerCase()){
        //performing test if the Input String is lower case
        return "I can't hear you!";
    } 
    else if (inputString === inputString.toUpperCase()){
        //performing test if the Input String is upper case
        return "YES INDEED!";
    }
    else if (inputString === "Let's have dinner together!"){
        //performing test if the Input String matches a specified string of "Let's have dinner together!"
        return "I would love to!";
    }

}