import React,{useState} from 'react'

function Books(){

    const [data , setData] = useState({
        title:"",
        genre:"",

    })

    const handleSub = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:8080/books")
            const result = await res.json()
            console.log(result.message)
            
        } catch (error) {
            console.log(error)
            
        }
        
    }

    const handleChange = async (e) => {
        setData({
            ...data,
            [e.target.id]:e.target.value
        })
        
    }


    return(
        <div>
            <form action="" onSubmit={handleSub}>
                <br />

                <label htmlFor="">Title:
                    <input type="text" id='title' value={data.title} onChange={handleChange}/>
                </label>
                <br />
                <br />

                <label htmlFor="">genre:
                    <input type="text" id='genre' value={data.genre} onChange={handleChange}/>
                </label>

            </form>
        </div>
    )
}

export default Books