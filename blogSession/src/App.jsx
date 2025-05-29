import Card from './card-blog.jsx';
import Picture from './assets/gambar.png';
import LandingPage from './landing.jsx';
import magangImage from './assets/magang-2.jpg'
import daredevilImage from './assets/matt.png'
import keebsImage from './assets/keebs.jpg'

function App() {
  const blogList = [
    {
      Blog: "Magang Akademik",
      Genre: "College life",
      picture: magangImage,
      link: "https://farrelekaputra.github.io/magang.html"
    },
    {
      Blog: "Review Daredevil:Born Again",
      Genre: "Movie/series Review",
      picture: daredevilImage,
      link: "https://farrelekaputra.github.io/daredevil.html"
    },
    {
      Blog: "Keyboard",
      Genre: "Boys will be Boys",
      picture: keebsImage,
      link: "https://farrelekaputra.github.io/keyboard.html"
    }
  ];

  return (
    <>
      <LandingPage />
          <div className="container w-11/12 h-screen flex flex-col justify-start pt-12 mx-auto gap-8">
            <div className="headertext flex flex-col">
              <h1 className="text-gray-800 text-2xl font-semibold flex">Mini Blog</h1>
              <p className="caption text-justify">
                
              </p>
            </div>
          <div className="blogSection flex gap-4 flex-wrap justify-around">
            {blogList.map((blog, index) => (
              <Card
                key={index}
                Blog={blog.Blog}
                Genre={blog.Genre}
                picture={blog.picture}
                link={blog.link}
              />
            ))}
          </div>
        </div>
    </>
  );
}

export default App;