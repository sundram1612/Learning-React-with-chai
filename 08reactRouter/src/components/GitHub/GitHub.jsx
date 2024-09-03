import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { json } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch(`https://api.github.com/users/sundram1612`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             setData(data)
//         })
//     }, [])

    return (
        <div className='flex items-center justify-around text-center m-4 bg-gray-600 py-4'>
            <img src={data.avatar_url} alt="GitHub DP"  className='rounded-lg w-40 text-center' />
            <h1 className='text-white p-4 text-3xl text-left'>GitHub Name: {data.name} <br /> GitHub Followers: {data.followers}</h1>
            
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sundram1612')
    return response.json()
}