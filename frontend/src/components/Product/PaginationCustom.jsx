import { useState, useEffect, useContext, useRef } from 'react';
import FilterContext from '../../context/FilterContext';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const PaginationCustom = () => {

    const [paginationItems, setPaginationItems] = useState([1])
    const { getProducts, query, searchProducts, setFilter, currentPage, setCurrentPage } = useContext(FilterContext)


    const quantityOfProducts = useRef(0)
    const limit = useRef(12)

    const setLimit = (value) => {
        if (!isNaN(value))
            limit.current = value
    }

    const setQuantityOfProducts = (value) => {
        quantityOfProducts.current = value
    }

    const handleNextPage = () => {
        if (quantityOfProducts.current > 0)
            setCurrentPage((prevPage) => prevPage + 1)
    }

    const handlePrevPage = () => {
        if (currentPage > 1)
            setCurrentPage((prevPage) => prevPage - 1)
    }

    const handlePageChange = (number) => {
        setCurrentPage(number)
    }

    const renderPagination = async (paginationQuery) => {
        setPaginationItems([1])
        const response = await getProducts(paginationQuery)
        setQuantityOfProducts(response.length)
        

        if (currentPage > 4)
            setPaginationItems(prevArray => [...prevArray, -1])

        for (let number = currentPage - 2; number <= currentPage; ++number) {
            if (number > 1)
                setPaginationItems(prevArray => [...prevArray, number])
        }

        if (quantityOfProducts.current > 0) {
            console.log(quantityOfProducts.current);
            setPaginationItems(prevArray => [...prevArray, currentPage + 1])
            setPaginationItems(prevArray => [...prevArray, -1])
        }
    }

    const scrollWindowUp = () => {
        window.scrollTo({
            top: 150,
            behavior: "instant", 
        });
    }

    useEffect(() => {

        const paginationQuery = new Map([...query.current])
        
        setLimit(query.current.get('limit'))

        paginationQuery.set('fields', 'id')
        paginationQuery.set('page', currentPage + 1)
        paginationQuery.set('limit', limit.current)
        console.log(paginationQuery)

        setFilter('page', currentPage)
        scrollWindowUp()
        searchProducts(query)
        renderPagination(paginationQuery)

    }, [currentPage])

    return (
        <Pagination>

            <Button variant='outline-primary' onClick={() => handlePrevPage()}>
                Prev
            </Button>

            {
                paginationItems.map(number => (
                    number > 0 ?
                        (

                            < Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                                {number}
                            </Pagination.Item >
                        )
                        :
                        (
                            <Pagination.Ellipsis />
                        )
                ))
            }

            <Button variant='outline-primary' onClick={() => handleNextPage()}>
                Next
            </Button>

        </Pagination>
    )
}

export default PaginationCustom
