import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    "X-RapidAPI-Key": "f38c3a0e54msh5c7115fe449663ep1085c9jsndd5c997b568c",
    "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
};

const baseUrl = "https://crypto-news16.p.rapidapi.com/news";

const createRequest = (count) => {
    let url = `/coindesk`;
    console.log(count);

    if (count === 5) {
        url = `/top/5`;
    }
    console.log(url);

    return { url, headers: cryptoNewsHeaders };
};

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => createRequest(count),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
