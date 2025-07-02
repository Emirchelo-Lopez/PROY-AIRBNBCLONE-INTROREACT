import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import AuthLayout from "../components/AuthLayout";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn());
  const [loading, setLoading] = useState(true);
  const [accommodations, setAccommodations] = useState([]);
  const [cityFilter, setCityFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const fetchAccommodations = async () => {
      try {
        const res = await fetch("/data/accommodations.json");
        const data = await res.json();
        setAccommodations(data);
      } catch (error) {
        console.error("Error at fetching accommodations: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, [isAuthenticated]);

  const filteredAccommodations = accommodations
    .filter((item) =>
      item.location.toLowerCase().includes(cityFilter.toLowerCase())
    )
    .filter((item) => {
      if (priceFilter === "under-150") return item.price < 150;
      if (priceFilter === "150-200")
        return item.price >= 150 && item.price <= 200;
      if (priceFilter === "over-200") return item.price > 200;
      return true;
    });

  const loggedOutView = (
    <AuthLayout>
      <div className="text-center py-20 px-4 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Next Getaway
        </h1>
        <p className="text-lg text-gray-100 mb-8">
          Find unique places to stay and things to do.
        </p>
        <Link
          to="/login"
          className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-colors"
        >
          Explore
        </Link>
      </div>
    </AuthLayout>
  );

  const loggedInView = (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Featured Accommodations</h1>

      <div className="filter-container flex flex-col sm:flex-row items-center gap-4 mb-8 p-4 bg-gray-100 rounded-lg shadow-sm">
        <input
          type="text"
          placeholder="Filter by city (e.g., Rome)..."
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="flex-grow w-full sm:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="w-full sm:w-auto p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">All Prices</option>
          <option value="under-150">Under $150</option>
          <option value="150-200">$150 - $200</option>
          <option value="over-200">Over $200</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAccommodations.length > 0 ? (
          filteredAccommodations.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              location={item.location}
              image={item.image}
              rating={item.rating}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No accommodations match your filters.
          </p>
        )}
      </div>
    </div>
  );

  return isAuthenticated ? loading ? <Spinner /> : loggedInView : loggedOutView;
}
