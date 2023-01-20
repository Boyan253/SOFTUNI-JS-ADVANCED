function rotateArr(arr) {

  let requiredRotations = Number(arr.pop());

  let usefulRotations = requiredRotations % arr.length;

  for (let i = 0; i < usefulRotations; i++) {

    arr.unshift(arr.pop());

  }

  console.log(arr.join(" "));

}

 

rotateArr(["Banana", "Orange", "Coconut", "Apple", "15"]);
