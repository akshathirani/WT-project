fetch("http://api.mediastack.com/v1/news?access_key=306e5f8944df44dbe4d45c1082360c41&countries=in&languages=en")
.then(res => res.json())
.then(result => {
    console.log(result);
    const content= result.data.slice(0,5);
    content.forEach(element => {
        document.getElementById("breaking").innerHTML += `<span class="dot"> </span> 
                                                          <a href="${element.url}" target="_blank">${element.title} </a>`;
    });
});