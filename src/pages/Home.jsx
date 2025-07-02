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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {accommodations.map((item) => (
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
        ))}
      </div>
    </div>
  );

  return isAuthenticated ? loading ? <Spinner /> : loggedInView : loggedOutView;
}
