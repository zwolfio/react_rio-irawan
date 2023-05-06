import { gql } from "@apollo/client";

export const getProduct = gql `
    query getProduct {
        product {
        id
        productCategory
        productDescription
        productFreshness
        productName
        productPrice
        uuid
        }
    }  
`

export const deleteProduct = gql `
    mutation deleteProduct($id: Int!) {
        delete_product_by_pk(id: $id){
            id
        }  
    }
`

export const insertProduct = gql `
mutation InsertProduct(
    $productName: String!, 
    $productCategory: String!, 
    $productFreshness: String!, 
    $productDescription: String!, 
    $productPrice: Int!
    ) {
        
        insert_product_one(
            object: {
                productName: $productName, 
                productCategory: $productCategory, 
                productFreshness: $productFreshness, 
                productDescription: $productDescription, 
                productPrice: $productPrice
            }
        ) 
            {
                id
            }
  }
`

export const updateProduct = gql `
mutation updateProduct(
    $uuid: uuid!, 
    $productName: String!, 
    $productCategory: String!, 
    $productFreshness: String!, 
    $productDescription: String!, 
    $productPrice: Int!
    ) {
    update_product(
              where: { uuid: { _eq: $uuid } }
              _set: {
                  productCategory: $productCategory
                  productDescription: $productDescription
                  productFreshness: $productFreshness
                  productName: $productName
                  productPrice: $productPrice
              }
          ) {
              affected_rows
          }
  }
`

export const getDetailProduct = gql `
query getDetail($uuid: uuid) {
    product(where: {uuid: {_eq: $uuid}}){
      productName,
      productPrice,
      productCategory,
      productFreshness,
      productDescription,
      uuid,
      id
    }
  }
`

export const search = gql `
query search ($productName: String!) {
    product(where: {productName: {_eq: $productName}}) {
        productName,
        productPrice,
        productCategory,
        productFreshness,
        productDescription,
        uuid,
        id
    }
  }
`