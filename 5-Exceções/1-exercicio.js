var valor1 = prompt("Digite um número!");
valor1 = parseFloat(valor1);
let mensagem = "";

function calcular(sinal) {
  var valor2 = prompt("Digite outro número!");
  valor2 = parseFloat(valor2);
  switch (sinal) {
    case "+":
      mensagem = alert(valor1 + valor2);
      return mensagem;

    case "-":
      mensagem = alert(valor1 - valor2);
      return mensagem;

    case "*":
      mensagem = alert(valor1 * valor2);
      return mensagem;

    case "/":
      mensagem = alert(valor1 / valor2);
      return mensagem;
  }
}
