const Sosmed = ({ sosmed, Header3 }) => {
  return (
    <section className="page5" id="page5">
      <div className="container2 absolute z-40 pt-2 pb-8 w-full h-auto md:h-1/2 bg-white flex flex-col mx-auto justify-center items-center" id="page2" style={{ marginTop: "-2px" }}>
        <div className="content2 flex flex-col mx-auto w-10/12">
          <h1 className="font3 text-gray-800 text-left text-5xl font-bold pb-3">
            {Header3}
          </h1>
          <p className="text text-gray-800 text-justify text-xl">
            Oke selain itu, aku juga lumayan aktif berselancar di sosial media. Berikut beberapa contoh sosial media yang biasa aku gunakan, dan juga kalo mau kontak bisa langsung isi form yang langsung otomatis ke email.
          </p>
          <div className="sosmed flex flex-col md:flex-row mt-6 gap-4 w-full md:w-auto h-auto">
            {sosmed.map(({ sosmedLabel, sosmedIcon, sosmedLink }, index) => (
              <a key={index} href={sosmedLink} target="_blank" rel="noopener noreferrer" className="flex group items-center md:gap-3 md:border-gray-800 md:p-2 md:border rounded-lg md:hover:bg-blue-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#1e1e1e" d={sosmedIcon} />
                </svg>
                <span className="text-gray-800 md:group-hover:text-gray-600 text-xl">{sosmedLabel}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sosmed;