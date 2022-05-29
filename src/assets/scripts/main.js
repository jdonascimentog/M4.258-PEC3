/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC ";

  console.log(`Hello, ${university}!`);

  openMenu = function () {
    var x = document.getElementById("nav");
    if (x.className === "header__nav") {
      x.className += " responsive";
    } else {
      x.className = "header__nav";
    }
  };
})();
