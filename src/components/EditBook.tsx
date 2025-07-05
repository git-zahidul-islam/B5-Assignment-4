import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetBookByIdQuery, useUpdateBookMutation } from "../redux/api/baseApi";
import type { IBook } from "../types";
import Loading from "./Loading";

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useGetBookByIdQuery(id!);
  const [updateBook, { isLoading: updating }] = useUpdateBookMutation();

  const [formData, setFormData] = useState<IBook>({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 0,
    available: true,
  });

  useEffect(() => {
    if (data?.data) {
      setFormData(data.data);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const target = e.target;
  const name = target.name;

  let value: string | number | boolean;

  if (target instanceof HTMLInputElement && target.type === "checkbox") {
    value = target.checked;
  } else if (target instanceof HTMLInputElement && target.type === "number") {
    value = Number(target.value);
  } else {
    value = target.value;
  }

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateBook({ id: id!, ...formData }).unwrap();
      alert("Book updated successfully!");
      navigate("/books");
    } catch {
      alert("Failed to update the book.");
    }
  };

  if (isLoading) return <Loading/>;
  if (isError) return <p className="text-red-600">Error loading book: {(error as any)?.data?.message || "Unknown error"}</p>;
  

  return (
    <div className="max-w-xl mx-auto p-6 bg-gradient-to-r from-gray-600/30 to-green-700/40 rounded shadow pt-5">
      <h1 className="text-2xl font-bold mb-6">Edit Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block font-medium mb-1">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        {/* Author */}
        <div>
          <label htmlFor="author" className="block font-medium mb-1">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            value={formData.author}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        {/* Genre */}
        <div>
          <label htmlFor="genre" className="block font-medium mb-1">Genre</label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Select genre</option>
            <option value="FICTION">Fiction</option>
            <option value="NON_FICTION">Non-Fiction</option>
            <option value="SCIENCE">Science</option>
            <option value="HISTORY">History</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="FANTASY">Fantasy</option>
          </select>
        </div>
        {/* ISBN */}
        <div>
          <label htmlFor="isbn" className="block font-medium mb-1">ISBN</label>
          <input
            id="isbn"
            name="isbn"
            type="text"
            value={formData.isbn}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-medium mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
          />
        </div>
        {/* Copies */}
        <div>
          <label htmlFor="copies" className="block font-medium mb-1">Copies</label>
          <input
            id="copies"
            name="copies"
            type="number"
            min={0}
            value={formData.copies}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        {/* Available */}
        <div className="flex items-center gap-2">
          <input
            id="available"
            name="available"
            type="checkbox"
            checked={formData.available}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label htmlFor="available" className="font-medium">Available</label>
        </div>

        <button
          type="submit"
          disabled={updating}
          className="bg-gradient-to-r from-gray-600 to-green-700 text-white px-4 py-2 rounded disabled:opacity-60"
        >
          {updating ? "Updating..." : "Update Book"}
        </button>
      </form>
    </div>
  );
};

export default EditBook;
