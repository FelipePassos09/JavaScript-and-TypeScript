<div>
<h1 style="font-size: 35px; font-weight: bold; color: purple">Curso JavaScript e TypeScript do básico ao avançado</h1>
<h2 style="font-size: 25px; font-weight: regular; color: purple">Prof.: Luis Otávio Miranda</h2>
<h4 style="font-size: 25px; font-weight: regular; color: purple"><a href="https://github.com/FelipePassos09/curso-js-Otavio_Miranda">Link para o Repo do prof.</a></h4>
</div>
<br />
<h2>Aula 1 - Instalando VsCode e Node no Windows</h2>
<h3></h3>
<p></p>
<h2>Aula 2 - Instalando o VsCode e o Node no Ubuntu</h2>
<h3>Via Script</h3>
<p>Será utilizado o script conforme fornecido no anexo <a href="./Docs/instalacao-ubuntu.txt">Instalação Ubuntu</a>, é aconselhavel alterar a extensão do arquivo para .sh a fim de facilitar a instalação. Desta forma basta abrir o terminal na pasta onde está o arquivo e execute com sudo bash instalacao-ubuntu.txt (ou sh caso tenha sido renomeado)</p>
<h2>Manual</h2>
<p>Poderá ser realizado a instalação manual, conforme a sequencia de aplicações:
    <li>Atualize o sistema e todas as aplicações com  sudo apt update && sudo apt upgrade</li>
    <li>Instale o node com sudo apt-get install node</li>
    <li>Instale o navegador (Pode ser o Mozilla, Chrome, Opera ou qualquer outro navegador moderno.)</li>
    <li>Instale o seu editor de código, pode ser o VsCode ou </li>
</p>
<h2>Aula 3 - console.log</h2>
<p>É a instrução dedicada para 'imprimir' dados na tela. Basta apenas abrir um novo arquivo .js ou o console do navegador, inserir a entrada console.log('Texto')e, ao executar o arquivo, o valor será impresso na tela.
<br /><br />
Por padrão, o javascript não obriga o uso de ';' ao final dos códigos.
<br /><br />
Assim como na maioria das outras linguagens, para serdeclarada uma string, a mesma deverá ser inserida entre aspas (simples ou duplas) para que a linguagem entenda que estamos lidando com uma string e não uma palavra reservada. Caso sejam números não há essa necessidade.
<br /><br />
Ao ser inserido uma sequencia de console.log, cada instrução será impressa em uma linha, porém se inserirmos na mesma instrução dois ou mais argumentos, todos os argumentos serão impressos na mesma linha.
<br /><br />
Assim como na maioria das linguagens de programação, é utilizado como separador padrão a ',' para separar argumentos de uma instrução e '.' para declarar módulos ou subfunções em uma isntrução, exemplos:<br />Módulos de uma função: console.log(arguments)<br />argumentos de isntrução: console.log(1234, 5678.16, 'Meu nome é Felipe')
<br /><br />
Diferente de outras linguagens, o javascript permite o uso de aspas simples, duplas e crases para identificar strings, isso se deve á possibilidade de serem inseridas, dentro da string, outros caracteres do conjunto como:<br />Podemos inserir aspas simples caso identifiquemos a string por aspas duplas ("Meu nome é Felipe, o 'Valoroso'")<br />Podemos usar aspas duplas casos identifiquemos a string por aspas simples ('Meu nome é Felipe, o "Valoroso"')<br />Por fim podemos inserir uma combinação das duas se identificarmos a string por crase, porém é pouco usual e desconfortável para o desenvolvimento: (`"Meu nome" é Felipe, o 'Valoroso'`)
<h3>Tipos Primitivos</h3>
<li>String
    <ul>É todo texto alfanumérico, contendo ou não caracteres especiais.</ul>
</li>
<li>Number
    <ul>Diferente de outras linguagens, o JavaScript não distingue integer de double, neste caso ambos os tipos de número são tratados como number.</ul>
</li>
</p>
<h2>Comentando</h2>
<p>Para comentar no js basta anteceder a mensagem do comentário com duas barras '//', desse modo a engine do JS irá ignorar os textos inseridos como comentários. Caso seja necessário a inclusão de um código longo ou quebrado em diversas linhas basta iserí-lo entre barras e asteríscos, desta maneira:<br />/* --Texto, paragrafo, etc-- */<br />Por fim, se pretendemos remover um trecho de código podemos simplesmente comentá-lo usando barras duplas para linhas individuais ou barra+asterisco para blocos de código.</p>
<h2>Navegador x Node</h2>
<p>Para implementarmos um script js em um html basta referencia-lo dentro do HTML, seja diretamente dentro do HTML quanto em um arquivo separado usando o argumento src='' da tag "script". Porém é usual o uso em um arquivo á parte, sendo fortemente recomendado não utilizar js dentro do html diretamente e sempre a partir de um arquivo à parte, mais especificamente em uma pasta que possua os arquivos .js dentro dela.</p>

<h3>Entrada ALERT</h3>
<p>Para para exibirmos um alerta em tela usamos a classe Window, porém esta não existe para o Node, apenas para o navegador. Neste caso só podemos usar ela via navegador. Em paralelo, o módulo alert é uma função blocking, neste caso somente após ser dado o ok nesser alerta que o próximo comando será realizado.</p>

<h2>Variáveis com LET</h2>
<p>Em JavaScript utilizamos variaveis para armazenarmos informações na memória da máquina, pra tanto podemos usar duas maneiras de declarar variaveis, uma é 'let' e outra 'var'.
<p>Podemos tanto declarar uma variável sem passar nenhum valor desse modo a variável recebe como valor 'undefined'. Assim como também podemos declarar uma variável passando algum valor para ela, porém caso precisemos podemos alterar o valor passado declarado na variável em dievrsos momentos após a declaração da variável, porém não podemos declarar uma variável duas vezes no mesmo escopo (nesse caso nos referimos à declaração de variável sem valor).</p>
<p>Todas as variáveis precisam ter nomes significativos assim como não podem ser nomeadas utilizando alguma das palavras reservadas da linguagem. Também não podemos usar números para começar uma variável, assim como não podem conter espaços ou traços(hífen). Para tanto, caso precisemos declarar nomes compostos é recomendado utilizar o padrão de camelCase, começando a variável com letra minúscula e as demais palavras começando com letras maiúsculas.</p>
<p>Importante salientar que a linguagem é case-sensitive, ou seja, irá considerar letras maiúsculas e minúsculas em sua sintaxe.</p>
<h3>Constantes com VAR</h3>
<p>Também podemos declarar variáveis com 'var' porém essa notação não é muito recomendada pois essa declaração não é mais utilizada.</p>
</p>
<h2>Declaranndo constantes com CONST</h2>
<p>
<p>Segue as mesmas regras básicas das declarações com 'let', porém para ela temos uma característica a mais que consite em ela não poder ser declarada sem ser incializada, ou seja, deve-se sempre atribuir um valor para essa constante.</p>
<p>Assim como o nome diz, uma constante não pode ser alterada no decorrer da exeucução do código. Nesse caso sendo fundamentais para evitar que esse valor seja alterado e, desta maneira, imapctar em bugs ou quebras no comportamento do código criado.</p>
</p>
<h2>Função typeof</h2>
<p>Quando utilizada essa função podemos retornar o tipo de uma variável em tela, dessa maneira podemos controlar o tipo de uma variável para podermos evitar eventuais problemas no código.
<p>Uma curiosidade importante, se contenarmos uma string com um numero a saída sempre será uma string.</p>
</p>
<h2>Concatenação de strings</h2>
<p>Para concatenarmos uma string podemos usar a vírgula',' ou o mais '+'. No uso da virgula o js irá inserir um espaço ao final de cada valor para separar essas variaveis inseridas e não irá alterar o tipo da variável inserida caso seja número, no caso do mais não será acrescido nenhum valor e esta instrução funciona como união, nesse caso transformando em string os números inseridos.
<p>O comando \n é utilizado caso quisermos pular uma linha em nosso texto, dessa maneira evitando um bloco de vários console.log() na impressão.</p>
<h3>Template Strings</h3>
<p>Outra maneira de ser concatenada uma strin a partir de variáveis é com o uso de template strings. Nessa maneira usamos a crase '`' para abrir e fechar a string que iremos montar e, então, usamos o conjunto cifrão+chaves ${} para apontar a variável que sera inserida nesta posição. Dessa maneira conseguimos criar uma frase dinâmica a parti de um conjunto de váriaveis predecessoras.</p>
</p>
<h2>Diferenças entre VAR e LET</h2>
<p>Há uma gama de diferenças entre var e let, iremos listar algumas:
    <li>Redeclaração de variáveis:
        <ul>Utilizando o var para declarar uma variável é possivel ser redeclarada a variável. Algo que não é possivel utilizando-se o let.</ul>        
    </li>
    <li>Modernização do código
        <ul>Com a chegada do ECMA SCRIPT 6 a instrução VAR foi mantida, porém uma nova instrução foi implementada em seu lugar, no caso a instrução LET, muito mais segura e com maiores funções de controle de variáveis como a sua declaração que não obriga a atribuição de um valor, sua segurança por impedir que uma variável possa ser declarada mais de uma vez, e sua maleabilidade em poder ser aplicada em situações e escopos distintos.</ul>
    </li>
</p>
<h1>Tipos Primitivos</h1>
<p>No JavaScript temos os seguintes tipos de dados primitivos:
    <li>String
        <ul>Consiste de qualquer conjunto de caracteres (numéricos, letra ou especiais) que sejam tratados como texto. Sua declaração deve ser acompanhada dos delimitadores aspas (tanto simples quanto duplas) e crase</ul>
    </li>
    <li>Number
        <ul>Em JavaScript não temos distinção entre integer (inteiros ou int) e double (decimais ou float). Neste caso qualquer número que seja inserido sem nenhum delimitador de string será tratado como number e seu tipo identificado a partir da formatação uma vez que o JS é uma linguagem de tipagem dinâmica.</ul>
    </li>
    <li>Boolean
        <ul>São os valores booleanos ou lógicos, estes são apenas <a style="color:purple; font-weight: bold">true</a> ou <a style="color:purple; font-weight: bold">false</a> e não podem possuir delimitadores pois são tratados como palavras reservadas da linguagem.</ul>
    </li>
    <li>Undefined
        <ul>Um tipo de dado único que representa um valor indefinido, ou seja, um valor que ainda não foi indicado, seja para variável ou objeto. Neste caso ela não aponta para nenhul local na memória.</ul>
    </li>
    <li>Null
        <ul>É dito de um valor vazio, é útil e usual quando se há necessidade de iniciar uma variável ou indicar um retorno onde não há valor de modo a evitar erros provenientes do uso de Undefined. Tal qual as variáveis booleanas, o valor null é uma palavra reservada da linguagem.</ul>
    </li>
    <li>Symbol
        <ul></ul>
    </li>
</p>
<h2>Operadores Aritiméticos, de Atribuição e Incremento</h2>
<p>
    <h3>Operadores aritiméticos</h3>
        <li>+
            <ul>Adição ou concatenação. Caso ambos os valores sejam number ele realiza a operação de soma, caso, ao menos, um dos dados seja string ele realiza a concatenação dos valores unindo-os em uma string.</ul>
        </li>
        <li>-, / , *
            <ul>Estes realizam as demais operações básicas, respectivamente subtração, divisão e multiplicação.</ul>
        </li>
        <li>**
            <ul>Este realiza a potenciação do numero referencia, ou seja eleva o primeiro número à x potencia, sendo esta o número seguinte ao **.</ul>
        </li>
        <li>%
            <ul>Retorna o resto da divisão, ou seja, caso a divisão não seja um inteiro ele retorna o resto dessa operação.</ul>
        </li>
    <h3>Operadores de Atribuição</h3>
        <li>=
            <ul>O sinal de igual é utilizado, quando de forma individual após uma variável, define a atribuição de valor à essa variável ou objeto.</ul>
        </li>
    <h3>Operadores de Incremento/Decremento</h3>
    <li>++
        <ul>Realiza o incremento/decremento do valor na variável, porém somente é aplicavel em variáveis, constantes não podem ser incrementadas. Pode ser utilizado tanto após quanto antes do nome da variável a ser incrementada. Pode ser precedendo ou seguindo à variável onde, o posicionamento define a ordem na qual o incremento será realizado:
            <li>Antecedendo a Variável: irá realizar a operação antes da chamada da variável, sendo neste caso a próxima ocorrência da variável o valor já operado.</li>
            <li>Seguindo à variável: irá operar a variável, porém somente na próxima ocorrencia dela o valor alterado será apresentado.</li>
        </ul>
    </li>
    <li>+=, *=, -=, /=, **=, etc..
        <ul>Este incremento também pode ser lido como uma atribuição pois define uma atualização do valor à esquerda do operador, em função da operação indicada, com o valor à direita. Ou seja, ele incrementa o valor em função de outro valor.</ul>
    </li>
    <h3>Erros Nan</h3>
    <p>O erro NaN (Not a Number) diz de uma operação aritmética que envolva um número e uma string. Por padrão ele sempre tentará realizar a operação desejada traduzindo ou convertendo o valor da string em number, porém somente se o valor em questão seja, estruturalmente um número (não contenha caracteres não númericos).</p>
</p>
<h2>Convertendo String em Number</h2>
    <li>parseInt
        <ul>Como o nome sugere, transforma uma string em um inteiro, desconsiderando as casas decimais</ul>
    </li>
    <li>parseFloat
        <ul>Análogo à anterior, porém converte em double ou float, ou seja, considera as casas decimais.</ul>
    </li>
    <li>Number
        <ul>Este converte em número e identifica qual o tipo do valor contido na string.</ul>
    </li>
<h2>Escape</h2>
<p>No javascipt usamos a barra invertida (\) como caractere para definir o escape, ou seja, mostrar ou alterar o comportamento de um caractere:
    <table>
        <tr>
            <td>\\</td>
            <td>Permite retornar a barra-invertida.</td>
        </tr>
        <tr>
            <td>\" , \', \`</td>
            <td>Permite retornar aspas (simples ou duplas) ou crase, mesmo se os delimitadores da string não forem compativeis.</td>
        </tr>
    </table>
</p>
<h2>Manipulando / Tratando strings</h2>
<p>Temos um conjunto de métodos que podem ser empregados para tratar, editar, analisar ou manipular strings:
    <h3>Fatiamento</h3>
    <p>.slice() retorna um uma nova string conforme os parametros informados, ou seja, a partir do índice de lista que for passado na função.<br />Ex. umaString.slice(5) -> retornará o conteúdo da string a partir da 5 posição.</p>
    <h3>Divisão (por caractere)</h3>
    <p>.split() retornar um array contendo as partes da string recortadas conforme o parâmetro informado, neste caso o parâmetro deve ser um caractere contido na string. <br />Ex. Ex. umaString.slice('r') -> retornará um array com strings de acordo com os 'r' dentro da string.<br />Essa função também aceita como parâmetro adicional onde é possivel estabelecer quantos itens serão retornados dentro do array, desprezando os demais.</p>
    <h3>Índice</h3>
    <p>.indexOf() retorna qual a posição do caractere inserido como parâmetro da função, podem ser inseridos, também, conjuntos de caracteres, neste caso retornando a posição inicial do conjunto.</p>
    <h3>Substituição</h3>
    <p>.replace() retorna uma nova string contendo o valor alterado conforme os parâmetros passados na função.<br />Ex. umaString.replace('r', '#') -> Retornara uma string nova com todos os 'r' substituídos por '#'.</p>
</p>
<h2>Manipulando Números</h2>
<p>
    <li>.toFixed()
        <ul>Este método formata as casas decimais de um número.</ul>
    </li>
    <li>.toString()
        <ul>Converte o valor numérico para string.</ul>
    </li>
    <li>Number.isInteger()
        <li>Retorna um boolean com a validação se o valor é ou não um inteiro.</li>
    </li>
    <li>Number.isNaN()
        <ul>Retorna um boolean conforme o valor passado na função for ou não invalido.</ul>
    </li>
</p>