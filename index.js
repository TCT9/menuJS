let MenuJS = () => {

    return {
        //array_strMenu: array de strings que formam um menu
        Menu: (array_strMenu) => {

            //imprimir o menu
            array_strMenu.forEach(element => {
                console.log(element);
            });

            return {
                //prompt para receber uma opção do menu. Após a impressão não deve pular uma linha
                Prompt: (str_prompt) => {
                    return {
                        //array de keys
                        Keys: (array_strKeys) => {
                            return {
                                //key para sair do menu
                                KeyExit: (str_keyExit) => {
                                    return {
                                        InvalidKeyCase: (str_Alerta_key_Invalido) => {
                                            return {
                                                CallBackFuncs: (array_funcs) => {

                                                    //lê a entrada do usuário
                                                    let scanf = require('scanf');

                                                    //Exibe o prompt até que seja selecionada a opção de sair
                                                    function recursive() {
                        
                                                        process.stdout.write(str_prompt);
                                                        let opcao = scanf("%d");
                                                        let opcao_eh_invalida = true;
                                    
                                                        for(let i = 0; i < array_strKeys.length; i++){
                                                            if (opcao === i+1){
                                                                array_funcs[i]();
                                                                opcao_eh_invalida = false;
                                                                break;
                                                            }
                                                        }
                            
                                                        if (opcao_eh_invalida === true){
                                                            console.log(str_Alerta_key_Invalido);
                                                        }
                                                        
                                                        if (opcao !== parseInt(str_keyExit)) {
                                                            recursive();
                                                        }
                            
                                                    }
                        
                                                    recursive();
                                                }
                                            };
                                        }
                                    };
                                }
                            };
                        }
                    };
                }
            };
        }
    };
}

module.exports = MenuJS;