import './App.css';
import Navbar from './components/navbar'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3';
import Page4 from './components/page4';
import{
    updateMe,
    learn,
    programming,
    room,
    esc,
    zakat,
    arcaloka,
    separo,
    jtravel,
    keyboard,
    daredevil,
    magang
} from './assets'

export default function App(){
  return (
    <>
      <Navbar/>
      <Page1 
        name={"Farrel"}
        profilPics={updateMe}
        introduction={"Oke, aku seorang mahasiswa di program studi yang berbau informatika, yang juga mendalami vector ilustration, ui ux design, dan baru terjun ke dunia front end web developer. Selamat datang di website portofolio ku, hope you enjoy guys~"}
      />
      <Page2 
        Header={"What do I do"}
        Hobi={[
          {
            hobiJudul: "Programming",
            hobiImg: programming,
            hobiDeskripsi: "Berhubung di jurusan yang mengandung informatika, jadi ya gara-gara tugas atau gabut juga sering bikin program atau web (kadang)."
          },
          {
            hobiJudul: "Design",
            hobiImg: room,
            hobiDeskripsi: "FYI, pernah juga join organisasi dan jobdesk disini ga jauh-jauh sama desain. Selain hobi juga jadi mau ga mau harus ngerjain jobdesk."
          },
          {
            hobiJudul: "Nongkrong",
            hobiImg: learn,
            hobiDeskripsi: "Namanya juga orang, kadang pasti juga ngerasa gabut. Sesekali oke lah, nongkrong ngapain? ya ngegame hehe."
          },
        ]}
      />
      <Page3
        Header1 = "Portofolio" 
        Porto={[
          {
            portoName:"Website Electrical Science Club",
            portoImg:esc,
            portoId:"websiteReady",
            portoLink:"https://electrical-science-club.vercel.app",
            portoRole:"Front End Developer"
          },
          {
            portoName:"Zakatify",
            portoImg:zakat,
            portoId:"websiteGaReady",
            portoLink:"",
            portoRole:"UI/UX Designer"
          },
          {
            portoName:"Separo:Sistem Booking Ruang",
            portoImg:separo,
            portoId:"websiteGaReady",
            portoLink:"",
            portoRole:"Front End Developer"
          },
          {
            portoName:"Arcaloka:Gamifikasi Dalam Edukasi Sejarah",
            portoImg:arcaloka,
            portoId:"websiteReady",
            portoLink:"https://www.figma.com/proto/erI5vU0NNZMNRRq2eFlN7K/ARCALOKA-PROJECT?node-id=0-1&t=FCbiJHI6cALmMcCX-1",
            portoRole:"UI/UX Designer"
          },
          {
            portoName:"Jtravel",
            portoImg:jtravel,
            portoId:"websiteReady",
            portoLink:"https://farrelekaputra.github.io/jtravel.github.io/",
            portoRole:"Front End Developer"
          }
        ]}
      />
      
      <Page4 
        Header2={"MicroBlog"}
        MicroBlog={[
          {
            BlogJudul: "Bahas Daredevil",
            BlogImg: daredevil,
            BlogLink:"https://farrelekaputra.github.io/daredevil.html",
            BlogDeskripsi: "Movie & Series"
          },
          {
            BlogJudul: "Keyboard",
            BlogLink:"https://farrelekaputra.github.io/keyboard.html",
            BlogImg: keyboard,
            BlogDeskripsi: "Boys will be Boys"
          },
          {
            BlogJudul: "Lihat lainnya",
            BlogLink:"https://farrelekaputra.github.io/blogSession",
            BlogImg: magang,
            BlogDeskripsi: "",
            special: true
          },
        ]}
      />
    </>
  );
}