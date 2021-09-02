import { mainApi } from "./mainApi";

// Define a service using a base URL and expected endpoints
export const itemsApi = mainApi.injectEndpoints({
  tagTypes: ["ITEMS"],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "/api/items",
      providesTags: ["ITEMS"]
    }),
    updateItems: builder.mutation({
      query: () => ({
        url: "/api/items",
        method: "POST"
      }),
      invalidatesTags: ["ITEMS"]
    })
  }),
  overrideExisting: false
});

export const { useGetItemsQuery, useUpdateItemsMutation } = itemsApi;
