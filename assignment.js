//feetToMile calculation function
function feetToMile(feet) {

    //execute if when value positive
    if (feet >= 0) {
        var mile = feet / 5280; // 1 mile = 5280 feet
        return mile.toFixed(2); // return mile value
    }
    //execute else when value negative 
    else {
        return 'distance cannot be negative';
    }
}




//woodCalculator function
function woodCalculator(chair, table, bed) {
    //execute if when value greater than zero
    if (chair && table && bed > 0) {
        forChair = chair * 1; //forChair wood need 1 CFT 
        forTable = table * 3; //forTable wood need 3 CFT
        forBed = bed * 5; //forBed wood need 5 CFT
        totalWood = (forChair + forTable + forBed); //total wood calculation
        return totalWood;
    }
    //excute else when value is negative or zero
    else {
        return 'oh dear! - value cannot be zero or negative';
    }
}




//brickCalculator function
function brickCalculator(floor) {

    var brickPerFeet = 1000; // 1000 piece brick need for per feet
    var firstTenFloor = (10 * 15 * brickPerFeet); // from 1 - 10th floor, per floor height is 15 feet
    var secondTenFloor = (10 * 12 * brickPerFeet); // from 11th to 20th floor per floor height is 12 feet 

    // checking floor value is greater than zero or not 
    while (floor > 0) {
        if (floor >= 1 && floor <= 10) {
            var floorHeight = floor * 15; // floor height calculation
            var totalBrick = floorHeight * brickPerFeet; //total brick calculation
            return totalBrick;
        }

        else if (floor > 10 && floor <= 20) {
            var remainderFloor = floor - 10; // remain floor count
            var totalBrick = firstTenFloor + (remainderFloor * 12 * brickPerFeet);
            return totalBrick;
        }

        else {
            var remainderFloor = (floor - 20); // remain floor count
            var totalBrick = firstTenFloor + secondTenFloor + (remainderFloor * 10 * brickPerFeet); // upto 20 floor per floor height is 10 feet
            return totalBrick;
        }
    }

    return 'oh dear! - Floor value cannot be zero or negative'; // return this when value is negative or zero 
}




//tinyFriend function
function tinyFriend(friendsName) {
    //check string empty or not 
    if (friendsName.length == 0 || friendsName == '' || friendsName == "") {
        return 'string cannot be empty';
    }
    else {
        var min = friendsName[0].length; // set index 0 is smallest
        var tinyFriendName = friendsName[0];
        for (var i = 1; i < friendsName.length; i++) {
            // compare index 0's length with all others index length 
            if (min > friendsName[i].length) {
                min = friendsName[i].length;
                tinyFriendName = friendsName[i]; // store smallest name in tinyFriendName 
            }
        }
        return tinyFriendName; // return smallest string to function caller 
    }
}
