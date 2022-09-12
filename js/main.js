
//alert('Olá.')
console.log(document);

//var nav = document.querySelector('nav')
var formulario = document.querySelector('form')
var paragrafo = document.createElement('p')
paragrafo.style.textAlign = 'center'
paragrafo.style.fontSize = '18px'

//código emailjs


formulario.addEventListener('submit', function(event){
   event.preventDefault()
   var dados = new FormData(formulario)
   var nome = dados.get('nome')
   var sobrenome = dados.get('sobrenome')
   var email = dados.get('email')
   var cidade = dados.get('cidade')

   console.log(nome, email, sobrenome, cidade);

   var templateParams = {
      name: nome,
      sobrenome: sobrenome,
      cidade: cidade,
      email: email,
  }
   
  emailjs.send('service_y6sxr8w', 'template_re17d7u', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });


   paragrafo.innerHTML = alert(`
   ${nome}, sua mensagem foi registrada com sucesso!
   `)
   document.getElementById("meuFormulario").reset(); 
});