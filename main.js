
$.getJSON("https://newsapi.org/v2/top-headlines?country=us&apiKey=f13a081f035740b1967300a8357a3e69",function(result){
           
            console.log(result);
    const data=result.articles.slice(0,5);
    var i=0;
    data.forEach(element => {
        if(i==0){
            const corousel=
            `<div class="carousel-item active" >
            <a href="${element.url}"><img style="height:400px;width:200px;" src="${element.urlToImage}" class="d-block w-100" ></a>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>`
          

          const cobutton=
          `<li data-target="#carouselExampleDark" data-slide-to="${i}" class="active"></li>`
          i=i+1;
          document.getElementById("carousel-inner").innerHTML+=corousel;
        document.getElementById("indi").innerHTML+=cobutton;
        }else{
            const corousel=
            `<div class="carousel-item " >
            <a href="${element.url}"><img src="${element.urlToImage}" class="d-block w-100" ></a>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>`
          const cobutton=`<li data-target="#carouselExampleCaptions" data-slide-to="${i}"></li>`;
            i=i+1;
        document.getElementById("carousel-inner").innerHTML+=corousel;
        document.getElementById("indi").innerHTML+=cobutton;
        }
       

        
        
        
        
    });
})