apiUrl
  .then(response => response.json())
  .then(content => {
      console.log(content);
      let htmlRepresentation = "";  
      content.docs.forEach(element => {
        htmlRepresentation += `
        
 

        <div class="item">
            <div class="class="col-sm-12 col-lg-6">
                <div class="card h-100" style="width: 18rem;">
                    <img src=${element.bild_app} class="card-img-top"  alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${element.titel}</h5>
                    <p class="card-text">${element.beschreibung}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item font-weight-bold">Price: <span class="text-danger h4">${element.preis} Euro</span></spand></li>
                    <li class="list-group-item text-muted">Basic Price: <span class="text-danger">${element.basicPrice}</span></spand></li>
                    </ul>
                    <div class="card-body">
                    <a href="#" class="card-link">Add to Basket</a>
                    </div>
                </div>
            </div>
        </div>
       

      `;
      });

      return htmlRepresentation;
  })
  .then(htmlRepresetation =>{
        contentDiv.innerHTML = htmlRepresetation;