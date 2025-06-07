const mainText = ({teks}) => {
    return(
        <section className="text w-full justify-center mt-4 md:p-4 gap-1">
        {teks.map((paragraph, index) => (
            <p key={index} 
                className="w-full md:w-3/4 mx-auto flex-wrap text-justify text-gray-700 text-lg/8 gap-y-2" dangerouslySetInnerHTML={{__html:paragraph}}/>

        ))}
        </section>
    );
};

export default mainText;