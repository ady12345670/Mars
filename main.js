canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
curiosity_rover_width=100
curiosity_rover_Height=100
curiosity_rover_x=100
curiosity_rover_y=100
rimg="rover.png"

imgarray=["I2.jpg","I3.jpg","I4.jpg","I5.jpg"]
rn=Math.floor(Math.random()*4)
console.log(rn)
bgimg=imgarray[rn]

function add(){
bi=new Image()
bi.onload=UPLOAD_BG
bi.src=bgimg

ri=new Image()
ri.onload=UPLOAD_RI
ri.src=rimg
}

function UPLOAD_BG(){
ctx.drawImage(bi,0,0,canvas.width,canvas.height)
}

function UPLOAD_RI(){
ctx.drawImage(ri,curiosity_rover_x,curiosity_rover_y,curiosity_rover_width,curiosity_rover_Height)
}

window.addEventListener("keydown",mykeydown)

function mykeydown(e){
k = e.keyCode
if(k=='38'){
up()
console.log("up")
}

if(k=='40'){
down()
console.log("down")
}

if(k=='37'){
left()
console.log("left")
}

if(k=='39'){
right()
console.log("right")
}
}

function up(){
if(curiosity_rover_y>0){
curiosity_rover_y=curiosity_rover_y-10
UPLOAD_BG()
UPLOAD_RI()
}
}

function down(){
if(curiosity_rover_y<500){
curiosity_rover_y+=10
UPLOAD_BG()
UPLOAD_RI()
}
}
    
function left(){
    if(curiosity_rover_x>0){
    curiosity_rover_x-=10
    UPLOAD_BG()
    UPLOAD_RI()
    }
    }
    
    function right(){
    if(curiosity_rover_x<700){
    curiosity_rover_x+=10
    UPLOAD_BG()
    UPLOAD_RI()
    }
    }
        