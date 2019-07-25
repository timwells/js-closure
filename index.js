// https://medium.com/@dis_is_patrick/practical-uses-for-closures-c65640ae7304

// Basic closure
function test1() {
    let name = "Test1";
    // displayName doesn’t define any local variables, 
    // yet it is able to alert name because name has been 
    // defined in the scope in which the closure was created 
    // — that of its outer function.
    function displayName() {
      console.log(`Name:${name}`)
    }
    displayName(); 
}

// Closure changes value in outer scope
function test2() {
  let name = "Test2";

  // Closures are capable of not only reading, 
  // but also manipulating the variables of 
  // their outer functions.
  function displayName() {
    console.log(`Name:${name}`)
  }
  function setName(newName) {
      name = newName;
  }
  displayName();
  setName("Test2 - Changed");
  displayName();
}

// Closure as Function factories
function test3(name) {
  //let name = "Test4";
  return function (value) {
      return value + ' ' + name;
    }
}

// functon factory
let test4 = (function() {
  let _position = 0
  function changeBy(amount) {
    return _position += amount
  }
  return {
    up: function() {
      return changeBy(1)
    },
    down: function() {
      return changeBy(-1)
    },
    position: function() {
      return _position
    }
  }
})();

// With ES6 arrow functions
let test5 = (() => {
  // Private variables and function/method
  let _position = 0
  function changeBy(amount) { return _position += amount }
  // Public methods
  return {
    up: () =>   { 
      console.log('up._position:',_position)
      return changeBy(1) 
    },
    down: () => { 
      console.log('down_position:',_position)
      return changeBy(-1) 
    },
    position: () => { return _position }
  }
})();

function main(){
  // test1()
  // test2()

  /*
  test3x = test3("test3x")
  console.log(test3x)  
  test3y = test3("test3y")
  console.log(test3x("*px*"))
  console.log(test3y("*py*"))
  */

  /*
  console.log(test4.position())
  console.log(test4.up())
  console.log(test4.up())
  console.log(test4.up())
  console.log(test4.position())
  console.log(test4.down())
  console.log(test4.down())
  console.log(test4.down())
  console.log(test4.down())
  console.log(test4.down())
  console.log(test4.position())
  */

 console.log(test5.position())
 console.log(test5.up())
 console.log(test5.up())
 console.log(test5.position())
 console.log(test5.down())
 console.log(test5.down())
 console.log(test5.down())
 console.log(test5)

 /*
  display public methods:
    { up: [Function: up],
      down: [Function: down],
      position: [Function: position] 
    }
 */
}
main()