function speedDetector(speed){
    // Checks whether the speed is an integer and it is greater than 0

    if ( isNaN(speed) || speed < 0 ){
        return "Error, please input a number";
    }
    const speedLimit = 70;
    const demeritThreshold = 12;
    const demeritPointRate = 5;

    // Checks whether speed limit is above 70, if not, it returns ok
    if(speed <= 70){
        return "Ok" ;
    }
    // Checks if speed is above the limit
    
    //If the speed is above the limit, it calculates the demerit points
    let demerits = Math.floor((speed - speedLimit)/demeritPointRate);
 
    // Checks whether the demerit points are above the threshold which permits license suspension
    if( demerits >= demeritThreshold){
            return `License suspended. Total demerits: ${demerits} `;
        }else {
            return `License not suspended. Total demerits: ${demerits}`;
        }

}
console.log(speedDetector(140));

