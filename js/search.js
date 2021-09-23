function search(){
    fetch("https://newsapi.org/v2/everything?q="+document.getElementById("query").value+"&from="+document.getElementById("date")+"&sortBy="+document.getElementById("sortby")+"&apiKey=f13a081f035740b1967300a8357a3e69")
    .then(res=>res.json())
    .then((data)=>{
      console.log(data);
      console.log(document.getElementById("date").value)
      }
    )
}