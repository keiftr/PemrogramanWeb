function clearScreen() {
  document.getElementById("result").value = "";
}

function insert(value) {
  let display = document.getElementById("result");
  if (value === '±') {
      display.value = display.value.charAt(0) === '-' ? display.value.substring(1) : '-' + display.value;
  } else {
      display.value += value;
  }
}

function calculate() {
  try {
      let input = document.getElementById("result").value;
      input = input.replace('×', '*').replace('÷', '/').replace('x²', '**2');
      let result = eval(input);
      document.getElementById("result").value = result;
  } catch (error) {
      document.getElementById("result").value = "Error";
  }
}
