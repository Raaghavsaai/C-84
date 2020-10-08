canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_mars_array=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg","mars6.jpg"];
random_number=Math.floor(Math.random()*6);
rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

background_image=nasa_mars_array[random_number];
console.log("background_image="+background_image);
rover_img="rover.png";

function add(){
background_imagetag = new Image();

background_imagetag.onload = uploadbackground;
background_imagetag.src = background_image;

rover_imagetag = new Image();
rover_imagetag.onload = uploadrover;

rover_imagetag.src = rover_img;
}

function uploadbackground(){
ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);

}
function uploadrover(){

    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown); 
function my_keydown(e) {
     keyPressed = e.keyCode;
     console.log(keyPressed); 
     if(keyPressed == '38')
      { up();
         console.log("up"); 
} 
if(keyPressed == '40')
 { down();
     console.log("down");
 } 
 if(keyPressed == '37') { 
     left();
      console.log("left"); 
    } 
    if(keyPressed == '39')
  { right(); 
    console.log("right"); } 
}
function up() 
{ 
    if(rover_y >=0) { 
        rover_y = rover_y - 10; 
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
         uploadbackground();
          uploadrover();
         } 
        } 
function down(){ 
            if(rover_y <=500) { 
                rover_y =rover_y+ 10; 
                console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                 uploadbackground();
                  uploadrover(); 
                } 

                }
function left(){ 
        if(rover_x >=0) { 
                        rover_x =rover_x- 10; 
                        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                         uploadbackground();
                          uploadrover(); 
                        } 
        
                        }
function right(){ 
                            if(rover_x <=700) { 
                                rover_x =rover_x+ 10; 
                                console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                                 uploadbackground();
                                  uploadrover(); 
                                } 
                
                                }
