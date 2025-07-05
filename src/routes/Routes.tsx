import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import BorrowSummery from "../pages/BorrowSummery";
import Home from "../pages/Home";
import EditBook from "../components/EditBook";
import BorrowForm from "../components/BorrowForm";
import BookDetails from "../pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "books",
        element: <AllBooks />,
      },
      {
        path : "book/:id",
        element: <BookDetails/>
      },
      {
        path: "create-book",
        element: <AddBook />,
      },
      {
        path: "borrow-summary",
        element: <BorrowSummery />,
      },
      {
        path: "edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "borrow/:bookId",
        element: <BorrowForm />,
      },
    ],
  },
]);
