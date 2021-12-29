var alphapet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var sources=["a.JPEG","b.JPEG","c.JPEG","d.JPEG","e.JPEG","f.JPEG","g.JPEG","h.JPEG","i.JPEG","j.JPEG","k.JPEG","l.JPEG","m.JPEG","n.JPEG","o.JPEG","p.JPEG","q.JPEG","r.JPEG","s.JPEG","t.JPEG","u.JPEG","v.JPEG","w.JPEG","x.JPEG","y.JPEG","z.JPEG"];
var countt;
var d;
var indexes=new Array();
var listOfPic=[];
var indexes;

var text = document.getElementsByTagName("input")[0];
var generate = document.getElementsByTagName("input")[1];
var form=document.getElementsByTagName("form")[0];
var div=document.getElementsByTagName("div")[0];
generate.addEventListener("click", function(e){
   //i wanted tto clear the last elements before add new one
   f(e);
});

function removeChilderenNodes(parent){
   while (parent.firstChild){
      parent.removeChild(parent.firstChild);
   }
}
 function f(e){
   var v=parseInt(text.value);
   
   if(v<1 ||v>26){
      removeChilderenNodes(div);
      div.innerHTML="";
     // alert("English leters is 26 letter enter number between 1:26");
     div.innerHTML='<b style="background-color: white;">English leters is 26 letter enter number between 1:26</b>';
   }
   else{
      indexes=[];
        //check that all generated numbers is uniqe
        while(indexes.length < v){
         // here new number generated
        var item = Math.floor(Math.random() * 26) + 1;
        // check if generated is unique
        if(indexes.indexOf(item) === -1)
          indexes.push(item);
      }
      removeChilderenNodes(div);

      for(var i=0;i<indexes.length;i++){
         var button = document.createElement("button");
         //indexes reurn the generated numbers 1:26
         var index=indexes[i];
         var textnode=alphapet[index-1];
         button.setAttribute("class","btn");
         button.setAttribute("id",index-1);
         button.setAttribute("style","background-color:burlywood;border: 4px; border-style: inset;border-radius: 5px;");
         button.innerHTML=textnode;
         div.appendChild(button);
    }


     //list of buttons created
   listOfPic=document.getElementsByClassName("btn");
   //looping on buttons to add event to it 
   for(var i = 0; i < listOfPic.length; i++){
      listOfPic[i].addEventListener("click", function(e){
         d=new Date();
         countt=localStorage.getItem("count");
         countt=parseInt(countt)+1;
         localStorage.setItem("count",JSON.stringify(countt));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
         storeObject(e.target,e.type,d);
      printPicture(e.target.id);
      });
   }

 }

   d=new Date();
   countt=localStorage.getItem("count");
   countt=parseInt(countt)+1;
   localStorage.setItem("count",JSON.stringify(countt));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
   storeObject(e.target,e.type,d);

 }
 
 //function excute when click on any letter button
 function printPicture(id){
   //console.log(listOfPic);
    var img=document.getElementsByTagName("img")[0];
    var src=sources[id];
    img.setAttribute("src",src);
 }

//function templete to create object
 function eventObject(target,type,time){
      this.target=target;
      this.type=type;
      this.time=time;
 }

//function excute when any event occur to store the info of the object
 function storeObject(target,type,time){
   var x=new eventObject(target,type,time);
   localStorage.setItem(countt,JSON.stringify(x));
 }

//event occur when load
 window.addEventListener("load", function(e){
   d=new Date();
   countt=localStorage.getItem("count");
   countt=parseInt(countt)+1;
   localStorage.setItem("count",JSON.stringify(countt));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
   storeObject(e.target,e.type,d);
});
//event occur when unload
window.addEventListener("unload", function(e){
   d=new Date();
   countt=localStorage.getItem("count");
   countt=parseInt(countt)+1;
   localStorage.setItem("count",JSON.stringify(countt));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
   storeObject(e.target,e.type,d);
});

 