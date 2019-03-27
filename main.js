// alert('ATTENTION : TUTORIAL NEEDED But if you know what you are doing, click OK ');

function valueLand(){

    let compSize = document.getElementById("compareSize").value;
    let compPx = document.getElementById("comparePrice").value;
    let subSize = document.getElementById("subjectSize").value;
    
    if(compSize === ''){
        alert('Empty field: First Field');
    }else if(compPx === ''){
        alert('Empty field: Second Field');
    }else if(subSize === ''){
        alert('Empty field: Third Field');
    }else{

    let firstAdjustment = compPx/ compSize;
    let secondAdjustment = firstAdjustment * subSize;
    let thirdAdjustment = secondAdjustment * 0.75;
    let fouthAdjustment = secondAdjustment * 0.45;
    let marketValue = Math.round(thirdAdjustment);
    let forcedSaleValue = Math.round(fouthAdjustment);

    alert('Market Value of your land is:' + ' ' + marketValue + ' ' + 'US DOLLARS');
    alert('Forced sale Value is:' + ' ' + forcedSaleValue + ' ' + 'US DOLLARS');
    }
    
}

function loanAssessment(){
    
    let compSize = document.getElementById("compareSize").value;
    let compPx = document.getElementById("comparePrice").value;
    let subSize = document.getElementById("subjectSize").value;

    if(compSize === ''){
        alert('Empty field: First Field');
    }else if(compPx === ''){
        alert('Empty field: Second Field');
    }else if(subSize === ''){
        alert('Empty field: Third Field');
    }else{

    let firstAdjustment = compPx/ compSize;
    let secondAdjustment = firstAdjustment * subSize;
    let thirdAdjustment = secondAdjustment * 0.75;
    let fouthAdjustment = secondAdjustment * 0.45;
    let marketValue = Math.round(thirdAdjustment);
    let forcedSaleValue = Math.round(fouthAdjustment);

    let loanAjustment = marketValue * 0.45;

    let loanAmount = loanAjustment;

    alert('Dear Customer you can qualify for a loan of' + ' ' + loanAmount + ' ' + 'US DOLLARS');

    }
}



