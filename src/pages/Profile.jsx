import AuthLayout from "../components/AuthLayout";
import { getAuthenticatedUser } from "../utils/auth";

export default function Profile() {
  const user = getAuthenticatedUser();

  return (
    <AuthLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg min-w-[350px] flex flex-col items-center">
          <header className="mb-6 w-full text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Profile</h1>
          </header>
          <section className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center">
              <img
                src="https://i.pravatar.cc/120?img=3"
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4 border-4 border-red-200 shadow"
              />
              <h2 className="text-xl font-semibold text-gray-700 mb-1">
                {user?.name || "Unknown"}
              </h2>
              <p className="text-gray-500">{user?.email || "No email"}</p>
            </div>
          </section>
        </div>
      </div>
    </AuthLayout>
  );
}
