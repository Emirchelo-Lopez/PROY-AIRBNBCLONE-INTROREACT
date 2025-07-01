import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Details() {
  // 1. Use the useParams hook to get the 'id' from the URL.
  const { id } = useParams();

  // 2. Create state for the specific accommodation (initialize as null)
  //    and for the loading status.
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3. Fetch the data from '/data/alojamientos.json'.
    //    Once you have the data (which is an array)...
    //    a. Use the array's .find() method to find the accommodation
    //       where its 'id' matches the 'id' from useParams.
    //    b. HINT: The 'id' from useParams is a string, but in your data it's a number.
    //       You'll need to convert one of them to make them match!
    //    c. Set the found accommodation object into your state.
    //    d. Set loading to false.
    const getAccommodation = async () => {
      try {
        const res = await fetch("/data/accommodations.json");
        const data = await res.json();
        const accommodation = data.find((item) => item.id === Number(id));
        setAccommodation(accommodation);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching details:", error);
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      getAccommodation();
    }, 500);

    return () => clearTimeout(timer);
  }, [id]); // Add 'id' as a dependency. The effect will re-run if the id changes.

  // 4. Handle the loading state.
  if (loading) {
    return <Spinner />;
  }

  // 5. Handle the case where the accommodation was not found.
  if (!accommodation) {
    return <div className="text-center mt-10">Accommodation not found.</div>;
  }

  // 6. If found, display all the details of the 'accommodation' object.
  return (
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
          <p className="text-xl text-gray-500 mb-5">{accommodation.location}</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {accommodation.description}
          </p>
          <div className="text-3xl font-semibold text-red-500 mt-auto">
            <span>${accommodation.price}</span> per night
          </div>
        </div>
      </div>
    </div>
  );
}
