const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => { 
  const cepInput = document.getElementById("cep").value.trim();

  resultado.hidden = true;
  resultado.classList.remove("error");

  if (!cepInput) {
    mostrarErro("Informe um CEP válido.");
    return;
  }

  const cep = cepInput.replace(/\D/g, "");
  const cepNumero = Number(cep);

  const zonaEncontrada = DATA_ZONAS.find(z => 
    cepNumero >= z.cepInicio && 
    cepNumero <= z.cepFim
  );

  if (!zonaEncontrada) {
    mostrarErro("Zona não encontrada para esse CEP.");
  } else {
    resultado.innerHTML = `CEP: ${cepInput} <br> Zona de transporte: ${zonaEncontrada.zona}`;    resultado.hidden = false;
  }
});

function mostrarErro(msg) {
  resultado.textContent = msg;
  resultado.classList.add("error");
  resultado.hidden = false;
}