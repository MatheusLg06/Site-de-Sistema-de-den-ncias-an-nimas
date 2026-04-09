// Função para alternar entre as abas de Envio e Consulta
function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Lógica de envio da denúncia
document.getElementById('denunciaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Gerar Protocolo Automático (Exercício 4)
    const protocolo = "DEN-" + Math.floor(Math.random() * 900000 + 100000);
    
    // Armazenar "fake" no localStorage para poder consultar depois (Exercício 5)
    localStorage.setItem(protocolo, "Em Análise");

    // Exibir resultado
    document.getElementById('protocoloGerado').innerText = protocolo;
    document.getElementById('resultado').classList.remove('hidden');
    this.reset(); // Limpa o formulário
    
    alert("Denúncia enviada com sucesso! Guarde seu protocolo.");
});

// Lógica de consulta de status (Exercício 5)
function consultarStatus() {
    const protocoloBusca = document.getElementById('inputProtocolo').value.trim();
    const txtStatus = document.getElementById('txtStatus');
    const resultDiv = document.getElementById('statusResult');

    if (protocoloBusca === "") {
        alert("Por favor, digite um protocolo.");
        return;
    }

    // Lista simulada de status
    const possiveisStatus = ["Denúncia Recebida", "Em Análise", "Encaminhada para Autoridade", "Concluída"];
    
    // Verifica se o protocolo existe no nosso "banco" (localStorage)
    const statusSalvo = localStorage.getItem(protocoloBusca);

    if (statusSalvo) {
        // Se existir, pega um status aleatório da lista para simular progresso
        const statusAleatorio = possiveisStatus[Math.floor(Math.random() * possiveisStatus.length)];
        txtStatus.innerText = statusAleatorio;
        resultDiv.classList.remove('hidden');
    } else {
        alert("Protocolo não encontrado. Verifique o número e tente novamente.");
        resultDiv.classList.add('hidden');
    }
}