// API endpoint --------------------------------------------
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Get Elements --------------------------------------------
const getElement = document.querySelector.bind(document);
const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.pokemon'),
      erroMessage = getElement('.error');

var pokeName, 
    pokemon, 
    card; 

async function requestPokeInfo(url, name) {
  await fetch(url + name)
    .then(response => response.json())
    .then(data => {
      
      pokemon = data;
      //Mostra container
      $(".container").addClass("aparece");
      var tamanho = "";
      tamanho = pokemon.id.toString();
      console.log('tamanho: '  + tamanho.length);
      if(tamanho.length <= 2){
        if(tamanho.length == 2){
            pokemon.id = '0'+ tamanho;
        }  
        if(tamanho.length == 1){
            pokemon.id = '00'+ tamanho;
        }
      }
      
    })
    .catch(err => console.log(err));
}

function createCard () {
   

  card = `
             <div class="card" style="width: 100%;border-radius: 25px !important;background-color:#2a92b1">
                <div class="row">
                    <div class="col-md-12" >
                        <h1 class="name">${pokemon.name.toUpperCase()}</h1>
                    </div>
                </div>

                <div class="row">
                
                    <div class="col-md-12" style="text-align:center" >
                        <img class="rounded-circle" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png" </img>
                    </div>
                </div>    
            
                <div class="card-body">
                    <p class="card-text">
                        <div class="row" >
                            <div class="col-md-12" >
                              <h4>  Tipo: ${pokemon.types.map(item => item.type.name).toString()} </h4>
                            </div>
                            <div class="col-md-12" >
                            <h4 class="number">Nº ${pokemon.id}</h4>
                            </div>
                            <div class="col-md-12" >
                                <h4>Peso ${pokemon.weight  / 10}kg</h4>
                            </div>
                            <div class="col-md-12" >
                                <h4>Altura ${pokemon.height  / 10}m</h4>
                            </div>
                        </div>
                    </p>
                </div>
            </div>

        </div>`;
  return card;
}

async function startApp(pokeName) {
  await requestPokeInfo(baseUrl, pokeName);
      container.innerHTML = createCard();
}

searchButton.addEventListener('click', event => {
  event.preventDefault();
  pokeName = searchInput.value.toLowerCase();
  searchInput.value = '';
  startApp(pokeName);
});

