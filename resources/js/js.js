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
      console.log('hp');
    }

    if(e.stat.name === 'attack'){
      attack = e.base_stat;
      console.log('attack');
    }

    if(e.stat.name === 'defense'){
      defense = e.base_stat;
      console.log('defense');
    }
   
    if(e.stat.name === 'special-attack'){
      specialattack = e.base_stat;
      console.log('defense');
    }

    if(e.stat.name === 'special-defense'){
      specialdefense = e.base_stat;
      console.log('defense');
    }

    if(e.stat.name === 'speed'){
      speed = e.base_stat;
      console.log('speed');
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
                    <div class="col-7" >
                        <h3 class="name">${pokemon.name.toUpperCase()}</h3>
                    </div>
                    <div class="col-3" style="padding-top: 40px;color:white !important">
                        <p style=""> Nº ${pokemon.order}
                    </div>
                    <div class="col-2" style="padding-top: 30px;">
                        <img class="rounded-cir cle" src="resources/images/pokebola.png" height="40px" width="40px"> </img>
                    </div>
                    <div class="col-12" style="padding: 20px" >
                      ` + botaoTipo + `  
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
                              <h6>Peso ${pokemon.weight  / 10}kg</h6> 
                              <h6>Altura ${pokemon.height  / 10}m</h6>
                            </div>
                            <div class="col-4">
                             HP:  ${hp} <br/> 
                             ATK: ${attack} <br/> 
                             DEF: ${defense}
                            </div>  
                            <div class="col-4">
                             SPD: ${speed} <br/>
                             SAT: ${specialattack} <br/> 
                             SDF: ${specialdefense} 
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
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "col-md-12 autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
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
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
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
        pokeList.push(e.name.toString());
      });
    })
    .catch(err => console.log(err));
}
 requisicao('https://pokeapi.co/api/v2/pokemon/?limit=2000');

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), pokeList);

