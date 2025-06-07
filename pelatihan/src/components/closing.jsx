const Ending = (penutup) =>{
    return(
        <section className="text w-full justify-center mt-2 md:p-4">
            <p 
            className="w-full md:w-3/4 mx-auto flex-wrap text-justify text-gray-700 text-lg/8 gap-y-2" dangerouslySetInnerHTML={{__html:penutup}}/>
        </section>
    );
};

export default Ending;