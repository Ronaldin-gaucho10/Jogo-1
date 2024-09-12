// Exibe uma mensagem de boas-vindas ao usuário em um pop-up
alert('Bem-Vindo ao SiriemaSecret, Adivinhe o número e ganhe até 1 milhão de reais!!!!!!');

let numerosecreto = Math.floor(Math.random() * 100) + 1;
let guess;
let tentativa = 1;

// Limita o número de tentativas a 8
for (; tentativa <= 8;) {

    // Solicita ao usuário que digite um número de 1 a 100 e armazena o valor em 'guess'
    guess = prompt("Digite um número de 1 a 100");

    // Converte o input para um número inteiro
    guess = parseInt(guess, 10);

    // Verifica se o palpite está fora do intervalo permitido
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert("Por favor, digite um número válido entre 1 e 100.");
        continue;  // Pula para a próxima iteração sem contar como tentativa
    }

    // Verifica se o palpite do usuário é igual ao número secreto
    if (numerosecreto == guess) {
        let word_tentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        alert(`Parabéns! Você acertou o número secreto! Você acertou em ${tentativa} ${word_tentativa}.`);
        break;
    } 
    else {
        // Se o número secreto for menor que o palpite fornecido
        if (numerosecreto < guess) {
            alert(`Dick: O número secreto é menor. Número escolhido anteriormente: ${guess}`);
        } 
        // Se o número secreto for maior que o palpite fornecido
        else {
            alert(`Dick: O número secreto é maior. Número escolhido anteriormente: ${guess}`);
        }
        tentativa++;  // Só incrementa a tentativa se o número for válido
    }

    // Se for a última tentativa, avisa que o jogo terminou
    if (tentativa > 8) {
        alert(`Fim do jogo! Você excedeu o número de tentativas. O número correto era: ${numerosecreto}`);
    }
}
