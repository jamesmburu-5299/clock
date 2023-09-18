const hour=document.querySelector('.hours');
const minute=document.querySelector('.minutes');
const second=document.querySelector('.seconds');

function updateClock(){
    const currentDate=new Date();
   //setTimeout(updateClock(),1000);
   //console.log(setTimeout);
   const hour=new Date().getHours();
   
   const minute=new Date().getMinutes();
   const second=new Date().getSeconds();

   //console.log(hour,minute,second);

   const hourdeg=(new Date().getHours() / 12)* 360;
   document.querySelector('.hours').style.transform=`rotate(${hourdeg})`;
   
   const minutedeg=(new Date().getMinutes()/ 60)* 360;
   document.querySelector('.minutes').style.transform=`rotate(${minutedeg})`;

   const seconddeg=(new Date().getSeconds()  / 60)* 360;
document.querySelector('.seconds').style.transform=`rotate(${seconddeg})`;
}
//updateClock()
setInterval(updateClock,1000);


