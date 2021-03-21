Cbfootprint = 0
q1value = 0
q2value = 0
q3value = 0
q4value = 0
q5value = 0
q6value = 0
q7value = 0
q8value = 0
q9value = 0
q10value = 0

function preload(){
  boyImage=loadImage("boygirlimage.jpg")
}




function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight)
  boy=createSprite(200,300,10,10)
  boy.scale=0.1
  boy.addImage(boyImage)
  
  question1 = createP("Choose the correct option to start cleaning the drainage <p>A. Mask <p> B. Helmet <p>  C. Cloth ")
  question1.position(0, 20)
  input1 = createInput()
  input1.position(200, 70)
  
  question2 = createP("You have to cover the house drainage first? <p> A.Mud <p> B.Stone <p> C.Drain Cover")
  question2.position(-1000, 1000)
  input2 = createInput()
  input2.position(-1000, 1000)
  
  question3 = createP("Now we need to take out the impure and dirty water <p> A.filteration <p> B.natural process <p> C.UV-radiation")
  question3.position(-1000, 1000)
  input3 = createInput()
  input3.position(-1000, 1000)

  question4 = createP("We need to clean the inner part of drainage first <p>A.Baking Soda <p> B.HandPicking all the dirty stuff <p> C.taking of them through some other process")
  question4.position(-1000, 1000)
  input4 = createInput()
  input4.position(-1000, 1000)
  
  question5 = createP("YaY we are almost done..but THE SMELL here makes more problem! How can we get rid of this smell? <p> A.cleaning bacterial germs through fertilisers <p> B.using vinegar and cup of backing soda <p> C.adding some perfume.")
  question5.position(-1000, -1000)
  input5 = createInput()
  input5.position(-1000, 1000)
  
  button = createButton("Click me!");
  button.mousePressed(add);
  button.position(300, 110)

}

function draw() {
drawSprites()
}

function add() {
  answer1 = input1.value()
  question1.position(-100, -100)
  if (answer1 == "A" || answer1 == "a") {
    q1value = q1value + 644;
    question2.position(0, 20);
    input2.position(200, 70);
    input1.position(-1000, -1000);
    input1.value('')
  } else if (answer1 == "B" || answer1 == "b") {
    q1value = q1value +0;
    question2.position(0, 20);
    input2.position(200, 70);
    input1.position(-1000, -1000);
    input1.value('')
    
  } else if (answer1 == "C" || answer1 == "c") {
    q1value = q1value + 0;
    question2.position(0, 20);
    input2.position(200, 70);
    input1.position(-1000, -1000);
    input1.value('')
    
  }

  answer2 = input2.value();

  if (answer2 == "A" || answer2 == "a") {
    q2value = q2value +0;
    question2.position(-200, -200);
    question3.position(0, 20);
    input3.position(200, 70);
    input2.position(-1000, -1000);
    input2.value('')
  } else if (answer2 == "C" || answer2 == "c") {
    q2value = q2value + 210;
    question2.position(-200, -200);
    question3.position(0, 20);
    input3.position(200, 70);
    input2.position(-1000, -1000);
    input2.value('')
  } else if (answer2 == "B" || answer2 == "b") {
    q2value = q2value +0;
    question2.position(-200, -200);
    question3.position(0, 20);
    input3.position(200, 70);
    input2.position(-1000, -1000);
    input2.value('')
  }

  answer3 = input3.value();

  if (answer3 == "C" || answer3 == "c") {
    q3value = q3value +0;
    question3.position(-200, -200);
    question4.position(0, 20);
    input4.position(200, 70);
    input3.position(-1000, -1000);
    input3.value('')
  } else if (answer3 == "A" || answer3 == "a") {
    q3value = q3value + 1113;
    question3.position(-200, -200);
    question4.position(0, 20);
    input4.position(200, 70);
    input3.position(-1000, -1000);
    input3.value('')
  } else if (answer3 == "B" || answer3 == "b") {
    q3value = q3value + 0;
    question3.position(-200, -200);
    question4.position(0, 20);
    input4.position(200, 70);
    input3.position(-1000, -1000);
    input3.value('')
  }

  answer4 = input4.value()

  if (answer4 == "C" || answer4 == "c") {
    q4value = q4value + 0;
    question4.position(-200, -200);
    question5.position(0, 20);
    input5.position(200, 70);
    input4.position(-1000, -1000);
    input4.value('')
  } else if (answer4 == "A" || answer4 == "a") {
    q4value = q4value +0;
    question4.position(-200, -200);
    question5.position(0, 20);
    input5.position(200, 70);
    input4.position(-1000, -1000);
    input4.value('')
  } else if (answer4 == "B" || answer4 == "b") {
    q4value = q4value + 4818;
    question4.position(-200, -200);
    question5.position(0, 20);
    input5.position(200, 150);
    input4.position(-1000, -1000);
    input4.value('')
  }

  
  
  answer5 = input5.value()

  if (answer5 == "C" || answer5 == "c") {
    q5value = q5value - 7;
    question5.position(-200, -200);
    input5.position(-1000, -1000);
    input5.value('')
    text(q1value + q2value + q3value + q4value + q5value + " tonnes", 240, 240)
    text("Great! You've cleaned the drainage succesfully",350,350)
  } else if (answer5 == "A" || answer5 == "a") {
    q5value = q5value + 0;
    question5.position(-200, -200);
    input5.position(-1000, -1000);
    input5 .value('')
    text(q1value + q2value + q3value + q4value + q5value + " tonnes", 240, 240)
    text("Great! You've cleaned the drainage succesfully",350,350)
  }
  else if (answer5 == "B" || answer5 == "b") {
    q5value = q5value - 50;
    question5.position(-200, -200);
    input5.position(-1000, -1000);
    input5.value('')
    text(q1value + q2value + q3value + q4value + q5value + " tonnes", 240, 240)
    text("Great! You've cleaned the drainage succesfully",350,350)
  }

  //text(q1value + q2value + " tonnes",240,240)
}