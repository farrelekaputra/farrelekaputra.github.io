import {useState} from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import {useEffect} from 'react';
import 'aos/dist/aos.css';

const WalkingText = () => {
    return(
    <motion.div animate={{ x: ["100%", "-100%"]}} transition={{duration:10, repeat:Infinity, ease:"linear"}} className='walking-text w-1/2 transition-opacity ease-in flex justify-start gap-2 md:gap-8' >
                
                <div className="walking-text transition-opacity ease-in flex-row flex justify-start w-1/2 gap-2 text-wrap md:gap-8">
                    <div className="html flex gap-1">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                <path fill="#2563EB" d="m3 2l1.578 17.824L12 22l7.467-2.175L21 2zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565l-4.246 1.381l-4.281-1.455l-.288-2.932h2.024l.16 1.411l2.4.815l2.346-.763l.297-3.005H7.416l-.562-6.05h10.412z" />
                            </svg>
                        </div>
                        <div className="font3 caption text-xl">
                            <p>HTML</p>
                        </div>
                    </div>
                    <div className="tailwind flex gap-1">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                <path fill="#2563EB" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12" />
                            </svg>
                        </div>
                        <div className="font3 caption text-xl">
                            Tailwind
                        </div>
                    </div>
                    <div className="figma flex gap-1 flex-nowrap">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                <path fill="#2563EB" fill-rule="evenodd" d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="font3 caption text-xl">
                            Ui/Ux
                        </div>
                    </div>
                    <div className="design flex gap-1">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 14 14">
                                <path fill="#2563EB" fill-rule="evenodd" d="M8.308.922L6.75 3q.07.053.134.116l4 4q.063.063.116.134l2.078-1.558a1 1 0 0 0 .107-1.507L9.815.815a1 1 0 0 0-1.507.107M1.381 5.254L.166 12.95L3.116 10l-.308-.308a.625.625 0 0 1 .884-.884l1.5 1.5a.625.625 0 0 1-.884.884L4 10.884l-2.95 2.95l7.696-1.215a1 1 0 0 0 .838-.877L10 8L6 4l-3.742.416a1 1 0 0 0-.877.838" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="font3 caption text-xl">Illustration</div>
                    </div>
                </div>
    </motion.div>
    )
}


const HomePage = ({name, profilPics, introduction}) => {
    useEffect(() => {
      AOS.init({once: true });
      AOS.refresh();
    }, []);

    return(
    <div className="page1 h-auto md:h-screen" id='home'>
        <div className="container w-10/12 pt-24 flex flex-col md:flex-row mx-auto justify-between md:items-center" id="HomePage">
            <div className="profilPics flex justify-center md:justify-start items-center md:w-1/2 z-40 h-auto bg-white">
                <img src={profilPics} data-aos="fade-left" data-aos-duration="1000" alt="profilPics" className='pics border-8 rounded-full w-4/6 mb-8 md:mb-0 border-blue-700 md:w-80 transition-all duration-200 transform hover:scale-110 hover:origin-center cursor-pointer'/>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" className="aboutMe flex md:w-1/2 flex-col gap-2 flex-wrap">
                <h1 className="font3 text-blue-600 text-left text-5xl font-semibold pb-3">Hi, im {name}</h1>
                <WalkingText />
                <p className="text text-xl w-full text-justify md:text-start">
                    {introduction}
                </p>
            </div>
        </div>
        <div className="wave bottom-0 left-0 z-40 w-full h-auto transform scale-y-[40%] origin-bottom md:-mt-28">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2563EB" fill-opacity="1" d="M0,64L0,192L36.9,192L36.9,160L73.8,160L73.8,224L110.8,224L110.8,64L147.7,64L147.7,192L184.6,192L184.6,32L221.5,32L221.5,64L258.5,64L258.5,224L295.4,224L295.4,160L332.3,160L332.3,96L369.2,96L369.2,128L406.2,128L406.2,64L443.1,64L443.1,224L480,224L480,256L516.9,256L516.9,224L553.8,224L553.8,64L590.8,64L590.8,160L627.7,160L627.7,256L664.6,256L664.6,32L701.5,32L701.5,96L738.5,96L738.5,64L775.4,64L775.4,288L812.3,288L812.3,32L849.2,32L849.2,160L886.2,160L886.2,224L923.1,224L923.1,32L960,32L960,96L996.9,96L996.9,128L1033.8,128L1033.8,96L1070.8,96L1070.8,192L1107.7,192L1107.7,32L1144.6,32L1144.6,32L1181.5,32L1181.5,256L1218.5,256L1218.5,160L1255.4,160L1255.4,224L1292.3,224L1292.3,160L1329.2,160L1329.2,64L1366.2,64L1366.2,256L1403.1,256L1403.1,192L1440,192L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path></svg>
        </div>
    </div> 
    );
};

export default HomePage;
