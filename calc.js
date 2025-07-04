let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function toggleSign() {
  if (display.value.startsWith('-')) {
    display.value = display.value.slice(1);
  } else if (display.value) {
    display.value = '-' + display.value;
  }
}

function calculate() {
  try {
    let expression = display.value.replace('%', '/100');
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}
