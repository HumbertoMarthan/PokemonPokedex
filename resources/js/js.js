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
      
      $(".container").addClass("aparece");
      
      // ajuste 0 a esquerda
      var tamanho = "";
      tamanho = pokemon.id.toString();
      
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
  
  var hp, 
      attack, 
      defense,
      specialattack,
      specialdefense,
      speed;

  pokemon.stats.forEach(e => {
    if(e.stat.name === 'hp'){
      hp = e.base_stat;
    }

    if(e.stat.name === 'attack'){
      attack = e.base_stat;
    }

    if(e.stat.name === 'defense'){
      defense = e.base_stat;
    }
   
    if(e.stat.name === 'special-attack'){
      specialattack = e.base_stat;
    }

    if(e.stat.name === 'special-defense'){
      specialdefense = e.base_stat;
    }

    if(e.stat.name === 'speed'){
      speed = e.base_stat;
    }
  });

  var tipos = [];
  var url = [];
  var botaoTipo ;

if(pokemon.types.length >= 1){
 
  pokemon.types.forEach(e => {
    tipos.push(e.type.name.toString());
    url.push(e.type.url.toString());
  });
  
  var estilo1, estilo2;
  var corEstilo = []; 
  
  corEstilo.push("normal");
  corEstilo.push("fighting");
  corEstilo.push("flying");
  corEstilo.push("poison");
  corEstilo.push("ground");
  corEstilo.push("rock");
  corEstilo.push("bug");
  corEstilo.push("ghost");
  corEstilo.push("steel");
  corEstilo.push("fire");
  corEstilo.push("water");
  corEstilo.push("gress");
  corEstilo.push("electric");
  corEstilo.push("psychic");
  corEstilo.push("ice");
  corEstilo.push("dragon");
  corEstilo.push("dark");
  corEstilo.push("fire");

  if(url[0] === 'https://pokeapi.co/api/v2/type/1/'){
      estilo1 =  corEstilo[0].toString()  ;
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/2/'){
      estilo1 = corEstilo[1].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/3/'){
      estilo1 = corEstilo[2].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/4/'){
      estilo1 =   corEstilo[3].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/5/'){
      estilo1 =  corEstilo[4].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/6/'){
      estilo1 = corEstilo[5].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/7/'){
      estilo1 = corEstilo[6].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/8/'){
      estilo1 = corEstilo[7].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/9/'){
      estilo1 = corEstilo[8].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/10/'){
      estilo1 = corEstilo[9].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/11/'){
      estilo1 = corEstilo[10].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/12/'){
      estilo1 = corEstilo[11].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/13/'){
      estilo1 = corEstilo[12].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/14/'){
      estilo1 = corEstilo[13].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/15/'){
      estilo1 = corEstilo[14].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/16/'){
      estilo1 = corEstilo[15].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/17/'){
      estilo1 = corEstilo[16].toString();
    }else if(url[0] === 'https://pokeapi.co/api/v2/type/18/'){
      estilo1 = corEstilo[17].toString();
    }


  if(pokemon.types.length === 1){
   
    botaoTipo = ` <button class="btn btn-success `+ estilo1 +`" disabled>  ` + tipos[0] + `</button>`;

  }else{ 

    if(url[1] === 'https://pokeapi.co/api/v2/type/1/'){
      estilo2 =  corEstilo[0].toString()  ;
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/2/'){
      estilo2 = corEstilo[1].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/3/'){
      estilo2 = corEstilo[2].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/4/'){
      estilo2 =   corEstilo[3].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/5/'){
      estilo2 =  corEstilo[4].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/6/'){
      estilo2 = corEstilo[5].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/7/'){
      estilo2 = corEstilo[6].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/8/'){
      estilo2 = corEstilo[7].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/9/'){
      estilo2 = corEstilo[8].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/10/'){
      estilo2 = corEstilo[9].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/11/'){
      estilo2 = corEstilo[10].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/12/'){
      estilo2 = corEstilo[11].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/13/'){
      estilo2 = corEstilo[12].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/14/'){
      estilo2 = corEstilo[13].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/15/'){
      estilo2 = corEstilo[14].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/16/'){
      estilo2 = corEstilo[15].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/17/'){
      estilo2 = corEstilo[16].toString();
    }else if(url[1] === 'https://pokeapi.co/api/v2/type/18/'){
      estilo2 = corEstilo[17].toString();
    }

    botaoTipo = ` <button class="btn btn-success `+ estilo1 +`" disabled >  ` + tipos[0] + ` </button> 
                  <button class="btn btn-success `+ estilo2 +`" disabled >  ` + tipos[1] + ` </button>`;
  } 
}

  card = `
             <div class="card" style="width: 100%;border-radius: 25px !important;background-color:#e8e1e1">
                <div class="row container cardHeaderFooter" >
                    <div class="col-12" >
                        <h3 class="name">${pokemon.name.toUpperCase()}</h3>
                    </div>
                    <div class="col-8" style="padding: 15px" >
                      ` + botaoTipo + `  
                    </div>
                    <div class="col-2" style="padding-top: 10px ;padding-right: 35px;">
                        <img class="rounded-cir cle" src="resources/images/pokebola.png" height="40px" width="40px"> </img>
                    </div>

                </div>

                <div class="container">
                    <div class="col-12" style="text-align:center" >
                        <img class="rounded-cir cle" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png" height="100%" width="100%"> </img>
                    </div>
                </div>    
            
                <div class="card-body">
                    <p class="card-text">
                        <div class="row container">
                            <div class="col-4">
                              <h7>${pokemon.weight  / 10}kg</h7> 
                              <h7>Altura ${pokemon.height  / 10}m</h7>
                            </div>
                            <div class="col-4" style="border-left-style: inset;border-left-width: thin;">
                            <h7>HP:  ${hp} </h7>
                            <h7>ATK: ${attack} </h7>
                            <h7>DEF: ${defense} </h7>
                            </div>  
                            <div class="col-4" style="border-left-style: inset;border-left-width: thin;">
                            <h7>SPD: ${speed} </h7> 
                            <h7>SAT: ${specialattack} </h7>  
                            <h7>SDF: ${specialdefense}  </h7>
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

function autocomplete(inp, arr) {
    
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
       
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "col-md-12 autocomplete-items");
        this.parentNode.appendChild(a);
       
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
   
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { //up
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

var pokeList = [""];
async function requisicao(url) {
  await fetch(url)
    .then(response => response.json())
    .then(data => {
      
      data.results.forEach(e => {
        //pokemons /10000
        if(e.url.length != 40){
          pokeList.push(e.name.toString());
        }
      });
    })
    .catch(err => console.log(err));
}
 requisicao('https://pokeapi.co/api/v2/pokemon/?limit=2000');

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), pokeList);

