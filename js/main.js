document.querySelector("input").addEventListener("keyup",function(e){
var userInput = e.target.value;
getinput(userInput);

});
var allNews =[];

function getinput(term){
    var req = new XMLHttpRequest();

req.open("GET",`https://newsapi.org/v2/everything?q=tesla&from=2022-06-09&sortBy=publishedAt&apiKey=0925ca48ecce4e3a8a3d5a57f52e9799`);
req.send();

req.addEventListener("loaend", function(){

  if (  req.status == 200) {
    console.log(JSON.parse(req.response).articles );  


    allNews= JSON.parse(req.response).articles  ; 
   display();
  }
})
};

 function display(){
var cartona = '';
for (var i=0 ;i<allNews.length; i++){
cartona += `<div class="col-md-4">
<div class="item">
<img class=" w-100 " src="${allNews[i].urlToImage == null ?"images/images1.jpg":allNews[i].urlToImage }">
<h3>${allNews[i].author }</h3>
<p>${allNews[i]. description } </p>
</div></div>`
}
document.querySelector(".row").innerHTML= cartona ;

 };
