var canvas = document.querySelector('canvas'); // seleciona o canvas no js

try{ // pega a largura e altura da janela e as coloca no canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
catch(error){ // caso não consiga pegar largura e altura, configura uma automaticamente
  console.log(error);
  canvas.width=1048;
  canvas.height=649;
}

var deltaX = 0; // inicia a variável de deslocamento X
var deltaY = 0; // inicia a variável de deslocamento Y
var xi=200 // define o X inicial
var yi=200 // define o y inicial
velocidade = 50 // define a velocidade

x = xi // define x como x inicial
y = yi // define y como y inicial

var context = canvas.getContext('2d'); // pega o contexto do canvas

window.addEventListener("keydown", tecla, false); // adiciona um escutador na função tecla
  
function tecla(e) { // função para verificar teclas pressionadas
    deltaX=0 // reseta a variação para 0 cada vez que a função for executada
    deltaY=0 // reseta a variação para 0 cada vez que a função for executada
    switch(e.keyCode) { // verifica qual tecla está sendo pressionada e muda o valor da variável de deslocamento
        case 65:
          deltaX =  -velocidade;
          break;
        case 87:
          deltaY = -velocidade;
          break;
        case 68:
          deltaX = +velocidade;
          break;
        case 83:
          deltaY = +velocidade;
          break;  
    }   
    animateQuadrado(); // executa a função de animar quadrado
    animateMoita(); // executa a função de animar a moita
    animateInimigo(); // executa a funçãp de animar o inimigo
    
    
}       

function animateQuadrado(){ // função de animar quadrado
  
  context.clearRect(0,0,canvas.width,canvas.height) // limpa a tela toda a vez antes de animar
  context.fillStyle = "#808080"; // configura a cor do quadrado

  x = x + deltaX // configura o x + deslocamento
  y = y + deltaY // configura o y + deslocamento

  if ( x>=650 && x<=750 && y <=150 && y>=-50 ){ // verifica se a posição do quadrado 
    x = x - deltaX;                             // coincide com a do inimigo e faz a colisão
    y = y - deltaY;
  }

  if ( x>=800 && x<=850 && y <= 150 && y>=-50 ){ // verifica se a posição do quadrado
    x = x - deltaX;                              // coincide com a do inimigo e faz a colisão
    y = y - deltaY;
  }

  context.fillRect(x,y,200,200) // desenha o quadrado
  
  }

 function animateMoita(){ // anima a moita
    context.fillStyle = "#008000"; // configura a cor da moita
    context.fillRect(300,300,300,200) //desenha a moita
    }

  function animateInimigo(){ // anima o inimigo
    context.fillStyle = "#d22200"; // configura a cor do inimigo
    context.fillRect(800,100,100,100) // desenha o inimigo
    }

  animateQuadrado(); // desenha pela primeira vez o quadrado antes da função tecla ser chamada
  animateMoita(); // desenha pela primeira vez a moita antes da função tecla ser chamada
  animateInimigo(); // desenha pela primeira vez o inimigo antes da função tecla ser chamada

