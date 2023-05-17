document.querySelector('button').addEventListener('click', () => {
let a = document.querySelector('#a').value;
let b = document.querySelector('#b').value;
let c = document.querySelector('#c').value;
let eq = document.querySelector('.eq');
let disc = document.querySelector('.dis');
let root = document.querySelector('.root');

let dis = (b * b) - (4 * a * c);

let rootfun = (dis , a , b , c) => {
    let root1 , root2 ;
    if (dis > 0) {
        root1 = ( -b + Math.sqrt(dis) ) / ( 2 * a );
        root2 = ( -b - Math.sqrt(dis) ) / ( 2 * a );
    }
     else if (dis == 0) {
        root1 = root2 = -b / ( 2 * a);
    }
    else {
        root1 = root2 = "no real root"
    }
    root.innerHTML = `1<sup>st</sup> &nbsp root &nbsp = &nbsp  ${root1} &nbsp , &nbsp 2<sup>nd</sup> &nbsp root &nbsp = &nbsp  ${root2}`
}



if (a == 0 || b == 0 || c == 0 ) {
    eq.innerHTML=' Enter all appropriate value';
}

else {
     if (a == 1 && b > 0 && c > 0 ) {
        eq.innerHTML=`Equation is &nbsp:- &nbsp x<sup>2</sup> + ${b}x + ${c}&nbsp =&nbsp 0`;
        disc.innerHTML= `Discriminant is &nbsp :-&nbsp&nbsp ${dis}`
        rootfun(dis,a,b,c);
        }
    else if (a == 1 && b < 0 && c > 0 ) {
        eq.innerHTML=`Equation is &nbsp:- &nbsp x<sup>2</sup>${b}x + ${c}&nbsp =&nbsp 0`;
        disc.innerHTML= `Discriminant is &nbsp :-&nbsp&nbsp ${dis}`
        rootfun(dis,a,b,c);
        }
    else if (a == 1 && b < 0 && c < 0 ) {
        eq.innerHTML=`Equation is &nbsp:- &nbsp x<sup>2</sup>${b}x${c}&nbsp =&nbsp 0`;
        disc.innerHTML= `Discriminant is &nbsp :-&nbsp&nbsp ${dis}`
        rootfun(dis,a,b,c);
        }   

    else if (a > 0 && b > 0 && c > 0 ) {
        eq.innerHTML=`Equation is &nbsp:- &nbsp ${a}x<sup>2</sup> + ${b}x + ${c}&nbsp =&nbsp 0`;
        disc.innerHTML= `Discriminant is &nbsp :-&nbsp&nbsp ${dis}`
        rootfun(dis,a,b,c);
    }
    else if (a > 0 && b < 0 && c > 0 ) {
        eq.innerHTML=`Equation is &nbsp:- &nbsp ${a}x<sup>2</sup>${b}x + ${c}&nbsp =&nbsp 0`;
        disc.innerHTML= `Discriminant is &nbsp :-&nbsp&nbsp ${dis}`
        rootfun(dis,a,b,c);
    }
    else if (a > 0 && b > 0 && c < 0 ) {
        eq.innerHTML=`Equation is &nbsp:- &nbsp ${a}x<sup>2</sup> + ${b}x${c}&nbsp =&nbsp 0`;
        disc.innerHTML= `Discriminant is &nbsp :-&nbsp&nbsp ${dis}`
        rootfun(dis,a,b,c);
    }
    else if (a > 0 && b < 0 && c < 0 ) {
        eq.innerHTML=`Equation is &nbsp:- &nbsp ${a}x<sup>2</sup>${b}x${c}&nbsp =&nbsp 0`;
        disc.innerHTML= `Discriminant is &nbsp :-&nbsp&nbsp ${dis}`
        rootfun(dis,a,b,c);
    }
    
}
})