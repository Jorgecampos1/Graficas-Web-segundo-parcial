
var graf = [];


function setup() {

  var fondo = createCanvas(900,500);
  fondo.position(100,100);
  fondo.background(51);
  clear();
}

function draw() {
	background( 240, 170, 221 );
  for(var i=1;i<graf.length;i++){
    fill(   122, 0, 196   +(i*10),203,190+(i*10));
    textSize(20);
    text(graf[i],50*(i+1),50);
    rect(50*(i+1), 55, 30, graf[i]*5);
  }
}

function ran(){
graf = [];
for (var i=0, t=10;i<t;i++)
{
  graf.push(Math.round(Math.random()*99)+1);
}
clear();
console.log(graf);
}

function sleep(ms){
  return new Promise(
    resolve=>setTimeout(resolve,ms)
  );
}




async  function orden(){
  var n,i,k,aux;
  n=graf.length;
  for(k=1;k<n;k++){
    for(i=0;i<(n-k);i++){
      if(graf[i]<graf[i+1]){
        aux=graf[i];
        graf[i]=graf[i+1];
        graf[i+1]=aux;
        clear();
        await sleep(250);
        console.log(graf);
      }
    }

  }
  clear();
  console.log(graf);



  

}



async  function ordenasc(){
  var n,i,k,aux;
  n=graf.length;
  for(k=1;k<n;k++){
    for(i=0;i<(n-k);i++){
      if(graf[i]>graf[i+1]){
        aux=graf[i];
        graf[i]=graf[i+1];
        graf[i+1]=aux;
        clear();
        await sleep(250);
        console.log(graf);
      }
    }

  }
  clear();
  console.log(graf);



  

}

function Maximo(){
    var max = Math.max.apply(null, graf);
    window.alert("Valor Maximo = " + max);
}

function Minimo(){
    var min = Math.min.apply(null, graf);
    window.alert("Valor Minimo = " + min);
}




