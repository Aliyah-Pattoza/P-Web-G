const api_url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;
async function getRate(url){
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
   
        show(data);

    
} getRate(api_url)


function show(data) {
    let tab = 
        `
        <div class="col-md-3 mb-4">
            <div class="card text-center border-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div>
                    <h5 class="card-title" id="title"></h5>
                    <a href="#" class="btn btn-primary" id="detail">Detail</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;

    for (let r of data.results) {
        tab += `
        <div class="col-md-3 mb-4">
            <div class="card text-center border-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div>
                  <h5 class="card-title" id="title">${r.name}</h5>
                  <a href="${r.url}" class="btn btn-primary" id="detail">Detail</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      
    `;
    }

    document.getElementById("see").innerHTML = tab;
}