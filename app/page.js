import Header from "../components/Header";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="bio">
          <h2>Sobre Mim</h2>
          <p>
            Sou estudante de Ciência da Computação na Universidade Católica de
            Pernambuco, estou cursando agora o quinto período. Gosto muito de
            programar e de explorar novos algoritmos e sempre descobrir a melhor
            solução para cada problema! Atualmente, participo de uma pesquisa
            PIBIC que foca na classificação de câncer de mama através de
            processamento de imagens e aplicação dos dados em redes neurais.
            Também faço parte da Maratona de Programação, participando
            anualmente de competições e praticando semanalmente para melhorar
            minhas habilidades. Estou sempre em busca de oportunidades para
            evoluir tecnicamente e aprender novas tecnologias.
          </p>
        </section>

        <section className="contato">
          <h2>Contato</h2>
          <ul>
            <li>
              <a
                href="https://github.com/belamedeirosbl"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/belamedeirosbl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="mailto:belamedeirosbl@gmail.com">
                belamedeirosbl@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <section className="habilidades">
          <h2>Habilidades</h2>
          <ul>
            <li>
              <strong>Linguagens:</strong> Python, Java, C, C++
            </li>
            <li>
              <strong>Web:</strong> HTML, CSS, JavaScript, React
            </li>
            <li>
              <strong>Banco de Dados:</strong> MySQL, SQLite
            </li>
            <li>
              <strong>Ferramentas:</strong> Git, GitHub, Figma
            </li>
            <li>
              <strong>Frameworks:</strong> Django, Next
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
