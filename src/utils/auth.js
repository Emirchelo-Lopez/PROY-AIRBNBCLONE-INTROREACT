// A key to identify our user session in localStorage
const SESSION_KEY = "airbnb_user_session";

/**
 * Simulates logging in by saving user data to localStorage.
 */
export const login = (userData) => {
  // Your code here: Use localStorage.setItem()
  // Remember to convert the userData object to a string.
  localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
};

/**
 * Simulates logging out by removing the session data from localStorage.
 */
export const logout = () => {
  // Your code here: Use localStorage.removeItem()
  localStorage.removeItem(SESSION_KEY);
};

/**
 * Checks if a user session exists.
 * @returns {boolean} - True if logged in, false otherwise.
 */
export const isLoggedIn = () => {
  // Your code here: Use localStorage.getItem()
  // Return true if data exists for the key, otherwise return false.
  return !!localStorage.getItem(SESSION_KEY);
};

/**
 * (Optional but helpful) Gets the authenticated user's data.
 * @returns {object | null} - The user data object or null if not logged in.
 */
export const getAuthenticatedUser = () => {
  // Your code here: Get the item from localStorage.
  // If it exists, parse it from a string back to an object and return it.
  // Otherwise, return null.
  const session = localStorage.getItem(SESSION_KEY);

  return session ? JSON.parse(session) : null;
};
