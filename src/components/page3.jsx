import swal from "sweetalert2"

const Porto = ({Porto,Header1}) => {
    const sweetAlert = (portoId, portoLink) => {
        if (portoId == 'websiteReady')
        {window.open(portoLink);}
        else
        {swal.fire({
            title: 'Woops!',
            toast: true,
            text: 'Saat ini website belum tersedia hehe',
            position: 'top-end',
            icon: 'info',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            showCloseButton: true
        })}
    }
    return(
            <section className="page3" id="page3">
        <div className="container2 pt-2 w-full bg-white flex flex-col mx-auto h-auto justify-center items-center" id="page2" style={{marginTop: "-2px"}}>
            <div className="content2 flex mx-auto w-11/12 md:w-10/12 flex-col">
                <h1 className="font3 text-blue-700 text-left text-5xl font-bold pb-3">
                    {Header1}
                </h1>
                <p className="text text-xl text-gray-800 text-justify">
                    Berikut merupakan beberapa project yang dilakukan dalam tim ataupun individu dalam beberapa waktu kebelakang.
                </p>
                <div className="activity flex flex-row justify-around pt-10 flex-wrap gap-y-6">
                    {Porto.map(({portoName, portoImg, portoRole, portoLink, portoId}, index) => 
                    <div key={index} id={portoId} href={portoLink} className="card cursor-pointer flex flex-col p-3 justify-between w-80 h-auto bg-white" onClick={() => sweetAlert(portoId, portoLink)}>
                        <img src={portoImg} alt={portoName} className={"PortofolioPics transition-transform duration-200 transform hover:scale-110 cursor-pointer"}/>
                        <h1 className="name text-blue-700 text-left text-2xl font-bold pt-3">
                            {portoName}
                        </h1>
                        <p className="caption text-xl font-semibold2 text-justify">
                            {portoRole}
                        </p>
                    </div>
                    )}
                </div>
            </div>
            <div className="wave bottom-0 left-0 z-40 w-full h-auto transform scale-y-[40%] origin-bottom md:-mt-28">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2563EB" fill-opacity="1" d="M0,64L0,192L36.9,192L36.9,160L73.8,160L73.8,224L110.8,224L110.8,64L147.7,64L147.7,192L184.6,192L184.6,32L221.5,32L221.5,64L258.5,64L258.5,224L295.4,224L295.4,160L332.3,160L332.3,96L369.2,96L369.2,128L406.2,128L406.2,64L443.1,64L443.1,224L480,224L480,256L516.9,256L516.9,224L553.8,224L553.8,64L590.8,64L590.8,160L627.7,160L627.7,256L664.6,256L664.6,32L701.5,32L701.5,96L738.5,96L738.5,64L775.4,64L775.4,288L812.3,288L812.3,32L849.2,32L849.2,160L886.2,160L886.2,224L923.1,224L923.1,32L960,32L960,96L996.9,96L996.9,128L1033.8,128L1033.8,96L1070.8,96L1070.8,192L1107.7,192L1107.7,32L1144.6,32L1144.6,32L1181.5,32L1181.5,256L1218.5,256L1218.5,160L1255.4,160L1255.4,224L1292.3,224L1292.3,160L1329.2,160L1329.2,64L1366.2,64L1366.2,256L1403.1,256L1403.1,192L1440,192L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path></svg>
            </div>
        </div>
    </section>
    )
}

export default Porto;