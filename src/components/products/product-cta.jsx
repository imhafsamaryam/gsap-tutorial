
const ProductCTA = ({ title, description, buttonText, buttonLink, image, colorClass }) => {
    return (
        <div className="mb-20 bg-slate-900 rounded-3xl p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
                    <p className="text-gray-400 mb-6">{description}</p>
                    <a
                        href={buttonLink}
                        className={`bg-gradient-to-r ${colorClass} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-block`}
                    >
                        {buttonText}
                    </a>
                </div>
                <div className="md:w-1/3">
                    <img src={image || "/placeholder.svg"} alt={title} className="w-full h-auto rounded-xl" />
                </div>
            </div>
        </div>
    )
}

export default ProductCTA
