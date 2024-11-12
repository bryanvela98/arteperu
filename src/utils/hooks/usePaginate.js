import { useState } from "react"


export const usePaginate = (array, itemPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    let totalPages = Math.ceil(array.length / itemPerPage);

    const currentArray = array.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    return { currentArray, totalPages, nextPage, prevPage, currentPage, setCurrentPage }
}

