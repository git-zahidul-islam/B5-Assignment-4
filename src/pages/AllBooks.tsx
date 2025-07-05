import { useNavigate } from "react-router";
import { useDeleteBookMutation, useGetBooksQuery } from "../redux/api/baseApi";
import type { IBook } from "../types";
import { Edit, Trash2, View } from "lucide-react";
import Loading from "../components/Loading";

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
    const confirm = window.confirm("Are you sure you want to delete this book?");
    if (confirm) {
      try {
        await deleteBook(id).unwrap();
        alert("Book deleted successfully!");
      } catch (err) {
        alert("Failed to delete book.");
        console.error("Delete book error:", err);
      }
    }
  };


  if (isLoading) return <Loading/>

  if (isError) {
    return (
      <div className="text-center text-red-600 mt-8">Failed to load books.</div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl py-8 px-4">
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
