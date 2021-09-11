import { stock } from '../data/stock'

export const pedirDatos = () => {

        return new Promise((resolve, rejects) => {

            setTimeout(()=>{
                resolve(stock)
            }, 1000)

        })
} 