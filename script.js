'use strict';
// Your JS goes here


makeRow();
makeRow();
makeRow();
makeRow();
makeRow();
makeRow();
makeRow();
makeRow();
makeRow();

//  ROW ROW ROW YOUR DIV!!!!
function makeRow(){
  var black = newChildElement(document.body, 'black');
  var red = newChildElement(document.body, 'red');
  var black = newChildElement(document.body, 'black');
  var red = newChildElement(document.body, 'red');
  var black = newChildElement(document.body, 'black');
  var red = newChildElement(document.body, 'red');
  var black = newChildElement(document.body, 'black');
  var red = newChildElement(document.body, 'red');
  var black = newChildElement(document.body, 'black');
  var red = newChildElement(document.body, 'red');
} // ACTUALLY MAKES ROW +1 SO 9 CALLS MAKES 10 ROWS. 




// MASTER OF FUNCTIONS --- erm. elements. --- whatever.
function newChildElement (parent, elemClass) {
  // * Each tile should be a `div`
  var elem = document.createElement('div'); // creates the element
  // * Each tile's width is `11.1%`
  elem.style.width = '11.1%';
  elem.style.height = '11.1%';
  // * Set each tile's `float` property to `left`
  elem.style.float = 'left';
  // * Each tile's paddingBottom is `11.1%`
  elem.style.paddingBottom = '11.1%';
  if (elemClass !== undefined){ // sets class
    elem.setAttribute('class', elemClass);
  }
  if (elemClass === 'black'){ //sets to bgc to black if class of black
    elem.style.backgroundColor = 'black';
  }
  if (elemClass === 'red'){ //sets to bgc to red if class of red
    elem.style.backgroundColor = 'red';
  }
  parent.appendChild(elem); // attaches the childElement to the Parent.
  return elem;
}
