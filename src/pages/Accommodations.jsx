import { useState, useEffect } from "react";
import Card from "../components/Card"; // We'll create this next

function Accommodations() {
  // 1. Create a state for the listings data (initialize as an empty array).
  const [accommodations, setAccommodations] = useState([]);

  // 2. Create a state for the loading status (initialize as true).
  const [loading, setLoading] = useState(true);

  const getAccommodations = async () => {
    try {
      const data = await fetch("/data/accommodations.json");
      const listings = await data.json();
      setAccommodations(listings);
    } catch (error) {
      console.error("Error fetching accommodations data:", error);
    } finally {
      setLoading(false);
    }
  };

  // 3. Use the useEffect hook to fetch data when the component mounts.
  useEffect(() => {
    // Use the browser's fetch API to get data from '/data/alojamientos.json'.
    // Remember, fetch returns a promise.
    // Chain .then() to handle the response.
    // First, parse the response body as JSON (response.json()).
    // In the next .then(), you'll get the actual data.
    // Set the data to your 'accommodations' state.
    // Finally, set the 'loading' state to false.
    const timer = setTimeout(() => {
      getAccommodations();
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // An empty dependency array means this effect runs only once.

  // 4. Add a conditional render for the loading state.
  if (loading) {
    return <div className="text-center mt-10">Loading accommodations...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Accommodations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* 5. Map over the 'accommodations' array. */}
        {/* For each 'item' in the array, render a <Card /> component. */}
        {/* Pass the item's data (id, title, image, etc.) as props to the Card. */}
        {/* Don't forget to add a unique 'key' prop, like key={item.id}. */}
        {accommodations.map((accommodation) => (
          <Card
            key={accommodation.id}
            title={accommodation.title}
            description={accommodation.description}
            price={accommodation.price}
            location={accommodation.location}
            image={accommodation.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Accommodations;
