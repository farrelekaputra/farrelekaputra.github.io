const Card = ({Blog}) => {
    return(
        <div className="blogSection flex gap-y-4 flex-wrap justify-around">
            {Blog.map(({Title, Genre, picture, link, index}) =>
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="card group p-4 md:bg-white w-full md:w-96 md:rounded-xl md:border-gray-300 md:shadow-md md:border transition cursor-pointer md:hover:bg-gray-100 md:hover:border-b-2">
                {picture && (
                    <img src={picture} className="md:w-auto w-screen" alt={Title}/>
                )}
                <div className="text-component mt-4">
                    <div className="judul group-hover:text-blue-600 transition-colors font-semibold text-xl">{Title}</div>
                    <div className="genre">{Genre}</div>
                </div>
            </a>
            )}
        </div>
    );
};

export default Card;