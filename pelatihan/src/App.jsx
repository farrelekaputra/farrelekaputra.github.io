import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Paragraf1 from './components/Paragraf1'
import Image from './components/imageProperties'
import gambar1 from '../src/assets/gambar-4.jpg'
import gambar2 from '../src/assets/gambar-2.jpg'
import MainText from './components/paragrafUtama'
import Ending from './components/closing'
import Footer from './components/footer'

export default function App() {
  return (
    <>
      < Navbar />

      <div className="container mt-24 w-full flex flex-col items-center self-center justify-center mx-auto gap-4 p-4">

        < Header 
          tanggal="30 mei 2025"
          genre="College Life"
          judul="Tiba Tiba Ngajar"/>

        <article className="content flex flex-col mx-auto w-full md:p-4 rounded-md">
          
          <Paragraf1 
            teks = "Kalian gabut waktu magang dan punya lebih banyak waktu luang? coba buat ngajar ke sekolah aja. Yap, kalian ga salah baca, tempo hari yang lalu aku dan beberapa temen magang nyoba buat berkunjung ke salah satu sekolah menengah di Kota Surakarta. Di kegiatan ini kami coba sharing ke siswa/siswi tentang salah satu kegiatan yang kami lakukan di tempat magang selama ini, yaitu ngembangin project sederhana."
          />
          <Image 
            gambar={gambar1}
            alt="staff penyelenggara"
            caption="Para staff kegiatan kali ini" 
          />
          <MainText 
            teks={[
              "Sedikit lebih detail, kegiatan 'ngajar' ini sebenarnya jadi bagian dari pengabdian mahasiswa ke masyarakat. Dan yang dimaksud masyarakat di sini ya para siswa SMA itu sendiri. Jauh hari sebelum kegiatan ini dengan briefing rutin setiap minggu <i>(baca:rapat rutin)</i> buat nentuin gimana rencana hari H, dan nentuin materi apa yang relevan buat diajarin ke setiap siswa. Setelah diskusi panjang <i>(ga lama juga soalnya sekali rapat paling 30mnt)</i> disepakati kalo materi yang disampaikan adalah langkah membuat website sederhana.",
              "Program ini berlangsung selama tiga pertemuan. Di sesi pertama pertemuan, kami mulai dari pengenalan apa itu website, fungsi dasarnya, dan tentu aja HTML sebagai <i>base</i> nya. Disini siswa awalnya memang kurang kondusif, namun seiring berjalannya waktu <i>(anjay)</i> mulai tuh siswa keliatan <i>excited</i> dan memperhatikan materi yang disampaikan pemateri. Dan yap situasi ini hampir terjadi di setiap pertemuan, jadi yah mau ga mau kami juga belajar buat jadi lebih fleksibel pas menyampaikan materi, biar tetap <i>connect</i> ke mereka. <br /> And boom, Jujur aja, karakter siswa yang super aktif ini awalnya jadi tantangan tersendiri. Tapi justru dari situ kami jadi belajar banyak gimana caranya ngatur ritme kelas, bikin materi tetap seru, dan ngajak mereka tetap fokus meski energinya <i>unlimited (buset)</i>."
            ]}
          />
          <Image 
            gambar={gambar2}
            alt="dokumentasi kegiatan"
            caption="Nah ini kurang lebih dokumentasi kegiatannya"
          />
          <Ending 
            penutup="Dan pada akhir pertemuan setelah siswa berhasil buat nyelesaiin beberapa project portofolio sederhana, ditunjuk beberapa hasil dari siswa yang selanjutnya dipresentasiin didepan temen-temennya. Dan yap, jelas dong buat beberapa karya siswa terbaik juga dapet reward. Jadi kalau ditanya, <i>'Kapok ngajar?'</i> Jawabannya: tentu nggak dong! Malah penasaran gimana rasanya kalau harus ngadepin kelas yang lebih rusuh dari ini. wkwkwk. oke sekian <i>yapping</i> kali ini, <i>thanks</i> yang udah baca sampe sini, <i>soon</i> keliatannya bakal ada mini blog soal magang arc ending."
          />

        </article>

        <Footer />
        
      </div>
    </>
  )
}