document.getElementById("ficha-reserva").onsubmit = function(event) {
    event.preventDefault();

    let placaVeiculo = document.getElementById("placa-veiculo").value;
    let nomeProprietario = document.getElementById("nome-proprietario").value;
    let numeroApartamento = document.getElementById("numero-apartamento").value;
    let blocoApartamento = document.getElementById("bloco-apartamento").value;
    let modeloVeiculo = document.getElementById("modelo-veiculo").value;
    let corVeiculo = document.getElementById("cor-veiculo").value;
    let numeroVagaEstacionamento = document.getElementById("numero-vaga-estacionamento").value;

    console.log("Placa do Veículo:", placaVeiculo);
    console.log("Nome do Proprietário:", nomeProprietario);
    console.log("Número do Apartamento:", numeroApartamento);
    console.log("Bloco do Apartamento:", blocoApartamento);
    console.log("Modelo do Veículo:", modeloVeiculo);
    console.log("Cor do Veículo:", corVeiculo);
    console.log("Número da Vaga de Estacionamento:", numeroVagaEstacionamento);

    alert("Cadastro realizado com sucesso!");

    this.reset();
};

    var button = document.getElementById('view-list');
    button.addEventListener('click', function() {
    window.location.href = 'listar.html';
  });





