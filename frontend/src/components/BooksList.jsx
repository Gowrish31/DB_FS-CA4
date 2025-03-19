import React, { useState,useEffect } from 'react'
import BooksGet from './BooksGet'

function BooksList(){

    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:8080/books")
                const result = await res.json()
                setData(result)

            } catch (error) {
                console.log(error)
                
            }
            
        }
        fetchData()

    },[])


    return(
        <div>
            {data.map((x)=>{
                return(
                    <ul>
                        <BooksGet
                            key={x._id} Books={x}
                        />
                    </ul>
                )
            })}
            
        </div>
    )

}
export default BooksList


