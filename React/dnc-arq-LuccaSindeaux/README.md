# React + Vite
O Vite é um software que permite a criação de projetos em frameworks específicos como React e o Svelvte.

1 - Forma de instalar:
    Com o node baixado, executar o comando "npm create vite@latest"

    No terminal, definir o nome do projeto, o ideal é fazer com hifens. Quando o nome for definido, após pressionar ENTER, seleciona-se o framework que vai ser usado, neste caso selecionasse o React com a variante JavaScript.

    O "npm rund dev" vai permitir que o código vite base criado possa ser visualizado no navegador num porta de localhost definida.

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

3 - SPA (Single Page Application):
    Com REACT podemos criar uma transição suave na página que dá uma ideia para nosso usuário que a aplicação não dá "refresh" na página, porém nosso código não está efetivamente dentro de uma única página. 

    O Vite e outras aplicações não vem com a possibilidade de criação de rotas (routers) por padrão, tendo de ser instalado via terminal com "npm install react-router-dom".

    Em App.jsx devemos importar está biblioteca, foi feito com:
     "import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 

    Por padrão o Vite coloca vários imports em App.jsx e um código HTML que por padrão renderiz vários componentes. Contudo, a boa prátrica de mercado dita que o ideal NÃO é renderizar estes componentes no arquivo App.jsx. Todo o HTML e as importações que estavam importando elementos foram então devidamente apagados. 


4 - Usando as rotas:
- No App.jsx
    function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
        <Routes>
            <Route path = "/" element></Route>
        </Routes>
        </Router>
    )

    - Em <Route path = "/" element></Route> EU preciso definir o elemento, sendo feito com "element = {<>inserção</>}

    <Router>
      <Routes>
        <Route path = "/" element={<><h1>HOME</h1></>}></Route>
        <Route path = "/about" element={<><h1>ABOUT</h1></>}></Route>
        <Route path = "/projects" element={<><h1>PROJECTS</h1></>}></Route>
        <Route path = "/contact" element={<><h1>CONTACT</h1></>}></Route>
      </Routes>
    </Router>

    - Isto significa que a primeira rota de about levará para a página do about, a de projetos para projetos e contatos a mesma coisa. No exemplo foram postos somente h1 em papginas HTML em branco, mas o ideal é que existiriam conteúdos dentros destas tags de arquivos html com estas devidas páginas.

    - Para completar a SPA devemos usar o Link da biblioteca:
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
    
    Com o link é que nossa aplicação vavega dentro dela mesma sem recarregar a página. 

5 - Something
