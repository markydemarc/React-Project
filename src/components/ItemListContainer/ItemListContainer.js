import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
import { Loader } from '../Loader/Loader'


export const ItemListContainer = () => {

    const [data, setData] = useState([])
    const {loading, setLoading} = useContext(UIContext)
    const { catId } = useParams()

    useEffect( ()=> {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')

        if (catId) {
            const filtrado = productos.where('category', '==', catId)
            filtrado.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    console.log(data)
                    setData(data)
                })
                .finally(()=> {
                    setLoading(false)
                })
        } else {
            productos.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    console.log(data)
                    setData(data)
                })
                .finally(()=> {
                    setLoading(false)
                })
        }

    }, [catId, setLoading])


    return (
        <>
            {loading 
             ? <Loader/>
             : <ItemList productos={data}/>    
            }
        </>
    )
}



