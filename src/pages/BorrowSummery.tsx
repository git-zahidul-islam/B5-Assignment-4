import Loading from "../components/Loading";
import { useGetBorrowSummaryQuery } from "../redux/api/baseApi";

const BorrowSummery = () => {

  const { data: BookSummary = [], isLoading, isError } = useGetBorrowSummaryQuery({})
  const booksData = BookSummary?.data;
  console.log(booksData);

  if (isLoading) return <Loading />
  if (isError) return <p>Data load failed</p>

  const getBadgeClasses = (count : number) => {
    if (count >= 250) return "bg-gray-900 text-white";
    if (count >= 150) return "bg-gray-100 text-gray-900";
    return "bg-white text-gray-900 border border-gray-300";
  };

  const totalBooks = booksData.length;
  const totalBorrowings = booksData.reduce((sum, book) => sum + book.totalQuantity, 0);
  const averageBorrowings = Math.round(totalBorrowings / totalBooks);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6 min-h-[80vh]">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-green-600 rounded flex items-center justify-center">
            <span className="text-white text-sm">📚</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Library Book Statistics</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-300 rounded-lg shadow">
            <div className="flex justify-between items-center p-4 pb-2">
              <h3 className="text-sm text-gray-600">Total Books</h3>
              <div className="h-5 w-5 bg-gray-400 rounded flex justify-center items-center text-white text-xs">📖</div>
            </div>
            <div className="px-4 pb-4 text-2xl font-bold text-gray-900">{totalBooks}</div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg shadow">
            <div className="flex justify-between items-center p-4 pb-2">
              <h3 className="text-sm text-gray-600">Total Borrowings</h3>
              <div className="h-5 w-5 bg-gray-400 rounded flex justify-center items-center text-white text-xs">📈</div>
            </div>
            <div className="px-4 pb-4 text-2xl font-bold text-gray-900">{totalBorrowings.toLocaleString()}</div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg shadow">
            <div className="flex justify-between items-center p-4 pb-2">
              <h3 className="text-sm text-gray-600">Average per Book</h3>
              <div className="h-5 w-5 bg-gray-400 rounded flex justify-center items-center text-white text-xs">📊</div>
            </div>
            <div className="px-4 pb-4 text-2xl font-bold text-gray-900">{averageBorrowings}</div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-300 rounded-lg shadow">
        <div className="p-4 pb-2">
          <h2 className="text-lg font-semibold text-gray-900">Book Borrowing Records</h2>
        </div>
        <div className="px-4 pb-4 overflow-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-900 border-b border-gray-300">
              <tr>
                <th className="px-4 py-2">Book Title</th>
                <th className="px-4 py-2">ISBN</th>
                <th className="px-4 py-2 text-right">Total Quantity Borrowed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {booksData.length > 0 ? (
                booksData
                  .map((book, index: number) => (
                    <tr key={book.isbn} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 truncate max-w-xs">{book?.book.title}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-mono text-gray-600">{book.book?.isbn}</td>
                      <td className="px-4 py-3 text-right">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getBadgeClasses(
                            book.totalQuantity
                          )}`}
                        >
                          {/* {book.totalBorrowed.toLocaleString()} */}
                          {book.totalQuantity}
                        </span>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-8 text-center text-gray-500">
                    No books found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BorrowSummery;