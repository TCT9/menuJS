
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

    let MenuJS = require('menujs');

    let objMenu = MenuJS()
    .Menu([
        "1 - Salário",
        "2 - Imprima salário",
        "3 - Percentual de desconto",
        "4 - Imprima o percentual de desconto",
        "5 - Imprima salário com desconto",
        "6 - Sair\n"
    ])
    .Prompt("Selecione uma opção entre 1 e 6: ")
    .Keys(["1", "2", "3", "4", "5", "6"])
    .KeyExit("6")
    .InvalidKeyCase("Opção inválida! Selecione uma opção entre 1 e 6: ")
    .CallBackFuncs(
        Array_Funcoes()
    );

    function Array_Funcoes() {

        salario = 0;
        percentual_Desconto = 0;
    
        let scanf = require('scanf');

        function Salario() {
            process.stdout.write("\tInforme o Salário: ");
            salario = scanf("%f");

            if (salario <= 0){
                console.log("\tSalário inválido. Informe um valor maior do que zero.");
                Salario();
            }
        }

        function ImprimaSalario() {
            console.log("\tSalario: " + salario);
        }

        function PercentualDesconto() {
            process.stdout.write("\tInforme o percentual de desconto: ");
            percentual_Desconto = scanf("%f");
        
            if (percentual_Desconto < 0 || percentual_Desconto > 1){
                console.log("\tPercentual de desconto inválido. Informe um valor entre 0 e 1");
                PercentualDesconto();
            }
        }

        function ImprimaPercentualDesconto() {
            console.log("\tPercentual de desconto: " + percentual_Desconto);
        }

        function SalarioComDesconto() {
            console.log("\tSalário com desconto: " + (1 - percentual_Desconto)*salario);
        }

        function Sair() {
            console.log("\tSaindo...");
        }

        return [Salario, ImprimaSalario, PercentualDesconto, ImprimaPercentualDesconto, SalarioComDesconto, Sair];

    }
