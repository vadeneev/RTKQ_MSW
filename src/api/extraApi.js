import { mainApi } from "./mainApi";

// Define a service using a base URL and expected endpoints
export const extraApi = mainApi.injectEndpoints({
  tagTypes: ["ITEMS"],
  endpoints: (builder) => ({
    updateStuff: builder.mutation({
      query: () => ({
        url: "/api/stuff",
        method: "POST"
      }),
      invalidatesTags: ["ITEMS"]
    })
  }),
  overrideExisting: false
});

export const { useUpdateStuffMutation } = extraApi;
