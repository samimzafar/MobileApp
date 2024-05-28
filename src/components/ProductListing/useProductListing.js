import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { LoadingState } from '../../utils/AppConst'

const useProductListing = () => {
    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [skip, setSkip] = useState(0)
    async function getProductListing({ skip }) {
        try {
            const response = await Axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price,thumbnail,category,brand,shippingInformation`)
            if (response?.status == 200) {
                const products = response?.data?.products
                if (skip == 0) {
                    setProductData(products);
                } else {
                    setProductData((prev) => [...prev, ...products]);
                }
                setSkip(skip)
                setIsLoading(null)
            }
        } catch (error) {
            console.log("🚀 ~ catch ~ errror:", error)
            return;
        }

    }
    useEffect(() => {
        setIsLoading(LoadingState.INITIAL)
        getProductListing({ skip: 0 })
    }, [])

    return {
        setIsLoading,
        isLoading,
        getProductListing,
        productData,
        setProductData,
        skip,
        setSkip
    }
}

export default useProductListing