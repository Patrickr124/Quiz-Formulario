document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("pergunta1").value;
    var idade = document.getElementById("pergunta2").value;
    var categoria = document.querySelector('input[name="categoria"]:checked');
    var ides = document.querySelectorAll('input[name="ide_favorita"]:checked');

    var erros = [];

    if (nome === "") {
      erros.push("Por favor, insira seu nome.");
    }

    if (idade === "" || idade < 7 || idade > 100) {
      erros.push("Por favor, insira uma idade válida entre 7 e 100 anos.");
    }

    if (!categoria) {
      erros.push("Por favor, selecione uma categoria.");
    }

    if (ides.length === 0) {
      erros.push("Por favor, selecione pelo menos uma IDE favorita.");
    }

    if (erros.length > 0) {
      alert(erros.join("\n"));
    } else {
      var resultado = processarRespostas(nome, idade, categoria, ides);
      exibirResultado(resultado);
    }
  });

function processarRespostas(nome, idade, categoria, ides) {
  return "Muito bem! vc respondeu tudo corretamente!";
}

function exibirResultado(resultado) {
  alert(resultado);
}
