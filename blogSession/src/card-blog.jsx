const Card = ({Blog, Genre, picture, link}) => {
    return(
        <a href={link} target="blank" className="card p-4 md:bg-white w-full md:w-80 md:rounded-xl md:border-gray-300 md:shadow-md md:border transition cursor-pointer md:hover:bg-gray-100 md:hover:border-b-2">
            {picture && (
                <img src={picture} className="w-auto rounded-xl md:rounded-none" alt={Blog}/>
            )}
            <div className="text-component mt-4">
                <div className="judul text-xl">{Blog}</div>
                <div className="genre">{Genre}</div>
            </div>
        </a>
    );
};

export default Card;