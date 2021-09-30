function search(){
    fetch("https://newsapi.org/v2/everything?q="+document.getElementById("query").value+"&from="+document.getElementById("date")+"&sortBy="+document.getElementById("sortby")+"&apiKey=f13a081f035740b1967300a8357a3e69")
    .then(res=>res.json())
    .then((data)=>{
      console.log(data);
      const sr = data.articles.slice(0,6);
      var i=0;
      sr.forEach(element => {
        if(element.urlToImage == null) {
          const srcard = `
                      <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="srcards card bg-dark text-white">
                          <img class="card-img" src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" alt="image">
                          <div class="card-img-overlay">
                            <h5 class="card-title srcards_head">${element.title}</h5>
                            <p class="card-text srcards_des">${element.description}</p>
                            <button type="button" class="btn btn-outline-success view_btn">View</button>
                          </div>
                        </div>
                      </div>
                    
          `
          i=i+1;
          document.getElementById("search_result").innerHTML += srcard;
        }
        else {
          const srcard = `
                        <div class="col-lg-4 col-md-4 col-sm-12 c_smtg">
                          <div class="srcards card bg-dark text-white">
                            <img class="card-img" src="${element.urlToImage}"" alt="image">
                            <div class="card-img-overlay">
                              <h5 class="card-title srcards_head">${element.title}</h5>
                              <p class="card-text srcards_des">${element.description}</p>
                              <button type="button" class="btn btn-outline-success view_btn">View</button>
                            </div>
                          </div>
                        </div>
          `
          i=i+1;
          document.getElementById("search_result").innerHTML += srcard;
        }
      });
      }
    )
    .catch(err => console.log(err));
}