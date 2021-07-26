//Create variables here
var dog,happyDog;
var database,foodS,foodStock;

function preload()
{
	//load images here
  dogImg =  loadImage("images/Dog.png");
  happydogImg = loadImage("images/happydog.png");
}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);

  dog = createSprite(250,380);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  //add = createButton("ADD FOOD");
 // add.position(750,184);
  //add.mousePressed(addStock);
 
  

//the data base is added 
foodStock = database.ref('food');
foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown("UP_ARROW")){
  WriteStock(foodS);
  dog.addImage("happy",happydogImg);
  
   
}

  drawSprites();
  //add styles here
  textSize(25);
  fill("red");
  stroke("cyan");
  text("food remaining = "+ foodS,170,80);
  text("press upArrow to feed the dog 🐶 " ,170 , 120 );
  text("My dogs name Archie 💖",170,160);
  
}

function readStock(data){
  foodS = data.val();

}

function WriteStock(x){
 if(x<=0){
   x = 0;
 }
 else{
   x = x-1;
 }
  database.ref('/').update({
      food:x
  })
}


 