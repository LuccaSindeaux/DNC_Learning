# React + Vite
O Vite é um software que permite a criação de projetos em frameworks específicos como React e o Svelvte.

1 - Forma de instalar:
    Com o node baixado, executar o comando "npm create vite@latest"

    No terminal, definir o nome do projeto, o ideal é fazer com hifens. Quando o nome for definido, após pressionar ENTER, seleciona-se o framework que vai ser usado, neste caso selecionasse o React com a variante JavaScript.

    O npm rund dev vai permitir que o código vite base criado possa ser visualizado no navegador num porta de localhost definida.

2 - CSS base:
    O React via vite vem com um aquivo App.css. Normalmente apagamos ele e criamos um main.css, lá criamos nossa base de estilos. No React, por padrão de agilidade, definimos configurações de estilo css via classes e só as chamamso em nossas tags html. Exemplos abaixo:
            .d-flex{
                display: flex;
            }
            .fd-column{
                flex-direction: column;
            }
            .jc-center{
                justify-content: center;
            }