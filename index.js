
let new_Menu = ({menu, prompt, function_default, key_sair, function_sair, array_keys, array_functions}) => {

    //Isolando nossas variáveis e métodos para serem privados.

        this.menu = menu;           //array de strings com os itens do menu
        this.prompt = prompt;       //texto do prompt. Aguarda a digitação de uma opção
        this.function_default = function_default; //função que executa uma ação padrão, caso nenhum opção válida seja selecionada
        this.key_sair = key_sair;   //chave que informar que o menu deve ser encerrado
        this.function_sair = function_sair; //função que executa a ação de sair do menu
        this.array_keys = array_keys;   //array de valores representando um chave de opção no menu
        this.array_functions = array_functions; //array de funções que serão chamadas para cada opção

        //imprime um array de menus no terminal
        this.menu.forEach(element => {
            console.log(element);
        });

        const modReadLine = require('readline');
        const objPrompt = modReadLine.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true,
            prompt: this.prompt
        });
        
        objPrompt.prompt();  //exibe o prompt

        //observa o evento 'on', que ocorre após o usuário teclar 'enter' no prompt 
        objPrompt.on('line', (linha) => {

            let resposta = linha.trim(); //retirar os espaços extras
            let opcao_eh_valida = false;

            for (let i = 0; i < this.array_keys.length; i++){

                if (resposta === this.array_keys[i]){
                    opcao_eh_valida = true;
                    this.array_functions[i]();
                }

                if (opcao_eh_valida) {break;}   //se encontrar uma alternativa válida, sair do loop
                
            }

            if (resposta === this.key_sair){
                this.function_sair();
                objPrompt.close();      //fechar o objeto

            }else{

                if (opcao_eh_valida == false) {this.function_default();}
                objPrompt.prompt();         //exibr novamente o prompt novamente
            }

        });
    
}

 module.exports = new_Menu;