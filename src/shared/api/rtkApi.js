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
        let totalCount = null;

        for (const pair of meta.response.headers.entries()) {
          if (pair[0] === "x-total-count") {
            totalCount = pair[1];
          }
        }

        return { posts: response, totalCount };
      },
    }),

    getPostById: builder.query({
      query: ({ postId }) => `/posts/${postId}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = rtkApi;
