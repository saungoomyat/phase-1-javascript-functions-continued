// code your solution here
function saturdayFun (activity = 'roller-skate') {   

    return 'This Saturday, I want to ' + activity + '!';
}

function mondayWork (chore = 'go to the office') {

    return 'This Monday, I will ' + chore + '.';
}

function wrapAdjective (flair) {
        return function result (compliment = 'special') {
            return 'You are ' + flair + compliment + flair +'!'; 
        }
        
}