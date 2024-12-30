import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


//from toolkit query
export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery:fetchBaseQuery({baseUrl:'/api'}),
    endpoints:(builder) =>({
        //this is for get request
        getProducts:builder.query({
            query: (params) => ({
                url: '/products',
                params: {
                  page: params?.page
                }
              }
              )
        }),
       //get product details 
        getProductDetials:builder.query({
            query:(id) => `/products/${id}`
        })

    })
})

//useGetProductsQuery is a custom hook

export const {useGetProductsQuery,useGetProductDetailsQuery} = productApi
