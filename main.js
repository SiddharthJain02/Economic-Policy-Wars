// initializing all years var vyear stands for value to be used in calculations and year_ stands for data to be displayed also initialzing value of years

let outputyear = 1;
let previousyear = 0;
let inputyear = 2;

let year_0 = {
    g: fnum(4.5)
};

let year_1 = {
    C: fnum(0.6 * 10 ** 12),
    I: fnum(0.2 * 10 ** 12),
    G: fnum(0.2 * 10 ** 12),
    F_def: fnum(0.04 * 10 ** 12),
    t: fnum(20),
    MPC: fnum(0.6),
    g: fnum(5),
    Y: fnum(1*10**12)
};

let year_2 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: fnum(0.6),
    g: undefined,
    Y: undefined
};

let year_3 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: fnum(0.6),
    g: undefined,
    Y: undefined
};

let year_4 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: fnum(0.6),
    g: undefined,
    Y: undefined
}

let year_5 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: fnum(0.6),
    g: undefined,
    Y: undefined
}


let year_6 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: fnum(0.6),
    g: undefined,
    Y: undefined
}

let year_7 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: fnum(0.6),
    g: undefined,
    Y: undefined
}

let year_8 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: fnum(0.6),
    g: undefined,
    Y: undefined
}

let year_9 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: fnum(0.6),
    g: undefined,
    Y: undefined
}
let vyear_0 = {
    g: 4.5
};

let vyear_1 = {
    C: 0.6 * 10 ** 12,
    I: 0.2 * 10 ** 12,
    G: 0.2 * 10 ** 12,
    F_def: 0.04 * 10 ** 12,
    t: 20,
    MPC: 0.6,
    g: 5,
    Y: 1*10**12
};

let vyear_2 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: 0.6,
    g: undefined,
    Y: undefined
};

let vyear_3 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: 0.6,
    g: undefined,
    Y: undefined
};

let vyear_4 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: 0.6,
    g: undefined,
    Y: undefined
}

let vyear_5 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: 0.6,
    g: undefined,
    Y: undefined
}


let vyear_6 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: 0.6,
    g: undefined,
    Y: undefined
}

let vyear_7 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: 0.6,
    g: undefined,
    Y: undefined
}

let vyear_8 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: 0.6,
    g: undefined,
    Y: undefined
}

let vyear_9 = {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: 0.6,
    g: undefined,
    Y: undefined
}

// script for taking range input

let tnext = document.getElementById('tnext');
let tnextvalue = document.getElementById('tnextvalue');
tnextvalue.innerHTML = tnext.value;
tnext.oninput = function () { tnextvalue.innerHTML = this.value; }
let Gnext = document.getElementById('Gnext');
let Gnextvalue = document.getElementById('Gnextvalue');
Gnextvalue.innerHTML = fnum(Gnext.value);
Gnext.oninput = function () { Gnextvalue.innerHTML = fnum(this.value); }


// functions for changing output


function changeoutput(outputyear,newvalue,g2){
    document.getElementById('C').innerHTML = newvalue.C;
    document.getElementById('G').innerHTML = newvalue.G;
    document.getElementById('I').innerHTML = newvalue.I;
    document.getElementById('Y').innerHTML = newvalue.Y;
    document.getElementById('F_def').innerHTML = newvalue.F_def;
    document.getElementById('MPC').innerHTML = newvalue.MPC;
    document.getElementById('gold').innerHTML =  g2;
    document.getElementById('g').innerHTML = newvalue.g;
    document.getElementById('t').innerHTML = newvalue.t + '%';

}

// funnction for changing number to display form

function fnum(x){
    if(isNaN(x)) return x;
    
    if(Math.abs(x) < 999){
        return Math.round(x*100)/100;
    }

    if(Math.abs(x) < 1000000){
        return Math.round(x/10)/100 + "K"
    }
    if(Math.abs(x) < 1000000000){
        return Math.round(x/10000)/100 + "M"
    }
    if(Math.abs(x) < 1000000000000){
        return Math.round(x/10000000)/100 + "B"
    }
    else{
        return Math.round(x/10000000000)/100 + "T"
    }
}

// displaying start page output

changeoutput(outputyear,year_1,eval('vyear_' + previousyear).g);

//check function to be executed when clicked submit and var needed for it

let newvalue =  {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: 0.6,
    g: undefined,
    Y: undefined
}
let outvalue =  {
    C: undefined,
    I: undefined,
    G: undefined,
    F_def: undefined,
    t: undefined,
    MPC: 0.6,
    g: undefined,
    Y: undefined
}
let previousvalue =  {
    g: undefined
}


function check(){
    if(outputyear < 9){
        outvalue = eval('vyear_' + outputyear);
        previousvalue.g = eval('vyear_' + previousyear).g;

        newvalue.I = (1.025*outvalue.I) + ((outvalue.g - previousvalue.g)*100000000000) - ((eval(tnext.value) - outvalue.t)*3000000000);

        newvalue.Y = (outvalue.C - outvalue.MPC*outvalue.Y*(1-outvalue.t/100) + newvalue.I + eval(Gnext.value))/(1 - outvalue.MPC*(1-eval(tnext.value)/100));

        newvalue.C = 1.025*outvalue.C - outvalue.MPC*outvalue.Y*(1-outvalue.t/100) + outvalue.MPC*newvalue.Y*(1-eval(tnext.value)/100);


        newvalue.F_def = outvalue.F_def - newvalue.Y*eval(tnext.value)/100 + eval(Gnext.value);

        newvalue.g = (newvalue.Y - outvalue.Y)*100/(outvalue.Y);

        newvalue.G = eval(Gnext.value);

        newvalue.t = eval(tnext.value);

        outputyear++;
        inputyear++;
        previousyear++;
        
        for(element in eval('vyear_' + outputyear)) {
            eval('vyear_' + outputyear)[element] = newvalue[element]
        };
        for(element in eval('year_' + outputyear)) {
            eval('year_' + outputyear)[element] = fnum(eval('vyear_' + outputyear)[element])
        };

        changeoutput(outputyear,eval('year_' + outputyear),eval('year_' + previousyear).g);
    }


} 