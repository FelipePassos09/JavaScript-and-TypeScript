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
<h1>Objeto Window</h1>
<h2>.alert</h2>
<p>O método alert lança uma caixa de texto com uma mensagem e pausa a execução do script no frontend. Este método não possui nenhum retorno (undefined).</p>
<h2>.confirm</h2>
<p>Lança uma caixa pedindo uma confirmação, este caso retorna um valor boolean (true ou false) de acordo com a opção selecionada.</p>
<h2>.prompt</h2>
<p>Da mesma forma que as anteriores, este método também lança uma mensagem, porém esta possui uma caixa de texto onde podemso inserir algum valor, neste caso ela retornará o valor inserido na janela.</p>
<h1>Arrays [Listas]</h1>
<p>Arrays são listas, onde os valores são alocados dinamicamente a partir de um índice, via de regra listas podem receber quaisquer valores porém é usual manter um padrão dos dos valores alocados para facilitar o manejo e manutenção do código. em uma lista tempos uma sequência de valores que possuem um índice cada, iniciando por 0 e crescendo à n. Nesse caso á mais simples se trabalhar com listas pois, com elas, podemos alocar e retornar valroes mais facilmente que strings.
<h2>Objeto List</h2>
<p>Uma lista consiste, na prática, de um objeto e, por consequência, possui métodos dedicados para o tratamento de seus atributos:</p>
<h3>Adicionando valores</h3>
<h4>Adicionando valores ao final da lista (.push)</h4>
<p>Para adicionarmos um ou mais vaores ao final da lista podemos usar tanto o método dedicado(.push) quanto atribuirmos o último valor explicitamente com a função lenght(nome_da_lista) dentro dos colchetes, desse modo sempre retornaremos o valor final da lista. Entretanto o método push além de mais elegante é mais funcional pois permite algumas outras interações mais completas com o array. Neste caso ele também retorna o novo comprimento da lista após a alteração.</p>
<h4>Inserindo valores no inicio da lista (.unshift)</h4>
<p>Assim como o .push, o método .unshift também nos permite inserir valores na lista, porém neste caso no ínicio da mesma, este método é importante pois automaticamente desloca os demais valores para as respectivas novas posições, preservando os mesmos.</p>
<h3>Excluindo valores</h3>
<h4>Excluindo a última posição (.pop)</h4>
<p>Assim como podemos incluir um valor, também podemos excluir valores, neste caso o método .pop permite remover a última posição do array, tanto o índice quando o valor nele contido. Ele, no caso, retorna o valor removido da lista.</p>
<h4>Excluindo a primeira posição (.shift)</h4>
<p>Assim como o método anterior, ele também exclui uma posição, porém neste caso a primeira, e retorna, também, o valor removido. Assim como o .unshift, este método reindexa a lista atribuindo os valores restantes para as novas posições.</p>
<h4>Excluindo um valor (.delete)</h4>
<p>Apesar de pouco usado, podemos usar também o .delete. Ele, diferente dos métodos anteriores, remoev apenas o valor contido na posição, preservando a mesma. Nesse caso a lista permanece contendo o mesmo comprimento, porém se tentarmos recuperar o valor da posição deletada retornaremos um erro. O uso de .delete é pouco indicado pois torna o array esparso, ou seja, com buracos em sua indexação pois ainda haverão os índices mas não haverá valor nestes.</p>
<h3>Fatiando listas</h3>
<h4>Fatiando por um valor (.slice)</h4>
<p></p>
<h4>Fatiando por uma posição (.slice)</h4>
<p>Podemos realizar o fatiamento informando quantos itens queremos retornar de uma lista e a partir de qual posição o mesmo será considerado com o método slice. Neste método informamos no primeiro parametro qual a posição inicial do nosso novo array e no segundo parâmetro até qual posição retornaremos, desse modo ele retornará uma nova lista de acordo com os valores informados, do mesmo modo podemos retornar valores a partir das últimas posições, ou seja, a partir de um indice negativo a instrução vai retornar valores excluindo as n últimas posições de acordo com o parâmetro de fim. Nota, caso não hajam valores na posição informada será retornado os valores válidos até o final da lista. Nota2, caso os parâmetros estejam invertidos será retornado um array vazio como resultado.</p>
Uma curiosidade quanto aos arrays é que eles são instanciados como um objeto pertencente á classe Arrays, ou seja, não possuem um tipo próprio sendo tratados como object. Desta forma, para validarmos um array precisamos conferir se o mesmo é pertencente à classe Arrays.
</p>
<h1>Funções (function)</h1>
<p>As funções são declaradas a partir da palavra reservada function. Neste caso podemso definir uma função como um conjunto do código que poderá ou não ser utilizado em outro momento durante a execução do código. Nesse caso em uma função podemos criar uma estrutura de execução que irá executar um ou mais cunjuntos de ações. <br />Assim como podemos declarar uma função para executar um conjunto de parâmetros, podemos também definir se a função receberá ou não parâmetros a serem utilizados durante a sua execução.
<h2>Declarando uma função</h2>
<p>Para declararmos uma função utilizamos a palavra reservada function e damos um nome à nossa função, então seguimos com a abertura e fechamento dos parentesis e abrimos chaves para inserirmos as instruções que a função irá realizar quando invocada. 
<h3>Funções com parâmetros</h3>
<p>Para podermos receber e utilizar um parâmetro na nossa função passamos quais os parâmetros dentro dos parentesis (ao darmos um nome para o parãmetro dessa forma ele será implicitamente criado como uma variável)</p>
</p>
<h2>Tipos de função</h2>
<p>As funções possuem dois tipos de saída, aquelas que executam algo mas que não possuem um retorno e as que possuem um retorno:
<h3>Função Sem Retorno [void]</h3>
<p>As funções sem um retorno executam algo porém não possuem um valor, vemos isso se atribuirmos como vaor de uma variável uma função que execute apenas um console.log, por exemplo. Caso façamos isso a variável terá valor <i>undefined</i></p>
<p>Funções com Retorno</p>
<p>Podemos também atribuir um retorno à uma função, nesse caso usamos a palavra reservada return para indicar o que será retornado, podendo ser um objeto, um valor ou uma mensagem de erro, por exemplo.</p>
</p>
<h2>Invocando uma função</h2>
<p>Como dito acima, damos um nome para a função, a partir deste podemos ivocá-la apenas passando o nome da função seguido de abre e fecha parentesis. Caso nossa função receba parâmetros, passamos os parâmetros dentro dos parentesis quando invocarmos esta.</p>
<h2>Funções Anônimas</h2>
<p>As funções anônimas consistem de uma função atribuída, implicitamente, à uma variável. Neste casos declaramos uma variável e atribuímos uma função declarando-a, mas sem dar-lhe um nome. 
<h3>Arrow-Functions (=>)</h3>
<p>Mais recentemente temos, além desta possibilidade as arrow-functions onde, assim como anteriromente declaramos a função como valor de uma variáevl, porém ao invés de usarmos a palavra function, usamos uma combinação dos sinais de igual e maior (=>) após os parentesis da função. Nesse casos também podemos remover os parentesis, as chaves e o return, desta maneira simplificando o cód</p>
<br/>Em ambos os casos precisamos encerrar a entrada com ponto e vírgula (após fechar as chaves).</p>
<p>Nota: as variáveis criadas dentro de uma função ou seus parâmetros pertencem apenas ao escopo da função e são removidos da memória ao final de sua execução.</p>
</p>
<h1>Objetos</h1>
<p>Um objeto pode ser criadop de diversas formas, porém em todas ele possui o formato de um literal. No caso o objeto consiste de um conjunto de atributos que devem ser possídos por mais de um valor, desta forma padronizando e facilitando a criação de um código.
<h2>Objeto por const</h2>
<p>Podemos criar um objeto a partir da própria constante, desta forma, como valor da constante criamos um literal (uma estrutura de dicionário delimitada por chaves) onde passamos os atributos seguidos de dois pontos ':' e, por fim, o valor que este atributo conterá.</p>
<h2>Objeto por função</h2>
<p>Podemos também, definir uma função para criar estes objetos, neste caso usamos como parametro da função os valores dos atributos e, então, definimos que ela retornará um literal contendo esta estrutura de atributos. No caso de uma função, podemos simplesmente passar as mesmas variáveis usadas como parãmetros na função que o literal será criado implicitamente.</p>
</p>
<h2>Métodos</h2>
<p>Um método é uma função que pertence apenas ao objeto, nesse caso temos algumas caracterísiticas específicas deste tipo de função.
<li>São chamadas a partir do objeto instanciado através de um ponto '.'</li>
<li>Podem, ou não, alterar valores do próprio objeto.</li>
<li>Podem desempenhar papéis específicos no escopo do objeto.</li>
Como pode ser visto, os métodos ajudam na organização do código, impedindo que funções específicas sejam invocadas fora de suas atribuições principais.
<h3>Palavra this</h3>
<p>Quando usamos objetos e métodos, podemos precisar usar ou alterar algum atributo ou variável do próprio objeto (ou mesmo um outro método dentro deste escopo) e, para isso, usamos a palavra <i>this</i>. Esta palavra, seguida de '.' e do nome do atributo ou variável buscada diz ao compilador que esta pertence ao escopo do objeto que estamos, desse modo permitindo sua utilização.</p>
</p>
<h1>Primitivos Imutáveis</h1>
<h2>String</h2>
<p>Uma string, apesar de possuir uma estrutura indexada, não é um array, ou seja, seus elementos não podem ser alterados individualmente, apenas a substituição de todo o valor. Nesse sentido podemos dizer que não é possível alterar, explicitamente, uma string, apenas por reatribuição ou pelo uso de algum método que permita a alteração.</p>
<h2>Dados por Referência</h2>
<p>Diferente dos primitivos imutáveis, os valoers passados por reefrência podem ter seu conteúdo alterado, nesse caso um array, object ou function, podem ter seu conteúdo alterado. Isso se deve ao fato de que, os valores, são localizações de dados na memória, sendo neste caso a variável um ponteiro para o valor do objeto.</p>
<h2>Atribuição</h2>
<p>Quando atribuído uma variável como valor de outra variável, caso esta segunda possua um vaor primitivo, indica que será realizada uma cópia, ou seja, durante a execução do programa, o valor de ambas as variáveis se tornará igual e, caso em ummomento futuro o valor de uma delas for alterado, o valor copiado seguirá intacto. Caso o valor seja um objeto ou uma referência, neste caso a alteração será realizada em ambas as variáveis pois, nesse sntido, ambas serão tratadas como ponteiros para o valor real armazenado em memória.</p>
<h3>Copiando Valores (spreading)</h3>
<p>Podemos copiar um valor quando for uma referência, para tanto usamos reticencias antes da variável que aponta para o valor desejado. Neste caso, quando usamos o spread (reticências) precisamos inserir a variável dentro do mesmo tipo da referência (se array, entre colchetes; se object, entre chaves).</p>
<h1>Funções Auto-Invocadas</h1>
<p>Resumindo: tratam-se de funções invocadas diretamente no escopo global, fora de alguma variável.</p>
<h2>Controlando Eventos</h2>
<p>Cada interação com a janela do navegador gera um evento, mesmo não sendo explicito em tela, portanto é interessante podermos controlar estes eventos para melhor executar nossa aplicação. Nesse sentido, em um formulário, temos um evento que atualiza a página quando é realizado o 'click' em enviar e podemos, a partir de alguns parâmetros controlar esse evento e o que ele executa a partir de uma função Auto-Invocada.
<br />
<br />
<h3>Selecionando Elementos HTML</h3>
<p>Dentro do javascript podem precisar invocar ou interagir com os elementos HTML da nossa página e para isso usamos os mesmo padrões do CSS para tal, neste caso trabalhando com tag, classes e/ou ID's.</p>
<h4>Selecionando TAG's</h4>
<p>Para selecionarmos ou indicarmos uma tag HTML usamos o nome da tag, como string, para indicar ao script onde ele irá atuar.</p>
<h4>Selecionando Classes</h4>
<p>Assim como nas tags, para selecionarmos uma classe passamos o nome da classe, precedido por ponto '.', em uma string.</p>
<h4>Selecionando ID's</h4>
<p>Tal qual os anteriores, podemos selecionar os id's, para isso usamos o mesmo método que na classe, porém substituindo o ponto por hashtag '#'.</p>

<p>Para atribuirmos o valor de uma variável a partir de um elemento HTML podemos usar diversas maneiras, as m,ais comuns são:
<h2>.querySelector</h2>
</p>
</p>
