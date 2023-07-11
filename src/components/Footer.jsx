import React from 'react'
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png'
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {

  return (
      <footer className="w-full bg-[#0a192f] p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#0a192f] text-center md:justify-between">
       <h1></h1>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
                className='text-sm flex justify-between items-center w-full text-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
                href='https://drive.google.com/file/d/1WDqvjOllIGbNqngnoSXrLqFBLG8c9fSr/view?usp=sharing'
                target="_blank" 
                rel="noopener noreferrer"
                style={{marginLeft: '1em'}}
              >
                <BsFillPersonLinesFill size={30} />
              </a>
          </li>
          <li>
          <a
              className='flex justify-between items-center w-full text-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
              href='/'
              onClick={() => window.location = 'mailto:brunokauaalvesdecarvalho@gmail.com'}
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li>
          <a
              className='flex justify-between items-center w-full text-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
              href='https://github.com/brunokauaal'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li>
          <a
              className='flex justify-between items-center w-full text-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
              href='https://www.linkedin.com/in/bruno-kaua-655a6922a/'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-white" />
      <Link color="white" className="text-center font-normal text-gray-300 ">
        &copy; 2023 
      </Link>
    </footer>
  )
}

export default Footer;