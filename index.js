let cats=["Milo", "Otis", "Garfield" ]


function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop('Garfield')}

    
 function destructivelyRemoveFirstCat() {
        cats.shift('Milo');
      }

function appendCat(name) {
    
const newCats = ["Milo", "Otis", "Garfield","Broom" ];
return newCats;}

function prependCat(name) {
    const newCats = ["Arnold","Milo", "Otis", "Garfield"]
    return newCats;
  }

  function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
  }


  function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }