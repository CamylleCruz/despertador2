    //Definindo e atualizando a hora atual
    function atualizarHoraAtual() {
    //exibir a data atual
    const dataAtual = new Date();
    // está usando a hora do relógio do computador para defenir a do despertador
    const hora = dataAtual.getHours().toString().padStart(2, '0');
    // está usando os minutos do relógio do computador para defenir a do despertador
    const minuto = dataAtual.getMinutes().toString().padStart(2, '0');
    //definindo 'horaAtual' como uma variável
    const horaAtualElement = document.getElementById('horaAtual');
    //está juntando os minutos com as horas
    horaAtualElement.textContent = `Hora Atual: ${hora}:${minuto}`;

  }
  //criando a função despertador
  function despertador() {
    //definindo 'horaDespertar' como uma variável
    const horaDespertarInput = document.getElementById('horaDespertar');
    //definindo 'definirDespertador' como uma variável
    const definirDespertadorButton = document.getElementById('definirDespertador');
    //definindo 'mensagem' como uma variável
    const mensagemElement = document.getElementById('mensagem');
    
    // está definindo que a forma de validar é com o click
    definirDespertadorButton.addEventListener('click', () => {
      //horaDespertar é igual a o valor de horaDespertarInput
      const horaDespertar = horaDespertarInput.value;
      // quando ahora e os minutos estiverem certos irá despertar
      const [hora, minuto] = horaDespertar.split(':');
  
      //setInterval é uma função que serve para agendar uma execução
        //declarando valor à variável
        const dataAtual = new Date();
        //declarando valor à variável
        const horaAtual = dataAtual.getHours();
        //declarando valor à variável
        const minutoAtual = dataAtual.getMinutes();
  
        if (parseInt(hora) === horaAtual && parseInt(minuto) === minutoAtual) {
          console.log("Hora de acordar! ⏰");
          
          //mensagem que aparece na hora que atingir a hora declarada
          mensagemElement.textContent = "Hora de acordar!";
          //cor da fonte
          mensagemElement.style.color = "red";
          //cor que ficará o fundo da tela quando o despertador tocar
          document.body.style.backgroundColor = "#ff0084";
          
          //som que irá tocar 
          const audio = new Audio('alarme.mp3');
          //play no audio
          audio.play();
          //senao
        } else {
          // se não chegar na hora, não aparecerá nenhuma mensagem
          mensagemElement.textContent = "";
          // o fundo ficará preto
          document.body.style.backgroundColor = "black";
        }
      }, 1000);
    };
    //defindo a variável 'atualizarHoraAtual' como uma variável agendada para execução
    setInterval(atualizarHoraAtual, 1000);
  
  document.addEventListener('DOMContentLoaded', () => {
    despertador();
  });
  
  