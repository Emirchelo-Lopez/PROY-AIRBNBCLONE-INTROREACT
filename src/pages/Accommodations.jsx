import { useState, useEffect } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

export default function Accommodations() {
  const [accommodations, setAccommodations] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await fetch("/data/accommodations.json");

        const data = await response.json();

        setAccommodations(data);
      } catch (error) {
        console.error("Error fetching accommodations data:", error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchAccommodations();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Explore Accommodations</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {accommodations.map((accommodation) => (
              <Card
                key={accommodation.id}
                id={accommodation.id}
                title={accommodation.title}
                description={accommodation.description}
                price={accommodation.price}
                location={accommodation.location}
                image={accommodation.image}
                rating={accommodation.rating}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
