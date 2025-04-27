import { Social } from "../../components/Social"
import { FaInstagram, FaLinkedinIn  } from "react-icons/fa"


export function Home() {
    return(
      <div className="flex flex-col w-full py-4 items-center justify-center">
        <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">João Araujo</h1>
        <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

        <main className="flex flex-col w-11/12 max-w-xl text-center">
          <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
            <a href="#">
              <p className="md:text-lg text-base">Mapa Mental JavaScript</p>
            </a>
          </section>

          <footer className="flex justify-center gap-3 my-4">
            <Social url="https://www.instagram.com/j.oaraujoo/"> 
                <FaInstagram  size={34} color="#FFF"/>
            </Social>

            <Social  url="https://www.linkedin.com/in/joaraujoo/"> 
                <FaLinkedinIn   size={34} color="#FFF"/>
            </Social>
          </footer>
        </main>
      </div>
    )
  }