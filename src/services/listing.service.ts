import { apiSlice } from "./base-query";

export const listingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllListing: builder.query({
      query: () => ({
        url: "/listing",
        method: "GET",
      }),
    }),
    getListingDetail: builder.query({
      query: (slug: string) => ({
        url: `/listing/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllListingQuery, useGetListingDetailQuery } = listingApi;
