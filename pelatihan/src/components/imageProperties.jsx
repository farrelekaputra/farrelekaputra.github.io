const Image = ({ gambar, alt, caption }) => {
    return (
        <section className="gambar w-full md:w-3/4 mt-4 flex flex-col items-center justify-center mx-auto aspect-[16/9]">
            <img src={gambar} className="w-full h-full object-cover" alt={alt} />
            <p className="flex italic mx-auto text-gray-700 text-base">{caption}</p>
        </section>
    );
};

export default Image;