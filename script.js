// script.js

document.getElementById('tempForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const tempInput = document.getElementById('temperature').value.trim();
  const scale = document.getElementById('scale').value;
  const resultDiv = document.getElementById('result');

  // Clear previous result
  resultDiv.textContent = '';
  resultDiv.classList.remove('error');

  // Validate input: must be a valid number (integer or decimal)
  if (tempInput === '' || isNaN(tempInput)) {
    resultDiv.textContent = 'Error: Masukkan nilai suhu yang valid (angka).';
    resultDiv.classList.add('error');
    return;
  }

  const temperature = parseFloat(tempInput);
  let converted, explanation;

  if (scale === 'celsius') {
    // Convert Celsius to Fahrenheit
    converted = (temperature * 9/5) + 32;
    explanation = `${temperature}°C sama dengan ${converted.toFixed(2)}°F. 
    Rumus: (°C × 9/5) + 32 = °F`;
  } else {
    // Convert Fahrenheit to Celsius
    converted = (temperature - 32) * 5/9;
    explanation = `${temperature}°F sama dengan ${converted.toFixed(2)}°C. 
    Rumus: (°F − 32) × 5/9 = °C`;
  }

  // Display result and explanation
  resultDiv.innerHTML = `<strong>Hasil Konversi:</strong> ${converted.toFixed(2)}<br/><br/>
                         <em>${explanation}</em>`;
});
