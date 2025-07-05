import { useNavigate } from "react-router";
import { useDeleteBookMutation, useGetBooksQuery } from "../redux/api/baseApi";
import type { IBook } from "../types";
import { Edit, Trash2, View } from "lucide-react";
import Loading from "../components/Loading";
import toast from "react-hot-toast"; // Import toast

const AllBooks = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetBooksQuery({});
  const books = data?.data || [];
  const [deleteBook] = useDeleteBookMutation();

  const handleEdit = (id: string) => {
    navigate(`/edit-book/${id}`);
  };

  const handleBorrow = (id: string) => {
    navigate(`/borrow/${id}`);
  };

  const handleView = (id:string) => {
    navigate(`/book/${id}`)
  }

  const handleDelete = async (id: string) => {
    // Using react-hot-toast.confirm for a more integrated confirmation dialog
    toast.custom((t) => (
      <div className={`${t.visible ? 'animate-enter' : 'animate-leave'}
        max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 pt-0.5">
              <Trash2 className="h-6 w-6 text-red-500" aria-hidden="true" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Confirm Deletion
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              // If confirmed, proceed with deletion
              (async () => {
                try {
                  await deleteBook(id).unwrap();
                  toast.success("Book deleted successfully!");
                } catch (err) {
                  toast.error("Failed to delete book.");
                  console.error("Delete book error:", err);
                }
              })();
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    ), { duration: Infinity }); // Make the custom toast persistent until user action
  };


  if (isLoading) return <Loading/>

  if (isError) {
    return (
      <div className="text-center text-red-600 mt-8">Failed to load books.</div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl py-8 px-4 min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-6 text-center">All Books</h1>
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Author</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Genre</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">ISBN</th>
              <th className="px-4 py-3 text-center text-sm font-semibold">Copies</th>
              <th className="px-4 py-3 text-center text-sm font-semibold">Availability</th>
              <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {books.length > 0 ? (
              books.map((book: IBook) => (
                <tr key={book._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{book.title}</td>
                  <td className="px-4 py-2">{book.author}</td>
                  <td className="px-4 py-2">{book.genre}</td>
                  <td className="px-4 py-2">{book.isbn}</td>
                  <td className="px-4 py-2 text-center">{book.copies}</td>
                  <td
                    className={`px-4 py-2 text-center font-medium ${book.available && book.copies > 0
                        ? "text-green-600"
                        : "text-red-600"
                      }`}
                  >
                    {book.available && book.copies > 0 ? "Available" : "Unavailable"}
                  </td>
                  <td className="flex items-center justify-center">
                    <button onClick={() => handleEdit(book._id!)} className="text- px-2 py-1 rounded text-xs hover:text-gray-500">
                      <Edit />
                    </button>
                    <button onClick={() => handleDelete(book._id!)} className="text-red-500 px-2 py-1 rounded hover:text-red-700">
                      <Trash2 />
                    </button>
                    <button onClick={() => handleView(book._id!)} className="text-yellow-500 hover:text-yellow-700 px-2 py-1 rounded">
                      <View/>
                    </button>
                    <button onClick={() => handleBorrow(book._id!)} className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700">
                      Borrow
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;