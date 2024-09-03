import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.195:5000/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmNjMjZiY2E1N2M0ZTZmZDg2NGY5NjAiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3MjQ2NTU0OTMsImV4cCI6MTcyNzI0NzQ5M30.NN6cYkMa0TplSdBQY2_0jhAAO7FkfgNHs17xoRGGL90"}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getConversation: builder.query({
      query: () => "/message/get-conversation",
    }),
    getmessageById: builder.query({
      query: (id) => `/message/get-message/${id}`,
    }),
    sendMessage: builder.mutation({
      query: (messageData) => {
        console.log("from redux", messageData);
        return{
          url: "/message/send-message",
          method: "POST",
          body: messageData
        }

      },
    }),
  }),
});

export const {
  useGetConversationQuery,
  useGetmessageByIdQuery,
  useSendMessageMutation,
} = postApi;
