let calculated = false;
let memory = null;
let operand = "";
function display(key) {
  let result = document.getElementById("result").value;
  if (key === ".") {
    if (operand.indexOf(".") != -1) return;
  }
  if ("+-*/%".includes(key)) {
    operand = "";
  }
  operand += key;
  //   if (result == 0) {
  //     document.getElementById("result").value = key;
  //   } else {
  //     document.getElementById("result").value += key;
  //   }
  //   document.getElementById("result").value = result == 0 ? key : result + key;

  if (calculated || result === "0") {
    document.getElementById("result").value = key;
    calculated = false;
  } else {
    document.getElementById("result").value += key;
  }
}

function calculate() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = eval(result);
  calculated = true;
}
let backSpace = () => {
  let result = document.getElementById("result").value;
  if (result === "0") return;
  if (result.length == 1) {
    document.getElementById("result").value = 0;
  } else document.getElementById("result").value = result.slice(0, -1);
};
let memorySave = () => {
  let result = document.getElementById("result").value;
  if (result === "0") return;
  memory = result;
};
let memoryRestore = () => {
  if (memory === null) return;
  document.getElementById("result").value = memory;
};

let clearAll = () => {
  document.getElementById("result").value = 0;
  calculated = false;
};
let clearEntry = () => {
  document.getElementById("result").value = 0;
};
let memoryCancel = () => {
  memory = null;
};
let memoryAdd = () => {
  let result = document.getElementById("result").value;
  if (result === "0") return;
  if (memory === null) {
    memory = result;
  } else {
    memory = Number(memory) + Number(result);
  }
  // document.getElementById("result").value = memory;
};
let memoryMinus = () => {
  let result = document.getElementById("result").value;
  if (result === "0") return;
  if (memory === null) {
    memory = result;
  } else {
    memory = Number(memory) - Number(result);
  }
  // document.getElementById("result").value = memory;
};
