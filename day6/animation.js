let changeColor = () => {
  //   let element = document.getElementById("container");
  //   let red = parseInt(Math.random() * 256);
  //   let green = parseInt(Math.random() * 256);
  //   let blue = parseInt(Math.random() * 256);
  //   element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  addElements();
};
let counter = 0;
let addElements = () => {
  let parent = document.getElementById("container");
  let myButton = document.createElement("button");
  let red = parseInt(Math.random() * 256);
  let green = parseInt(Math.random() * 256);
  let blue = parseInt(Math.random() * 256);
  counter++;
  myButton.textContent = "Button" + counter;
  myButton.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  myButton.addEventListener("click", () => {
    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);
    myButton.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });
  parent.appendChild(myButton);
};
