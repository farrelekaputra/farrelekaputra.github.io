import React from 'react';
import Navbar from './navbar.jsx';
import gambar from './assets/update.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const LandingPage = () => {
    useEffect(() => {
      AOS.init({ duration: 500, once: true });
      AOS.refresh();
    }, []);

  return (
    <>
      <section className="main flex w-full h-auto"> 
      <div className="flex flex-col-reverse md:flex-row w-11/12 justify-center mx-auto pt-12 gap-4">
        <div className="kiri w-full md:w-3/4">
          <div className="landingContainer h-full flex flex-col justify-center gap-8">
            <div className="title flex gap-2">
              <h1 className='text-5xl font-bold text-gray-800'>Halo!</h1>
              <h1 className='hiragan text-4xl font-semibold text-blue-600'>(こんにちは!)</h1>
            </div>
            <p className='text-justify md:text-start'>Jadi disini agak dibedain dari website utama, soalnya di web ini bakal fokus dimana 
              hal yang sering di <i>yapping</i>-in bakal dikeluarin dalam bentuk teks. Awalnya aku buat blog 
              karena ada keyboard mechanical, daripada nganggur ga dibuat ngetik <i>(ya, aku orang yang 
              agak males kalo buat kegiatan akademik atau nugas)</i> jadi sekalian aja dikeluarin dalam 
              bentuk blog. Disini bakal bahas apa aja? yaa kurang lebih kaya <i>journaling</i> atau <i>life 
              update</i>, kalo ga bahas update dari dunia teknologi, <i>entertaiment digital</i>, atau series/movie.</p>
          </div>
        </div>
        <div className="kanan w-1/2 md:w-1/2"><img data-aos="fade-left" src={gambar} className='iam md:w-3/5' alt="gambarGwh" /></div>
      </div>
      </section>
    </>
  );
};

export default LandingPage;