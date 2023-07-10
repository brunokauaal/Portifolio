import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id='home' name="home" className="w-full h-screen bg-[#0a192f]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full px-8 md:px-16">
        <p className="text-[#ffffe5]">Oi, meu nome é</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
          Bruno Kauã
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          Eu sou Software Developer Jr.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[800px]">
          estou animado para ampliar meus conhecimentos em Java e trabalhar em projetos ainda mais complexos e inovadores. Sou comunicativo, paciente e adoro trabalhar em grupo, especialmente com pessoas diversas que valorizam o aprendizado e o espírito de equipe.<br/>
        </p>
        <div>            
          <Link to='work' smooth={true} duration={500}>
            <button to='work' smooth={true} duration={500} className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#294380] hover:border-[#294380]">
              Portifolio
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowCircleRight size={25} className="ml-3 group-hover:right-1 group-hover:-top-2 group-hover:relative" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
