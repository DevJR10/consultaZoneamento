const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", async () => {
  const cepInput = document.getElementById("cep").value.trim();

  resultado.hidden = true;
  resultado.classList.remove("error");

  if (!cepInput) {
    mostrarErro("Informe um CEP válido.");
    return;
  }

  // Remove qualquer caractere não numérico (ex: 00000-000)
  const cep = cepInput.replace(/\D/g, "");

  try {
    const response = await fetch(
      `http://localhost:3000/zona?cep=${cep}`
    );

    const data = await response.json();

    if (!response.ok) {
      mostrarErro(data.erro || "Erro na consulta.");
      return;
    }

    resultado.textContent = `Zona de transporte: ${data.zona}`;
    resultado.hidden = false;

  } catch (error) {
    mostrarErro("Não foi possível conectar à API.");
  }
});

function mostrarErro(msg) {
  resultado.textContent = msg;
  resultado.classList.add("error");
  resultado.hidden = false;
}
