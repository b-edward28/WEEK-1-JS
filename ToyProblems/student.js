function studentGradeGenerator(marks){
    // Checks whether the input is a number and within the range of 0 to 100
    if(isNaN(marks) || marks < 0 || marks > 100){
        return "Please input a number between 0 and 100" ;
    }  
    // Checks whether the marks meet the grading criteria
    
        if (marks > 79){
            return "A";
        }
        else if (marks <= 79 && marks >=60){
            return "B";
        }
        else if (marks <= 59 && marks >= 49 ){
            return "C";
        }
        else if (marks <= 49 && marks >= 40){
            return "D";
        }
        else {
            return "E";
        }
    }

console.log(studentGradeGenerator(80));