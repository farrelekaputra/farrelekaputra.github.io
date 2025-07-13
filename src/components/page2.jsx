const Activity = ({Hobi, Header}) => {
    return(
    <div className="page2" id="what-i-do">
        <div className="container2 pt-2 w-full bg-blue-600 flex flex-col mx-auto h-auto justify-center items-center" id="page2" style={{marginTop: "-2px"}}>
            <div className="content2 flex mx-auto w-10/12 flex-col">
                <h1 className="font3 text-white text-left text-5xl font-semibold pb-3">
                    {Header}
                </h1>
                <p className="text text-white text-justify text-xl">
                    Sebenarnya ada banyak kegiatan yang biasa ku lakuin waktu senggang, tapi karena ukuran halaman yang seadanya dan nanti page lain ga kebagian, jadi ditaruh top 3 kegiatan yang sering dilakuin sehari-hari.
                </p>
                <div className="activity flex flex-col md:flex-row justify-center gap-10 pt-10">
                {Hobi.map(({hobiJudul, hobiDeskripsi, hobiImg}, index) => 
                    <div key={index} className="card flex flex-col p-5 justify-center md:w-1/3 gap-4 h-auto ">
                        <img src={hobiImg} alt={hobiJudul} className="p-4 m-4 rounded-lg bg-white transition-transform w-60 duration-200 transform hover:scale-110 cursor-pointer" />
                        <h1 className="text-white text-left text-2xl font-bold">
                            {hobiJudul}
                        </h1>
                        <p className="caption text-xl font-semibold text-white text-justify">
                            {hobiDeskripsi}
                        </p>
                    </div>                
                )}
                </div>
            </div>
            <div className="wave bottom-0 left-0 z-40 w-full h-auto transform scale-y-[40%] origin-bottom md:-mt-28">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,128L0,256L36.9,256L36.9,320L73.8,320L73.8,160L110.8,160L110.8,192L147.7,192L147.7,64L184.6,64L184.6,96L221.5,96L221.5,256L258.5,256L258.5,160L295.4,160L295.4,64L332.3,64L332.3,224L369.2,224L369.2,224L406.2,224L406.2,96L443.1,96L443.1,256L480,256L480,32L516.9,32L516.9,128L553.8,128L553.8,224L590.8,224L590.8,64L627.7,64L627.7,0L664.6,0L664.6,320L701.5,320L701.5,256L738.5,256L738.5,0L775.4,0L775.4,256L812.3,256L812.3,128L849.2,128L849.2,32L886.2,32L886.2,192L923.1,192L923.1,32L960,32L960,32L996.9,32L996.9,288L1033.8,288L1033.8,160L1070.8,160L1070.8,256L1107.7,256L1107.7,224L1144.6,224L1144.6,32L1181.5,32L1181.5,224L1218.5,224L1218.5,32L1255.4,32L1255.4,32L1292.3,32L1292.3,128L1329.2,128L1329.2,64L1366.2,64L1366.2,288L1403.1,288L1403.1,160L1440,160L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    </div>
    );
}

export default Activity;