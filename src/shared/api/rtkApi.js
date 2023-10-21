import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: ({ limit, page }) => ({
        url: `/posts?_limit=${limit}&_page=${page}`,
        method: "GET",
      }),
      transformResponse: async (response, meta) => {
        for (const pair of meta.response.headers.entries()) {
          if (pair[0] === "x-total-count") {
            localStorage.setItem("jsonplaceholder_total_count_posts", pair[1]);
          }
        }

        return response;
      },
    }),

    getPostById: builder.query({
      query: ({ postId }) => `/posts/${postId}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = rtkApi;
