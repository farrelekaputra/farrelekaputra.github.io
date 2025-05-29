import React from 'react';
import Navbar from './navbar.jsx';
import gambar from './assets/gambar.png'; // Gambar dummy

const ImageLanding = ({ image, title, caption }) => {
  return (
    <div className="card-landing flex gap-2 border-2 border-gray-500 rounded-xl p-1">
      <img src={image} alt={title} className='w-1/4'/>
      <div className="text">
        <div className="judul-movie ">{title}</div>
        <div className="keterangan">{caption}</div>
      </div>
    </div>
  );
};

const LandingPage = ({ data }) => {
  return (
    <>
      <Navbar />
      <section className="main flex w-full h-screen"> 
      <div className="flex flex-col w-11/12 justify-center mx-auto pt-24 gap-4">
        <div className="kiri w-full md:w-3/4">
          <div className="landingContainer h-full flex flex-col justify-center -mt-24 gap-8">
            <h1 className='text-5xl font-bold'>Halo!</h1>
            <p className=''>Jadi disini agak dibedain dari website utama, soalnya di web ini bakal fokus dimana 
              hal yang sering di <i>yapping</i>-in bakal dikeluarin dalam bentuk teks. Awalnya aku buat blog 
              karena ada keyboard mechanical, daripada nganggur ga dibuat ngetik <i>(ya, aku orang yang 
              agak males kalo buat kegiatan akademik atau nugas)</i> jadi sekalian aja dikeluarin dalam 
              bentuk blog. Disini bakal bahas apa aja? yaa kurang lebih kaya <i>journaling</i> atau <i>life 
              update</i>, kalo ga bahas update dari dunia teknologi, <i>entertaiment digital</i>, atau series/movie.</p>
          </div>
        </div>
      </div>
        {/* <div className="kanan absolute right-20 top-25 flex flex-col w-1/2 md:w-1/3 gap-2">
          {data.map((item, index) => (
            <ImageLanding
              key={index}
              image={item.image}
              title={item.title}
              caption={item.caption}
            />
          ))}
        </div> */}
      </section>
    </>
  );
};

const LandingWrapper = () => {
  const imageLandings = [
    {
      image: gambar,
      title: "Judul bakal disini",
      caption: "lorem"
    },
    {
      image: gambar,
      title: "Judul bakal disini",
      caption: "lorem"
    }
  ];

  return <LandingPage data={imageLandings} />;
};

export default LandingWrapper;