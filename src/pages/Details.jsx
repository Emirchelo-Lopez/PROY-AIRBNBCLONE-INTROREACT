import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Details() {
  const { id } = useParams();

  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAccommodation = async () => {
      try {
        const res = await fetch("/data/accommodations.json");
        const data = await res.json();
        const accommodation = data.find((item) => item.id === Number(id));
        setAccommodation(accommodation);
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      getAccommodation();
    }, 500);

    return () => clearTimeout(timer);
  }, [id]); // Add 'id' as a dependency. The effect will re-run if the id changes.

  // Combine loading, not found, and details rendering using ternary operators.
  return (
    <>
      {loading ? (
        <Spinner />
      ) : !accommodation ? (
        <div className="text-center mt-10">Accommodation not found.</div>
      ) : (
        <div className="container mx-auto p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <img
                src={accommodation.image}
                alt={accommodation.title}
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
                {accommodation.title}
              </h1>
              <p className="text-xl text-gray-500 mb-5">
                {accommodation.location}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {accommodation.description}
              </p>
              <div className="text-3xl font-semibold text-red-500 mt-auto">
                <span>${accommodation.price}</span> per night
              </div>
              {accommodation.rating && (
                <div className="flex items-center mt-4">
                  <span className="text-yellow-500 text-2xl mr-2">★</span>
                  <span className="text-lg font-medium">
                    {accommodation.rating}
                  </span>
                  <span className="text-gray-500 ml-2">/ 5</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
