"use client"
import {useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerHeight / 2 - element.clientHeight / 2;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full min-h-navbarsize bg-primary text-textbar p-2 shadow-md z-50 flex flex-col">
        <div className="w-full mt-4">
          <div className="flex w-full">
            <div className="w-1/3"></div>
            <div className="w-1/3 flex self-center justify-center">
              <button className="hover:text-secondary" onClick={() => scrollToSection('presentation')}>
                Caty Garozzo
              </button>
            </div>
            <div className="flex w-1/3 justify-evenly">
              <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
                <Image src="/menu.svg" alt="Menu" width={30} height={30} />
              </button>
              <div className="hidden md:flex">
                <ListeLiens scrollToSection={scrollToSection} />
              </div>
              <div>
                <Link href="https://www.linkedin.com/in/caty-garozzo/" target="_blank" rel="noopener noreferrer">
                  <Image src="/logo-linkedin.svg" alt="LinkedIn" width={40} height={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Menu qui apparaît en dessous */}
        {isMenuOpen && <ListeLiens scrollToSection={scrollToSection} />}
    </nav>
  );
}

function ListeLiens({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    
    <ul className="flex flex-col md:flex-row justify-center md:justify-evenly md:gap-6 text-center self-center">
      <li><button className="hover:text-secondary" onClick={() => scrollToSection('tarifs')}>Tarifs</button></li>
      <li><button className="hover:text-secondary" onClick={() => scrollToSection('contact')}>Contact</button></li>
    </ul>
  );
}