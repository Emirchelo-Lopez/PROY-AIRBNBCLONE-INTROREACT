import { Link } from "react-router-dom";

export default function Card({ id, image, title, location, price, rating }) {
  return (
    <Link to={`/accommodations/${id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2 truncate">{title}</h3>
          <p className="text-gray-700 text-base mb-2">{location}</p>
          <p className="text-lg">
            <span className="font-bold text-red-500">${price}</span> per night
          </p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="font-semibold">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
