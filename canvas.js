const myform = document.getElementById('myform');
myform.addEventListener('input',printValuef);
function printValuef () {
let outputText = document.getElementById('inputText').value;
 const output = document.getElementById('output');

  output.innerHTML = outputText;
}








/*  window.onload = function () {

    const canvas = document.getElementById('canVas');
 let ctx = canvas.getContext('2d');

 var x = canvas.width/2;
 var y =canvas.height/2;
 // CREATE TWO MORE VALEU - THIS IS FOR SPEEED - IF YOU WANT TO SEE A FASTER ANIMATION - INCREASE THOSE VALUES

 let dx = 2;
 let dy = -2;
 // HEARE WE MAKE A FUNCTION -LIKE THE SAME 

    draw();






 function draw (){
    ctx.clearRect(0,0,canvas.width, canvas.width);
    ctx.beginPath();
    // HERE WE CREATE OUR GREEN CIRCLE USING THE ARC METHOD()
    // e.preventDefault();
    ctx.arc(x,y,10,0 ,Math.PI*2);
    ctx.fillstyle = 'red';
    ctx.fill();
    ctx.closePath();
    // HERE IS THE WALL-COLLIDING COWNITIONS - VERY SIMPLE 
    // HERE , IF THE VALUE IS LARGER THAN 420 - THAT IS THE LENGTH OF OUR CANVAS = REVERSE THE BALL
    if (x +dx >420) {
        dx = -dx
    }
    // HERE THE SAME PRINCIPAL , IF THE VALUE IS LESS THAN 0, THAT IS THE LETFT WALL ,REVERSE THE DIRECTION 
    if (x + dx <0){
        dx =-dx;
    }
    //  YOU GOT THE IDEIA///
    if (y +dy >320)  {
        dy =-dy;
    }
     if (y +dy <0 ){
         dy= -dy;
     }
     //HERE WE UPDATE THE VALUES
     x +=dx;
     y +=dy;
     // TO MAKE THIS LOOK LIKE AN ANIMATION WE HAVE TO USE SETINTITERVAL();
     // WE PASS THE FUNCTION AS AN ARGUMENT, AND A TIME 10 MS;
     setInterval(draw,100);

 }

}

// get a refrence to the  CANVAS IN THE BODY

*/


const canvas = document.getElementById('canVas');
let ctx = canvas.getContext('2d');


const circle = {
    x:200,
    y:200,
    size:30,
    dx:5,
    dy:4
}
function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x/2,circle.y/2,circle.size,0,Math.PI * 2);
    ctx.fillStyle = "purple";
    ctx.fill();
    // ctx.beginPath();
    // moveTo();
    
}

function update () {
//    beginPath();
    // clearRect(0,0,canvas.width,canvas.height)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    //CHANGE POSITION 
    circle.x +=circle.dx;
    circle.y +=circle.dy;

    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        // console.log('hit');
        circle.dx =-circle.dx;
    }

    if (circle.y + circle.size > canvas.height || circle.y - circle.size <0 ){
        // console.log('height');
        circle.dy *=-1;
    }
    requestAnimationFrame(update);

    // console.log('111');
}




update();
drawCircle()


///new canvas create 
const newCanvasR = document.getElementById('cancas');
let txC= newCanvasR.getContext('2d');

const nCircle = {
x:200,
y:200,
size:30,
dx:5,
dy:4
}

function nCr() {


    // ctx.beginPath();
    // ctx.arc(circle.x,circle.y,circle.size,0,Math.PI * 2);
    // ctx.fillStyle = "purple";
    // ctx.fill();



// // Arc (circles)
txC.beginPath();



// // Draw head
// txC.arc(centerX, centerY, 200, 0, Math.PI * 2);

txC.arc(nCircle.x,nCircle.y,nCircle.size,0, Math.PI* 2);
txC.fillStyle= 'blue';
txC.fill();

// // Move to mouth
// txC.moveTo(centerX + 100, centerY);


}

function NupdateC () {
    txC.clearRect(0,0,newCanvasR.width,newCanvasR.height);
    requestAnimationFrame(NupdateC);
    nCr();
    nCircle.x +=nCircle.dx;
    nCircle.y+=nCircle.dy;

    // if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
    //     // console.log('hit');
    //     circle.dx =-circle.dx;
    // }

    // text function 

    // if(nCircle.x + nCircle.size > newCanvasR.width || nCircle.x - nCircle.size < 0  ) {
    //     // nCircle.dx =-nCircle.dx;
    //     nCircle.dx *=-1;
    // }
    // text function end



    if(nCircle.x + nCircle.size > newCanvasR.width || nCircle.x - nCircle.size<0 ) {
        // nCircle.dx =-nCircle.dx;
        nCircle.dx *=-1;
    }
    if(nCircle.y + nCircle.size > newCanvasR.height || nCircle.y - nCircle.size<0 ) {
        // nCircle.dx =-nCircle.dx;
        nCircle.dy *=-1;
    }

}

NupdateC();
setInterval( NupdateC(),1000);
nCr();

const canvas2 =document.getElementById('cv3');
// const ctx2= canvas2.getContext('2d');
const ctx2 = canvas2.getContext('2d');


// make a  CIRCLE object
const c2 = {
    x:200,
    y:200,
    size:30,
    dx:5,
    dy:4
}


// CIRCLE FUNCTION START
    function circle3() {
        ctx2.beginPath();
        ctx2.arc(c2.x,c2.y,c2.size,0,Math.PI * 2);
        ctx2.fillStyle= 'red';
        ctx2.fill();
    }


    function circle3Update () {
        ctx2.clearRect(0,0,canvas2.width,canvas2.height);

        circle3();
        
        c2.x +=-c2.dx;
        c2.y +=c2.dy;

      
        if(c2.x + c2.size > canvas2.width || c2.x -c2.size<0) {
            c2.dx *=-1;
            console.log('hi');
        }
        if(c2.y + c2.size > canvas2.height || c2.y - c2.size <0) {
            c2.dy *=-1;
            console.log('hi');
        }
        requestAnimationFrame(circle3Update);
        console.log('ddd');
    }
    circle3Update();
    circle3();



// CIRCLE FUNCTION END

// function c2Circle() {
//      ctx2.beginPath();
//      ctx2.arc(c2.x,c2.y,c2.size,0,Math.PI*2);
//      ctx2.fillStyle ='red';
//      ctx2.fill();


    
//     }


//     // canvas update function 
//     function c2UpdateF () {
//         ctx2.clearRect(0,0,canvas2.width,canvas2.height);
//         requestAnimationFrame(c2UpdateF);
//         console.log('jjjj');

// }

// c2Circle();
// c2UpdateF();


