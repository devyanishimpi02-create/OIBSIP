const input = document.getElementById('temp-input');
const unitSelect = document.getElementById('unit-select');
const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');
const errorBox = document.getElementById('error-box');
const resultsBox = document.getElementById('results-box');

const ABS_ZERO_C = -273.15;
const ABS_ZERO_F = -459.67;
const ABS_ZERO_K = 0;

function showError(msg) {
  errorBox.textContent = msg;
  errorBox.classList.add('show');
  resultsBox.classList.remove('show');
  input.classList.add('invalid');
}

function clearError() {
  errorBox.classList.remove('show');
  errorBox.textContent = '';
  input.classList.remove('invalid');
}

function toCelsius(value, unit) {
  if (unit === 'C') return value;
  if (unit === 'F') return (value - 32) * 5 / 9;
  if (unit === 'K') return value - 273.15;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

function convert() {
  const raw = input.value.trim();
  const unit = unitSelect.value;

  if (raw === '') {
    showError('Please enter a temperature value.');
    return;
  }

  // Reject anything that isn't a valid decimal number (optional leading -, digits, optional single decimal point)
  const numericPattern = /^-?\d+(\.\d+)?$/;
  if (!numericPattern.test(raw)) {
    showError('Please enter a valid number (digits only, e.g. 37 or -12.5).');
    return;
  }

  const value = parseFloat(raw);

  if (!isFinite(value)) {
    showError('Please enter a valid number.');
    return;
  }

  // Absolute zero check, per the unit entered
  if (unit === 'C' && value < ABS_ZERO_C) {
    showError(`That's below absolute zero. The coldest possible temperature is ${ABS_ZERO_C}°C.`);
    return;
  }
  if (unit === 'F' && value < ABS_ZERO_F) {
    showError(`That's below absolute zero. The coldest possible temperature is ${ABS_ZERO_F}°F.`);
    return;
  }
  if (unit === 'K' && value < ABS_ZERO_K) {
    showError(`That's below absolute zero. Kelvin has no negative values (0K is the coldest possible).`);
    return;
  }

  clearError();

  const celsius = toCelsius(value, unit);
  const fahrenheit = celsius * 9 / 5 + 32;
  const kelvin = celsius + 273.15;

  document.getElementById('val-C').textContent = round2(celsius).toFixed(2) + '°C';
  document.getElementById('val-F').textContent = round2(fahrenheit).toFixed(2) + '°F';
  document.getElementById('val-K').textContent = round2(kelvin).toFixed(2) + 'K';

  // De-emphasize the source unit's row since it mirrors the input
  ['C', 'F', 'K'].forEach(u => {
    document.getElementById('row-' + u).classList.toggle('source', u === unit);
  });

  resultsBox.classList.add('show');
}

function reset() {
  input.value = '';
  unitSelect.value = 'C';
  clearError();
  resultsBox.classList.remove('show');
  input.focus();
}

convertBtn.addEventListener('click', convert);
resetBtn.addEventListener('click', reset);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    convert();
  }
});

input.addEventListener('input', () => {
  if (errorBox.classList.contains('show')) {
    clearError();
  }
});