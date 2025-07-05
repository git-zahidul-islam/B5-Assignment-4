import { Link } from "react-router";
import { useGetBooksQuery } from "../redux/api/baseApi";
import type { IBook } from "../types";
import Loading from "../components/Loading";

const placeholderImg =
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80";

const Home = () => {
  const { data, isLoading, isError } = useGetBooksQuery({ limit: 50});
  const books = data?.data || [];

  if (isLoading) return <Loading/>

  if (isError) {
    return (
      <div className="text-center text-red-600 mt-8">Failed to load books.</div>
    );
  }

  return (
    <div className="mx-auto py-5">
      <h1 className="text-3xl font-bold mb-8 text-center font-primary">
        All Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books && books.length > 0 ? (
          books.map((book: IBook) => (
            <Link
              to={`/book/${book._id}`}
              key={book._id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition p-4"
            >
              <div className="relative">
                <img
                  src={placeholderImg}
                  alt={book.title}
                  className="h-48 w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = placeholderImg;
                  }}
                />
                {/* Genre badge */}
                <span
                  className={`absolute top-2 right-2 text-white text-xs px-3 py-1 rounded-full shadow font-semibold ${
                    book.genre === "FICTION"
                      ? "bg-blue-600"
                      : book.genre === "NON_FICTION"
                      ? "bg-gray-700"
                      : book.genre === "SCIENCE"
                      ? "bg-green-600"
                      : book.genre === "HISTORY"
                      ? "bg-yellow-600"
                      : book.genre === "BIOGRAPHY"
                      ? "bg-pink-600"
                      : book.genre === "FANTASY"
                      ? "bg-purple-600"
                      : "bg-purple-400"
                  }`}
                >
                  {book.genre}
                </span>
              </div>
              <div className="mt-2 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-1 flex items-center gap-2 font-primary">
                  {book.title
                    ? book.title.length > 25
                      ? `${book.title.slice(0, 25)}...`
                      : book.title
                    : ""}
                </h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold text-base font-primary">
                    Author:
                  </span>{" "}
                  {book.author}
                </p>
                <p className="text-gray-500 mb-1 text-base">
                  <span className="font-semibold font-primary">ISBN:</span>{" "}
                  {book.isbn}
                </p>
                <p className="text-gray-500 mb-2 text-sm font-primary line-clamp-2">
                  {book.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-gray-500">
                    Copies: {book.copies}
                  </span>

                  <span
                    className={`ml-2 text-xs font-semibold ${
                      book.available && book.copies > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {book.available && book.copies > 0
                      ? "Available"
                      : "Unavailable"}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No books found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
