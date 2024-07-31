function calculate() 
{
    const D1 = parseFloat(document.getElementById('D1').value);
    const D2 = parseFloat(document.getElementById('D2').value);
    const L = parseFloat(document.getElementById('L').value);
    const R = parseFloat(document.getElementById('R').value);
    const timeTaken = parseFloat(document.getElementById('timeTaken').value);

    const errorMessage = document.getElementById('errorMessage');

    if (isNaN(D1) || isNaN(D2) || isNaN(L) || isNaN(R) || isNaN(timeTaken)) {
        errorMessage.textContent = "Ah!! You forgot to enter the values.";
        return;
    }

    errorMessage.textContent = "";

    const a1 = (Math.PI * Math.pow(D1, 2)) / 4.0;
    const a2 = (Math.PI * Math.pow(D2, 2)) / 4.0;
    const h = L - R;
    const hLoss = h * 12.6;
    const Qact = (1171.72 * 20) / timeTaken;
    const V1 = Qact / a1;
    const V2 = Qact / a2;
    const K = (hLoss * (2 * 9.81)) / Math.pow((V1 - V2), 2);

    const resultsDiv = document.getElementById('results');
    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML = 
    output.innerHTML = "<p><strong>Area of pipe a1:</strong></p><p class='result-label'>" + a1.toFixed(2) + " cm<span class='superscript'>2</span></p>";
    output.innerHTML += "<p><strong>Area of pipe a2:</strong></p><p class='result-label'>" + a2.toFixed(2) + " cm<span class='superscript'>2</span></p>";
    output.innerHTML += "<p><strong>h:</strong></p><p class='result-label'>" + h.toFixed(2) + " cm</p>";
    output.innerHTML += "<p><strong>hLoss:</strong></p><p class='result-label'>" + hLoss.toFixed(2) + " cm</p>";
    output.innerHTML += "<p><strong>Qact:</strong></p><p class='result-label'>" + Qact.toFixed(2) + " cm<span class='superscript'>3</span>/sec</p>";
    output.innerHTML += "<p><strong>V1:</strong></p><p class='result-label'>" + V1.toFixed(2) + " cm/sec</p>";
    output.innerHTML += "<p><strong>V2:</strong></p><p class='result-label'>" + V2.toFixed(2) + " cm/sec</p>";

    // Check if K is a valid number before displaying it
    if (!isNaN(K)) {
        output.innerHTML += "<p><strong>Sudden Contraction Coefficient (K):</strong> " + K.toFixed(6) + "</p>";
    } else {
        output.innerHTML += "<p><strong>Sudden Contraction Coefficient (K):</strong> Not a valid number</p>";
    }

    document.querySelector('.results-tab').classList.remove('hidden');
}
