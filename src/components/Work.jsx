import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import ImageBlog2 from '../assets/imageblog2.png';
import realEstate from '../assets/realestate.jpg';
import { FaGithub, FaRegPlayCircle} from 'react-icons/fa';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-250 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-gray-200'>
          <p className='text-4xl font-bold inline border-b-4 border-[#294380]'>
            Projetos
          </p>
          <p className='py-6'>Confira alguns dos meus projetos recentes</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ImageBlog2})`}}
            className='shadow-lg shadow-[#294380] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Em breve 
              </span>
              <div className='pt-8 text-center flex justify-center items-center'>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='https://react-blog-pessoal-xi.vercel.app/'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <FaRegPlayCircle style={{marginRight:'.75em'}} size={25} />
                    Demo
                  </button>                  
                </a>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='/'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <FaGithub style={{marginRight:'.75em'}} size={25} />
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Em breve 
              </span>
              <div className='pt-8 text-center flex justify-center items-center'>
              <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='/'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <FaRegPlayCircle style={{marginRight:'.75em'}} size={25} />
                    Demo
                  </button>                    
                </a>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='/'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <FaGithub style={{marginRight:'.75em'}} size={25} />
                    Code
                  </button>                  
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}- 
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Em breve 
              </span>
              <div className='pt-8 text-center flex justify-center items-center'>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='https://react-blog-pessoal-f69s3dzra-brunokauaal.vercel.app/login'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <FaRegPlayCircle style={{marginRight:'.75em'}} size={25} />
                      Demo
                    </button>                
                </a>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='/'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <FaGithub style={{marginRight:'.75em'}} size={25} />
                    Code
                  </button>                  
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Em breve 
              </span>
              <div className='pt-8 text-center flex justify-center items-center'>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='/'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                     <FaRegPlayCircle style={{marginRight:'.75em'}} size={25} />
                      Demo
                    </button>                 
                </a>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='/'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <FaGithub style={{marginRight:'.75em'}} size={25} />
                    Code
                  </button>                  
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Em breve 
              </span>
              <div className='pt-8 text-center flex justify-center items-center'>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='/'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <FaRegPlayCircle style={{marginRight:'.75em'}} size={25} />
                      Demo
                    </button>                  
                </a>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='/'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <FaGithub style={{marginRight:'.75em'}} size={25} />
                    Code
                  </button>                  
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Em breve 
              </span>
              <div className='pt-8 text-center flex justify-center items-center'>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='https://react-blog-pessoal-f69s3dzra-brunokauaal.vercel.app/home'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  <FaRegPlayCircle style={{marginRight:'.75em'}} size={25} />
                      Demo
                    </button>                  
                </a>
                <a className='flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'  href='/'>
                  <button className='flex justify-center items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    <FaGithub style={{marginRight:'.75em'}} size={25} />
                    Code
                  </button>                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;