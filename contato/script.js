console.log(emailjs); // Deve mostrar o objeto `emailjs` no console

// Iniciar o SDK do EmailJS com sua chave pública
(function() {
 emailjs.init("SQbay_KhicBk4ORAp"); // Substitua pelo seu USER_ID, encontrado no painel do EmailJS
})();

// Função para enviar o e-mail
function sendEmail() {
 const formData = {
   from_name: document.getElementById('name').value,
   from_email: document.getElementById('email').value,
   message: document.getElementById('message').value
 };

 emailjs.send("service_l4jbnda", "template_dzr5h0r", formData)
   .then(function(response) {
     console.log('Sucesso:', response);
     alert('Mensagem enviada com sucesso!');
   }, function(error) {
     console.log('Erro:', error);
     alert('Ocorreu um erro ao enviar a mensagem.');
   });
}

// Evento de envio do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
 event.preventDefault(); // Evitar o envio tradicional
 sendEmail(); // Chama a função de envio
});
