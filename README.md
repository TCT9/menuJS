
# MenuJS

Um menu simples para terminal em Javascript para as aulas de Lógica e Algoritmos I.

## Exemplo de uso - Linux

1) No terminal, crie um pasta chamada "ProjMenu".

    `tct9@tct9-Aspire-A515-51G:~$ mkdir ProjMenu`

2) Depois entre na pasta criada

    `tct9@tct9Aspire-A515-51G:$ cd ProjMenu`

    `tct9@tct9-Aspire-A515-51G:\ProjMenu$`

3) Vamos iniciar um novo projeto usando o comando `npm init` 

    `tct9@tct9-Aspire-A515-51G:~\ProjMenu$ npm init`

Logo em seguida serão exibidas estas mensagens: 

    This utility will walk you through creating a package.json file.  
    It only covers the most common items, and tries to guess sensible defaults.  
    See 'npm help init'  for definitive documentation on these fields and exactly what  they do.    
    Use 'npm install <pkg>'  afterwards to install a package  and save it as a  dependency in the package.json file.  
    
    Press ^C at any time to quit. package name: (projmenu)  

Apenas confirme tudo com `ENTER`, pois depois você poderá alterar o aquivo que será criado.  
No final digite "*yes*" para confirmar ou `ENTER`.  

4) Agora clone o repositório  https://github.com/TCT9/menuJS  você precisa copiar esta URL.  De volta ao terminal, faça:  

    `tct9@tct9-Aspire-A515-51G:~\ProjMenu$ npm install --save  https://github.com/TCT9/menuJS`

Após isso a dependência será baixada e estará pronta para ser usada em nosso projeto.  

5) Por fim, vamos inicializar o VS Code pelo terminal.  

    `tct9@tct9-Aspire-A515-51G:~\ProjMenu$ code .`

O VS Code será inicializado na pasta ProjMenu. Agora crie um arquivo chamado "exemplo.js" ṕara fazer um teste.

    const Menu = require('menujs');

    const objMenu = new Menu(opcoes());

    function opcoes() {
    
        return {
            menu : [
                "1 - Entrada de dados",
                "2 - Saída de dados",
                "3 - Imprimir",
                "4 - Sair\n"
            ],

            prompt: "Escolha uma opcao entre 1 e 4: ", 

            function_default: function function_default(){
                console.log("Selecione uma opção válida entre 1 e 4");
            },

            key_sair: "4",

            function_sair: function function_sair(){
                console.log("Saindo...");
            },

            array_keys: ["1", "2", "3"],

            array_functions: [

                function(){
                    console.log("Opcao 1 selecionada");
                },
        
                function(){
                    console.log("Opcao 2 selecionada");
                },
        
                function(){
                    console.log("Opcao 3 selecionada");
                }
            ]
        };

    }


