var userInformation = {};

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Por favor, informe o nome de usuário e a senha.");
    return false;
  }

  // Armazenar as informações do usuário no objeto
  userInformation.username = username;
  userInformation.password = password;

  // Exibir as informações do usuário no console (isso é apenas para fins de demonstração)
  console.log("Informações do usuário:", userInformation);

  // Você pode enviar as informações do usuário para o servidor ou realizar outras ações aqui

  return true;
}
