function calculateNetSalary(basicSalary, benefits){

    // Checks whether basicSalary and benefits are numbers > 0
    if ( isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0){
        return "Please input a number for salary and benefits";
    }

    let grossSalary = basicSalary + benefits;
    let paye = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let netSalary = grossSalary - (paye + nhif + nssf);
    return netSalary;
}

// Calculates PAYE
function calculatePAYE(grossSalary){
    let paye = 0;
    if (grossSalary <= 24000 ){
        paye = (grossSalary * 0.1 );
        
    }else if (grossSalary >=24001 && grossSalary<= 32333){
        paye = (grossSalary * 0.25);
    
    }else if (grossSalary>= 32334 && grossSalary<=500000){
        paye = (grossSalary * 0.3);
        
    }else if (grossSalary>= 500001 && grossSalary < 8000000){
        paye = (grossSalary * 0.325);
        
    }else if (grossSalary >= 800000){
        paye = grossSalary * 0.35;
    }
    return paye;
}

    //Calculates NHIF
function calculateNHIF(grossSalary){
    let nhif = 0;
    if (grossSalary > 0 ){
        nhif = grossSalary * 0.0275;
    }
    return nhif;
}

    //Calculates nssf
function calculateNSSF(grossSalary){
    let nssf = 0;
    if (grossSalary > 18000){
        nssf = 2160;
    }else if(grossSalary < 18000){
        nssf = grossSalary *0.06;
    }
    return nssf;
}

    // Calculates net salary by subtracting nssf, shif and paye from grossSalary
    let netSalary = calculateNetSalary(100000, 50000);
    console.log(netSalary);
