import './App.css';
import Navbar from './components/navbar'
import HomePage from './components/page1'
import Activity from './components/page2'
import Porto from './components/page3';
import Microblog from './components/page4';
import Sosmed from './components/page5';

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

      <HomePage 
        name={"Farrel"}
        profilPics={updateMe}
        introduction={"Oke, aku seorang mahasiswa di program studi yang berbau informatika, yang juga mendalami vector ilustration, ui ux design, dan baru terjun ke dunia front end web developer. Selamat datang di website portofolio ku, hope you enjoy guys~"}
      />

      <Activity 
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
      <Porto
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
      
      <Microblog 
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

      <Sosmed 
        Header3={"Contact Me"}
        sosmed={[
          {
            sosmedLink:"https://www.linkedin.com/in/muhammad-farrel-ekaputra-213bb3235/",
            sosmedLabel:"Farrel Ekaputra",
            sosmedIcon:"M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M8 10a1 1 0 0 1 .993.883L9 11v5a1 1 0 0 1-1.993.117L7 16v-5a1 1 0 0 1 1-1m3-1a1 1 0 0 1 .984.821a6 6 0 0 1 .623-.313c.667-.285 1.666-.442 2.568-.159c.473.15.948.43 1.3.907c.315.425.485.942.519 1.523L17 12v4a1 1 0 0 1-1.993.117L15 16v-4c0-.33-.08-.484-.132-.555a.55.55 0 0 0-.293-.188c-.348-.11-.849-.052-1.182.09c-.5.214-.958.55-1.27.861L12 12.34V16a1 1 0 0 1-1.993.117L10 16v-6a1 1 0 0 1 1-1M8 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
          },
          {
            sosmedLink:"https://instagram.com/farrelekptr",
            sosmedLabel:"@farrelekaptr",
            sosmedIcon:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
          },
          {
            sosmedLink:"https://discordapp.com/users/415092516262772736",
            sosmedLabel:"Ryuu4244",
            sosmedIcon:"M8.52 13.846c-1.04 0-1.888-.945-1.888-2.101s.827-2.102 1.889-2.102c1.05 0 1.91.945 1.889 2.102c0 1.156-.839 2.1-1.89 2.1m6.974 0c-1.04 0-1.89-.945-1.89-2.101s.829-2.102 1.89-2.102c1.05 0 1.91.945 1.89 2.102c0 1.156-.829 2.1-1.89 2.1m-5.369-9.523l-.308-.563l-.634.106a16.4 16.4 0 0 0-4.158 1.28l-.228.105l-.142.21c-2.613 3.853-3.33 7.648-2.975 11.375l.039.407l.33.24a16.9 16.9 0 0 0 5.078 2.543l.79.242L9.03 17.55c1.91.472 4.03.472 5.939 0l1.107 2.717l.79-.242a16.8 16.8 0 0 0 5.08-2.545l.327-.238l.04-.402c.436-4.32-.697-8.083-2.958-11.384l-.142-.208l-.228-.104a16.6 16.6 0 0 0-4.154-1.28l-.618-.103l-.314.542c-.088.15-.177.32-.263.493a16 16 0 0 0-3.263 0c-.085-.17-.17-.333-.248-.474M6.715 16.61c.197.114.405.226.61.328l-.449 1.096a15 15 0 0 1-3.428-1.778c-.225-3.138.413-6.305 2.564-9.57a14.6 14.6 0 0 1 2.824-.913c.06.125.116.248.162.356l.273.643l.692-.101a14.1 14.1 0 0 1 4.09 0l.69.1l.272-.642c.047-.112.102-.234.16-.356c.977.21 1.923.52 2.828.915c1.875 2.82 2.821 5.966 2.546 9.567a15 15 0 0 1-3.43 1.779l-.445-1.095c.206-.102.414-.214.613-.329c.49-.282 1.017-.634 1.353-.97l-1.28-1.28c-.163.164-.523.42-.977.682c-.444.256-.885.463-1.167.556c-2.003.663-4.428.663-6.432 0c-.281-.093-.722-.3-1.166-.556c-.454-.261-.814-.518-.978-.682l-1.28 1.28c.337.336.864.688 1.354.97"
          }
        ]}
      />

    </>
  );
}