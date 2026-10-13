const Sosmed = ({ sosmed, Header3 }) => {
  return (
    <section className="page5" id="contact">
      <div className="container2 z-40 pt-5 md:pt-2 pb-8 w-full h-auto md:h-1/2 bg-white flex flex-col mx-auto justify-center items-center" id="page2" style={{ marginTop: "-2px" }}>
        <div className="content2 flex flex-col mx-auto w-10/12">
          <h1 className="font3 text-blue-700 text-left text-5xl font-semibold pb-3">
            {Header3}
          </h1>
          <p className="text text-gray-800 text-justify text-xl">
            Selain itu, aku juga lumayan aktif berselancar di sosial media. Berikut beberapa contoh sosial media yang biasa aku gunakan, so Lets Connect!
          </p>
          <div className="sosmed flex flex-col md:flex-row mt-6 gap-4 w-full md:w-auto h-auto">
            {sosmed.map(({ sosmedLabel, sosmedIcon, sosmedLink }, index) => (
              <a key={index} href={sosmedLink} target="_blank" rel="noopener noreferrer" className="flex group items-center md:gap-3 md:p-2 rounded-lg md:hover:bg-blue-600 md:hover:text-white transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-gray-800 md:group-hover:text-white">
                  <path fill="currentColor" d={sosmedIcon}/>
                </svg>
                <span className="text-gray-800 md:group-hover:text-white text-xl">{sosmedLabel}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sosmed;