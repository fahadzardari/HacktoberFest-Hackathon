import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import { addCategoryWithUserId } from "../services/firebase.service";
export default function Category() {
  const [title, setTitle] = useState("");
  const userId = JSON.parse(localStorage.getItem("userId"));
  return (
    <Layout>
      <div>
        <form class="max-w-sm mx-auto" onSubmit={
          (e) => {
            e.preventDefault();
            addCategoryWithUserId(userId , title);
          }
        }>
          <h1 className="text-center text-3xl font-bold">Add Category</h1>
          <div class="mb-5">
            <label for="title" class="block mb-2 text-sm font-medium ">
              Category Title
            </label>
            <input
              type="title"
              id="title"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Food"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              } }
              required
            />
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Category
          </button>
        </form>
      </div>
    </Layout>
  );
}
