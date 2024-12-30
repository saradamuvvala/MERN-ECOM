import React from 'react'
import { useEffect,useState } from 'react'
import Pagination from 'react-js-pagination'
import { useNavigate,useSearchParams } from 'react-router-dom'

function CustomPagination({resPerPage,filteredProductsCount}) {

  console.log(resPerPage,filteredProductsCount)

    let[currentPage,setCurrentPage] =useState()

    let navigate = useNavigate()
    //query parameter value we search and get
    let[searchParams] =useSearchParams()
    
    let page=Number(searchParams.get("page")) || 1
     
    useEffect(() =>{
      setCurrentPage(page)
    },page)

     let setCurrentPageNumber = (pageNumber) =>{
      setCurrentPage(pageNumber)
       
      if(searchParams.get("page")) {
        searchParams.set("page",pageNumber)
      }else {
        searchParams.append("page",pageNumber)
      }

      let path = window.location.pathname + "?" + searchParams.toString()

      navigate(path)
     }


  return (
    <div>
      {
        filteredProductsCount > resPerPage && <Pagination 
///current page is active page
          activePage={currentPage }
          itemsCountPerPage={resPerPage}
          totalItemsCount={filteredProductsCount}
          onChange={setCurrentPage}
          nextPageText ={"Next"}
          prevPageText={"Prev"}
          firstPageText={"First"}
          lastPageText={"Last"}
          itemClass="page-item"
          linkClass="page-link"
        />
      }
    </div>
  )
}

export default CustomPagination
