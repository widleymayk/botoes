function acao1() {
    document.getElementById("saída").innerHTML = `
        <p>Digite um número para verificar se é Par ou Ímpar:</p>
        <input type="number" id="numero" placeholder="Digite um número">
        <button onclick="verificarNumero()">Verificar</button>
        <div id="resultado"></div>
    `;
}

function verificarNumero() {
    const numero = parseInt(document.getElementById("numero").value);
    document.getElementById("resultado").innerHTML = 
        isNaN(numero) ? `<p>Por favor, insira um número válido.</p>` :
        `<p>O número ${numero} é ${numero % 2 === 0 ? "Par" : "Ímpar"}.</p>`;
}
