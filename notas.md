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
    <ul>Diferente de outras linguagens, o JavaScript não disntigue integer de double, neste caso ambos os tipos de número sçao tratados como number.</ul>
</li>
</p>
<h2>Comentando</h2>
<p>Para comentar no js basta anteceder a mensagem do comentário com duas barras '//', desse modo a engine do JS irá ignorar os textos inseridos como comentários. Caso seja necessário a inclusão de um código longo ou quebrado em diversas linhas basta iserí-lo entre barras e asteríscos, desta maneira:<br />/* --Texto, paragrafo, etc-- */<br />Por fim, se pretendemos remover um trecho de código podemos simplesmente comentá-lo usando barras duplas para linhas individuais ou barra+asterisco para blocos de código.</p>