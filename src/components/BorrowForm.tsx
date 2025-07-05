import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useBorrowBookMutation,
  useGetBookByIdQuery,
} from "../redux/api/baseApi";
import Loading from "./Loading";
import toast from "react-hot-toast";

const BorrowForm = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetBookByIdQuery(bookId!);
  const [borrowBook, { isLoading: submitting }] = useBorrowBookMutation();

  const book = data?.data;

  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!book || quantity > book.copies) {
      toast.success("Quantity exceeds available copies.");
      return;
    }

    try {
      await borrowBook({
        book: bookId,
        quantity,
        dueDate,
      }).unwrap();
      toast.success('Borrowed successfully!')
      navigate("/borrow-summary");
    } catch (err) {
      toast.success('Borrow failed.')
      console.error("Borrow error:", err);
    }
  };

  if (isLoading) return <Loading/>;
  if (isError || !book) return <p>Book not found.</p>;

  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-gray-600/40 to-green-700/30 p-6 rounded shadow min-h-[80vh]">
      <h1 className="text-2xl font-bold mb-4">Borrow: {book.title}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Quantity</label>
          <input
            type="number"
            min={1}
            max={book.copies}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Available Copies: {book.copies}
          </p>
        </div>

        <div>
          <label className="block font-medium mb-1">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-gradient-to-r from-gray-600 to-green-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {submitting ? "Borrowing..." : "Confirm Borrow"}
        </button>
      </form>
    </div>
  );
};

export default BorrowForm;
