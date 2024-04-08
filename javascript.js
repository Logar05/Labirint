var canvasCrta = document.getElementById('crta')
canvasCrta.width=582;
canvasCrta.height=582;
var lineCtx=canvasCrta.getContext('2d');

var canvas = document.getElementById('mazeCanvas');
canvas.width = 582; 
canvas.height = 582 ;   
var ctx = canvas.getContext('2d');



var score = 0;
 var bgMusic = new Audio('bg.wav'); 
     bgMusic.loop = true; 

var lines = [
{x1:2,y1:2,x2:146,y2:2},
{x1:162,y1:2,x2:322,y2:2},
{x1:18,y1:18,x2:34,y2:18},
{x1:82,y1:18,x2:162,y2:18},
{x1:194,y1:18,x2:210,y2:18},
{x1:226,y1:18,x2:258,y2:18},
{x1:274,y1:18,x2:290,y2:18},
{x1:2,y1:34,x2:18,y2:34},
{x1:66,y1:34,x2:82,y2:34},
{x1:98,y1:34,x2:146,y2:34},
{x1:178,y1:34,x2:194,y2:34},
{x1:226,y1:34,x2:242,y2:34},
{x1:258,y1:34,x2:274,y2:34},
{x1:290,y1:34,x2:306,y2:34},
{x1:2,y1:50,x2:18,y2:50},
{x1:82,y1:50,x2:98,y2:50},
{x1:146,y1:50,x2:162,y2:50},
{x1:194,y1:50,x2:226,y2:50},
{x1:242,y1:50,x2:258,y2:50},
{x1:274,y1:50,x2:290,y2:50},
{x1:306,y1:50,x2:322,y2:50},
{x1:18,y1:66,x2:98,y2:66},
{x1:210,y1:66,x2:242,y2:66},
{x1:274,y1:66,x2:306,y2:66},
{x1:18,y1:82,x2:34,y2:82},
{x1:66,y1:82,x2:82,y2:82},
{x1:114,y1:82,x2:130,y2:82},
{x1:178,y1:82,x2:210,y2:82},
{x1:258,y1:82,x2:274,y2:82},
{x1:290,y1:82,x2:306,y2:82},
{x1:2,y1:98,x2:66,y2:98},
{x1:130,y1:98,x2:146,y2:98},
{x1:162,y1:98,x2:178,y2:98},
{x1:226,y1:98,x2:258,y2:98},
{x1:274,y1:98,x2:290,y2:98},
{x1:18,y1:114,x2:34,y2:114},
{x1:66,y1:114,x2:82,y2:114},
{x1:114,y1:114,x2:130,y2:114},
{x1:146,y1:114,x2:194,y2:114},
{x1:210,y1:114,x2:226,y2:114},
{x1:290,y1:114,x2:306,y2:114},
{x1:2,y1:130,x2:66,y2:130},
{x1:82,y1:130,x2:130,y2:130},
{x1:146,y1:130,x2:162,y2:130},
{x1:178,y1:130,x2:210,y2:130},
{x1:242,y1:130,x2:306,y2:130},
{x1:34,y1:146,x2:82,y2:146},
{x1:114,y1:146,x2:146,y2:146},
{x1:162,y1:146,x2:178,y2:146},
{x1:210,y1:146,x2:242,y2:146},
{x1:258,y1:146,x2:274,y2:146},
{x1:290,y1:146,x2:322,y2:146},
{x1:18,y1:162,x2:34,y2:162},
{x1:66,y1:162,x2:82,y2:162},
{x1:130,y1:162,x2:162,y2:162},
{x1:178,y1:162,x2:210,y2:162},
{x1:242,y1:162,x2:258,y2:162},
{x1:274,y1:162,x2:306,y2:162},
{x1:34,y1:178,x2:66,y2:178},
{x1:146,y1:178,x2:178,y2:178},
{x1:210,y1:178,x2:226,y2:178},
{x1:258,y1:178,x2:322,y2:178},
{x1:50,y1:194,x2:82,y2:194},
{x1:114,y1:194,x2:194,y2:194},
{x1:242,y1:194,x2:274,y2:194},
{x1:306,y1:194,x2:322,y2:194},
{x1:34,y1:210,x2:50,y2:210},
{x1:82,y1:210,x2:98,y2:210},
{x1:146,y1:210,x2:162,y2:210},
{x1:210,y1:210,x2:226,y2:210},
{x1:258,y1:210,x2:290,y2:210},
{x1:2,y1:226,x2:50,y2:226},
{x1:66,y1:226,x2:98,y2:226},
{x1:130,y1:226,x2:146,y2:226},
{x1:194,y1:226,x2:258,y2:226},
{x1:18,y1:242,x2:34,y2:242},
{x1:50,y1:242,x2:66,y2:242},
{x1:114,y1:242,x2:130,y2:242},
{x1:242,y1:242,x2:274,y2:242},
{x1:290,y1:242,x2:306,y2:242},
{x1:2,y1:258,x2:18,y2:258},
{x1:66,y1:258,x2:82,y2:258},
{x1:130,y1:258,x2:162,y2:258},
{x1:178,y1:258,x2:194,y2:258},
{x1:210,y1:258,x2:242,y2:258},
{x1:274,y1:258,x2:306,y2:258},
{x1:18,y1:274,x2:34,y2:274},
{x1:50,y1:274,x2:114,y2:274},
{x1:162,y1:274,x2:210,y2:274},
{x1:242,y1:274,x2:274,y2:274},
{x1:306,y1:274,x2:322,y2:274},
{x1:34,y1:290,x2:50,y2:290},
{x1:82,y1:290,x2:114,y2:290},
{x1:146,y1:290,x2:178,y2:290},
{x1:210,y1:290,x2:242,y2:290},
{x1:290,y1:290,x2:306,y2:290},
{x1:18,y1:306,x2:34,y2:306},
{x1:50,y1:306,x2:98,y2:306},
{x1:114,y1:306,x2:130,y2:306},
{x1:162,y1:306,x2:194,y2:306},
{x1:226,y1:306,x2:290,y2:306},
{x1:2,y1:322,x2:162,y2:322},
{x1:178,y1:322,x2:322,y2:322},
{x1:2,y1:2,x2:2,y2:322},
{x1:18,y1:130,x2:18,y2:210},
{x1:18,y1:274,x2:18,y2:306},
{x1:34,y1:18,x2:34,y2:66},
{x1:34,y1:82,x2:34,y2:98},
{x1:34,y1:114,x2:34,y2:130},
{x1:34,y1:194,x2:34,y2:210},
{x1:34,y1:242,x2:34,y2:274},
{x1:34,y1:290,x2:34,y2:306},
{x1:50,y1:18,x2:50,y2:82},
{x1:50,y1:98,x2:50,y2:114},
{x1:50,y1:146,x2:50,y2:162},
{x1:50,y1:178,x2:50,y2:194},
{x1:50,y1:210,x2:50,y2:242},
{x1:50,y1:258,x2:50,y2:290},
{x1:66,y1:2,x2:66,y2:50},
{x1:66,y1:114,x2:66,y2:130},
{x1:66,y1:194,x2:66,y2:226},
{x1:66,y1:242,x2:66,y2:258},
{x1:66,y1:290,x2:66,y2:306},
{x1:82,y1:18,x2:82,y2:34},
{x1:82,y1:50,x2:82,y2:66},
{x1:82,y1:82,x2:82,y2:114},
{x1:82,y1:130,x2:82,y2:194},
{x1:82,y1:242,x2:82,y2:258},
{x1:82,y1:274,x2:82,y2:290},
{x1:98,y1:34,x2:98,y2:50},
{x1:98,y1:66,x2:98,y2:146},
{x1:98,y1:162,x2:98,y2:274},
{x1:98,y1:306,x2:98,y2:322},
{x1:114,y1:50,x2:114,y2:114},
{x1:114,y1:146,x2:114,y2:194},
{x1:114,y1:210,x2:114,y2:274},
{x1:114,y1:290,x2:114,y2:306},
{x1:130,y1:34,x2:130,y2:82},
{x1:130,y1:162,x2:130,y2:178},
{x1:130,y1:194,x2:130,y2:226},
{x1:130,y1:258,x2:130,y2:306},
{x1:146,y1:50,x2:146,y2:98},
{x1:146,y1:114,x2:146,y2:162},
{x1:146,y1:226,x2:146,y2:242},
{x1:146,y1:274,x2:146,y2:322},
{x1:162,y1:18,x2:162,y2:50},
{x1:162,y1:66,x2:162,y2:114},
{x1:162,y1:162,x2:162,y2:178},
{x1:162,y1:210,x2:162,y2:274},
{x1:178,y1:18,x2:178,y2:82},
{x1:178,y1:146,x2:178,y2:162},
{x1:178,y1:194,x2:178,y2:258},
{x1:178,y1:306,x2:178,y2:322},
{x1:194,y1:50,x2:194,y2:66},
{x1:194,y1:82,x2:194,y2:114},
{x1:194,y1:130,x2:194,y2:146},
{x1:194,y1:162,x2:194,y2:194},
{x1:194,y1:210,x2:194,y2:258},
{x1:194,y1:274,x2:194,y2:306},
{x1:210,y1:2,x2:210,y2:50},
{x1:210,y1:66,x2:210,y2:98},
{x1:210,y1:114,x2:210,y2:130},
{x1:210,y1:178,x2:210,y2:210},
{x1:210,y1:242,x2:210,y2:274},
{x1:210,y1:290,x2:210,y2:322},
{x1:226,y1:18,x2:226,y2:34},
{x1:226,y1:82,x2:226,y2:178},
{x1:226,y1:194,x2:226,y2:210},
{x1:226,y1:226,x2:226,y2:242},
{x1:226,y1:274,x2:226,y2:290},
{x1:242,y1:50,x2:242,y2:82},
{x1:242,y1:114,x2:242,y2:130},
{x1:242,y1:146,x2:242,y2:226},
{x1:242,y1:258,x2:242,y2:274},
{x1:242,y1:290,x2:242,y2:306},
{x1:258,y1:2,x2:258,y2:18},
{x1:258,y1:34,x2:258,y2:82},
{x1:258,y1:98,x2:258,y2:146},
{x1:258,y1:210,x2:258,y2:226},
{x1:258,y1:242,x2:258,y2:290},
{x1:274,y1:18,x2:274,y2:34},
{x1:274,y1:50,x2:274,y2:66},
{x1:274,y1:82,x2:274,y2:114},
{x1:274,y1:146,x2:274,y2:162},
{x1:274,y1:178,x2:274,y2:194},
{x1:274,y1:226,x2:274,y2:242},
{x1:274,y1:274,x2:274,y2:290},
{x1:290,y1:34,x2:290,y2:50},
{x1:290,y1:66,x2:290,y2:82},
{x1:290,y1:194,x2:290,y2:226},
{x1:290,y1:242,x2:290,y2:306},
{x1:306,y1:18,x2:306,y2:34},
{x1:306,y1:82,x2:306,y2:130},
{x1:306,y1:210,x2:306,y2:242},
{x1:306,y1:306,x2:306,y2:322},
{x1:322,y1:2,x2:322,y2:322}
];
var points2 = "277.2,3.6 277.2,18.0 306.0,18.0 306.0,104.4 277.2,104.4 277.2,190.8 219.6,190.8 219.6,162.0 248.4,162.0 248.4,75.60000000000001 277.2,75.60000000000001 277.2,46.800000000000004 162.0,46.800000000000004 162.0,75.60000000000001 133.20000000000002,75.60000000000001 133.20000000000002,104.4 104.4,104.4 104.4,18.0 18.0,18.0 18.0,46.800000000000004 46.800000000000004,46.800000000000004 46.800000000000004,104.4 18.0,104.4 18.0,133.20000000000002 75.60000000000001,133.20000000000002 75.60000000000001,162.0 104.4,162.0 104.4,133.20000000000002 162.0,133.20000000000002 162.0,219.6 133.20000000000002,219.6 133.20000000000002,248.4 46.800000000000004,248.4 46.800000000000004,277.2 75.60000000000001,277.2 75.60000000000001,306.0 46.800000000000004,306.0 46.800000000000004,334.8 75.60000000000001,334.8 75.60000000000001,363.6 104.4,363.6 104.4,421.2 162.0,421.2 162.0,478.8 104.4,478.8 104.4,450.0 75.60000000000001,450.0 75.60000000000001,421.2 18.0,421.2 18.0,450.0 46.800000000000004,450.0 46.800000000000004,478.8 18.0,478.8 18.0,565.2 75.60000000000001,565.2 75.60000000000001,536.4 104.4,536.4 104.4,507.6 133.20000000000002,507.6 133.20000000000002,536.4 190.8,536.4 190.8,565.2 248.4,565.2 248.4,478.8 277.2,478.8 277.2,507.6 334.8,507.6 334.8,536.4 277.2,536.4 277.2,565.2 306.0,565.2 306.0,579.6".split(' ').map(pair => pair.split(',').map(Number));

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function getRandomPathPointsForGhosts(points, min, max) {
  const count = Math.floor(Math.random() * (max - min + 1)) + min; 
  const shuffledPoints = [...points].sort(() => 0.5 - Math.random());
  return shuffledPoints.slice(0, count); 
}

const ghostPositions = getRandomPathPointsForGhosts(points2, 5, 10);


var ghostImg = new Image();
ghostImg.src = 'duh.png'; 

function drawGhosts() {
    ghostPositions.forEach(ghost => {
        if (ghostImg.complete) {
           
            const drawX = ghost[0] - ghostImg.width / 2;
            const drawY = ghost[1] - ghostImg.height / 2;
            ctx2.drawImage(ghostImg, drawX, drawY);
        } else {
            ghostImg.onload = () => {
                const drawX = ghost[0] - ghostImg.width / 2;
                const drawY = ghost[1] - ghostImg.height / 2;
                ctx2.drawImage(ghostImg, drawX, drawY);
            };
        }
    });
}
const ghostLocations2 = [
  { x: 393, y: 75 },
  { x: 449, y: 159 },
  { x: 451, y: 308 },
  { x: 336, y: 367 },
  { x: 395, y: 564 },
  { x: 538, y: 505 },
  { x: 249, y: 309 },
  { x: 335, y: 81 }
];

function drawAdditionalGhosts() {
  ghostLocations2.forEach(ghost => {
      
      const drawX = ghost.x - ghostImg.width / 2;
      const drawY = ghost.y - ghostImg.height / 2;
      
      
      if (ghostImg.complete) {
          ctx2.drawImage(ghostImg, drawX, drawY);
      } else {
          ghostImg.onload = () => {
              ctx2.drawImage(ghostImg, drawX, drawY);
          };
      }
  });
}






function drawNextLine(currentPointIndex = 0, progress = 0) {
  if (currentPointIndex >= points2.length - 1) {
    startPacmanAnimation(); 
    return; 
  }

  const startPoint = points2[currentPointIndex];
  const endPoint = points2[currentPointIndex + 1];


  const nextX = startPoint[0] + (endPoint[0] - startPoint[0]) * progress;
  const nextY = startPoint[1] + (endPoint[1] - startPoint[1]) * progress;

  lineCtx.setLineDash([2, 5]); 
  lineCtx.strokeStyle = 'gold';
  lineCtx.lineWidth = 1;

  if (progress === 0) {
    lineCtx.beginPath();
    lineCtx.moveTo(startPoint[0], startPoint[1]);
  }

  lineCtx.lineTo(nextX, nextY);
  lineCtx.stroke();

  progress += 0.03; 

  if (progress < 1) {
    requestAnimationFrame(() => drawNextLine(currentPointIndex, progress));
  } else {
    requestAnimationFrame(() => drawNextLine(currentPointIndex + 1, 0));
  }
}


var currentPointIndex = 0; 
var drawRate = 3000; 



function getMidpointsForCollectibles(points, count) {
  const shuffledIndices = points.map((_, index) => index).sort(() => 0.5 - Math.random()).slice(0, count);
  return shuffledIndices.map(index => {
      const startPoint = points[index];
      const endPoint = points[(index + 1) % points.length]; 
      return {
          x: (startPoint[0] + endPoint[0]) / 2,
          y: (startPoint[1] + endPoint[1]) / 2,
      };
  });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomCount = getRandomInt(3, 6); 
const collectibleMidpoints = getMidpointsForCollectibles(points2, 10);





document.addEventListener('DOMContentLoaded', function() {

  Swal.fire({
    title: 'Ready to Play?',
    text: "Press 'Space' to dodge and 'Enter' to eat!",
    icon: 'question',
    background: '#000000',
    color: '#FFD700',
    confirmButtonText: 'Start',
    confirmButtonColor: '#0095DD',
    buttonsStyling: false, 
    customClass: {
        popup: 'arcade-popup',
        title: 'arcade-title',
        content: 'arcade-content',
        confirmButton: 'arcade-confirm-button',
        icon: 'arcade-icon'
    }
  }).then((result) => {
      if (result.isConfirmed) {
          startGame();
          
      }
  });
});



function startGame() {
  ctx.strokeStyle = 'blue'; 
  ctx.lineWidth = 2;
  lines.forEach(function(line) {
    drawLine(line.x1 * 1.8, line.y1 * 1.8, line.x2 * 1.8, line.y2 * 1.8);
});
drawGhosts();
drawAdditionalGhosts();
drawNextLine();

collectibleMidpoints.forEach(point => {
  drawCollectible(point.x, point.y);
});
}



var canvas2 = document.getElementById('drugiCanvas');
canvas2.width = 582;
canvas2.height = 582 ; 
var ctx2 = canvas2.getContext('2d');

ctx2.strokeStyle = '';
ctx2.lineWidth = 2;
ctx2.lineCap = 'butt';
ctx2.lineJoin = 'round';

function drawCollectible(x, y) {
  ctx.fillStyle = 'yellow'; 
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI); 
  ctx.fill();
}


function checkCollectibleCollision(x, y) {
  if (attemptingCollect) { 
      collectibleMidpoints.forEach((collectible, index) => {
          const distance = Math.sqrt(Math.pow(x - collectible.x, 2) + Math.pow(y - collectible.y, 2));
          if (distance < 10) { 
              ctx.clearRect(collectible.x - 10, collectible.y - 10, 20, 20); 
              collectibleMidpoints.splice(index, 1); 
              score += 1; 
              updateScoreDisplay(); 
          }
      });
  }
}



function startPacmanAnimation(){
          bgMusic.play();
var context1=canvas2.getContext('2d');
var imgOpen = new Image();
imgOpen.src = 'PacManOpen.svg'; 
var imgClosed = new Image();
imgClosed.src = 'PacManClosed.svg'; 
var mouthOpen = true; 
var toggleRate = 40; 
var frameCounter = 0; 

var imgOpenWhite = new Image();
imgOpenWhite.src = 'PacManOpenWhite.svg';
var imgClosedWhite = new Image();
imgClosedWhite.src = 'PacManClosedWhite.svg';
var imgOpenBlue = new Image();
imgOpenBlue.src = 'PacManOpenBlue.svg'; 
var imgClosedBlue = new Image();
imgClosedBlue.src = 'PacManClosedBlue.svg'; 
let currentIndex = 0;
let progress = 0; 
const speed = 0.015; 
let angle = 0; 

function animateImage() {
  if (currentIndex >= points2.length - 1) {
    bgMusic.pause();
    showEndGameAlert();
    return;
  }

  const startPoint = points2[currentIndex];
  const endPoint = points2[currentIndex + 1];
  const x = startPoint[0] + (endPoint[0] - startPoint[0]) * progress;
  const y = startPoint[1] + (endPoint[1] - startPoint[1]) * progress;
  const clearSize=10;
  lineCtx.clearRect(x - clearSize / 2, y - clearSize / 2, clearSize, clearSize); //pucanje crte
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height); // spuci senco in crto  ponavljanje
   drawGhosts();
//skozi crto
  progress += speed;
  if (progress >= 1) {
    currentIndex++;
    progress = 0;

    
    if (currentIndex < points2.length - 1) {
      const nextPoint = points2[currentIndex + 1];
      if (nextPoint[0] > endPoint[0]) {
        angle = -Math.PI / 2; // djsnu
      } else if (nextPoint[0] < endPoint[0]) {
        angle = Math.PI / 2; // lejvu
      } else if (nextPoint[1] > endPoint[1]) {
        angle = 0; // dol
      } else if (nextPoint[1] < endPoint[1]) {
        angle = Math.PI; // gor
      }
    }
  }

  // odpiri zapiri gobec 
  if (frameCounter++ % toggleRate === 0) {
    mouthOpen = !mouthOpen;
  }
 

  var imgToDraw;
  if (mouthOpen) {
      if (attemptingDodge) {
          imgToDraw = imgOpenWhite; 
      } else if (attemptingCollect) {
          imgToDraw = imgOpenBlue; 
      } else {
          imgToDraw = imgOpen; 
      }
  } else {
      if (attemptingDodge) {
          imgToDraw = imgClosedWhite; 
      } else if (attemptingCollect) {
          imgToDraw = imgClosedBlue; 
      } else {
          imgToDraw = imgClosed; 
      }
  }

  drawRotatedImage(imgToDraw, x, y, angle);


  checkCollectibleCollision(x, y);
  checkGhostCollision(x, y);
  requestAnimationFrame(animateImage);
}

function drawRotatedImage(image, x, y, angle) {
  ctx2.save();
  ctx2.translate(x, y);
  ctx2.rotate(angle);
  ctx2.drawImage(image, -image.width / 2, -image.height / 2);
  ctx2.restore();
}


imgOpen.onload = imgClosed.onload = function() {
  if (imgOpen.complete && imgClosed.complete) {
    requestAnimationFrame(animateImage);
  }
};
}
function updateScoreDisplay() {
  document.getElementById('scoreDisplay').innerText = 'Score: ' + score;
}


function checkGhostCollision(pacX, pacY) {
  const pacRadius = ghostImg.width / 2;
  ghostPositions.forEach((ghost, index) => {
      const ghostRadius = ghostImg.width / 2;
      const dx = pacX - ghost[0];
      const dy = pacY - ghost[1];
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < pacRadius + ghostRadius) {
          if (!attemptingDodge) { 
              score -= 1;
              updateScoreDisplay();
          }
          
          ghostPositions.splice(index, 1);
      }
  });
}


function showEndGameAlert() {
  Swal.fire({
      title: 'Game Over!',
      text: `Your score: ${score}. Want to play again?`,
      icon: 'success',
      confirmButtonText: 'Play Again',
      background: '#000000',
      color: '#FFD700',
      confirmButtonColor: '#0095DD',
      customClass: {
          popup: 'arcade-popup',
          title: 'arcade-title',
          content: 'arcade-content',
          confirmButton: 'arcade-confirm-button',
          icon: 'arcade-icon'
      }
  }).then((result) => {
      if (result.isConfirmed) {
          window.location.reload(); 
      }
  });
}


var attemptingDodge = false;
var attemptingCollect = false;

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
      if (!attemptingCollect) { 
          attemptingDodge = true;
          setTimeout(() => {
              attemptingDodge = false;
          }, 400); 
      }
  } else if (event.code === 'Enter') {
      if (!attemptingDodge) { 
          attemptingCollect = true;
          setTimeout(() => {
              attemptingCollect = false;
          }, 400); 
      }
  }
});





canvas2.addEventListener('click', function(event) {
  console.log('Mouse click coordinates: x=', event.offsetX, 'y=', event.offsetY);
});
