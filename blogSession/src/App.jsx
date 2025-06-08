import Card from './card-blog.jsx';
import Picture from './assets/gambar.png';
import LandingPage from './landing.jsx';
import magangImage from './assets/magang-2.jpg'
import daredevilImage from './assets/matt.png'
import keebsImage from './assets/keebs.jpg'
import pelatihanImage from './assets/pelatihan-gambar.jpg'

function App() {

  return (
    <>
      <LandingPage />
          <div className="container w-11/12 flex flex-col justify-start pt-12 mx-auto gap-8 mb-8">
            <div className="headertext flex flex-col">
              <h1 className="text-gray-800 text-2xl font-semibold flex">Mini Blog</h1>
              <p className="caption text-justify">
                
              </p>
            </div>
            <Card 
              Blog={[
                {
                  Title: "Keyboard",
                  Genre: "Boys will be Boys",
                  picture: keebsImage,
                  link: "https://farrelekaputra.github.io/keyboard.html"
                },
                {
                  Title: "Magang Akademik",
                  Genre: "College life",
                  picture: magangImage,
                  link: "https://farrelekaputra.github.io/magang.html"
                },
                {
                  Title: "Review Daredevil:Born Again",
                  Genre: "Movie/series Review",
                  picture: daredevilImage,
                  link: "https://farrelekaputra.github.io/daredevil.html"
                },
                {
                  Title: "Tibe Tiba Ngajar",
                  Genre: "College life",
                  picture: pelatihanImage,
                  link: "https://farrelekaputra.github.io/pelatihan"
                }
              ]}
            />
        </div>
    </>
  );
}

export default App;