var xhrHttp=new XMLHttpRequest();
   xhrHttp.onreadystatechange = function(){
   if(this.readyState==4 && this.status==200){      
         var data=JSON.parse(this.responseText);
         		OnLoaded(data);
         		/* search(data); */
         		 
     		   }	
         }
    xhrHttp.open('GET','assets/students.json',true);
		xhrHttp.send();
    


/*---------------onload func--------------*/
var OnLoaded = function(data) {
  console.log(data);
  sample = CustomList('grid', {data : data});
};
/*=========== search func============*/

/* var search =function(event){
  sample._filter(event);
}; */

