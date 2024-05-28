import { useEffect, useState } from 'react'
import Axios from 'axios'
import { BASE_URL, LoadingState, NetworkCallStatus } from '../../utils/AppConst'
import { useNetInfo, } from '@react-native-community/netinfo'

const useActivities = ({ index }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [skip, setSkip] = useState(0)
    const netInfo = useNetInfo();
    let timeOut;
    async function getDataListing({ skip }) {
        try {
            if (index == 1) {
                const response = await Axios.get(`${BASE_URL}/products?limit=10&skip=${skip}&select=title,price,thumbnail,category,brand,shippingInformation`)
                if (response?.status == NetworkCallStatus.STATUS_CODE_200) {
                    const products = response?.data?.products
                    if (skip == 0) {
                        setData(products);
                    } else {
                        setData((prev) => [...prev, ...products]);
                    }
                    setSkip(skip)
                    setIsLoading(null)
                }
            } else if (index == 2) {
                const response = await Axios.get(`${BASE_URL}/carts?limit=10&skip=${skip}`)
                if (response?.status == NetworkCallStatus.STATUS_CODE_200) {
                    const carts = response?.data?.carts
                    if (skip == 0) {
                        setData(carts);
                    } else {
                        setData((prev) => [...prev, ...carts]);
                    }
                    setSkip(skip)
                    setIsLoading(null)
                }

            } else if (index == 3) {
                const response = await Axios.get(`${BASE_URL}/recipes?limit=10&skip=${skip}`)
                if (response?.status == NetworkCallStatus.STATUS_CODE_200) {
                    const recipes = response?.data?.recipes
                    if (skip == 0) {
                        setData(recipes);
                    } else {
                        setData((prev) => [...prev, ...recipes]);
                    }
                    setSkip(skip)
                    setIsLoading(null)
                }

            } else if (index == 4) {
                const response = await Axios.get(`${BASE_URL}/posts?limit=10&skip=${skip}`)
                if (response?.status == NetworkCallStatus.STATUS_CODE_200) {
                    const posts = response?.data?.posts
                    if (skip == 0) {
                        setData(posts);
                    } else {
                        setData((prev) => [...prev, ...posts]);
                    }
                    setSkip(skip)
                    setIsLoading(null)
                }
            } else if (index == 5) {
                const response = await Axios.get(`${BASE_URL}/users?limit=10&skip=${skip}`)
                if (response?.status == NetworkCallStatus.STATUS_CODE_200) {
                    const users = response?.data?.users
                    if (skip == 0) {
                        setData(users);
                    } else {
                        setData((prev) => [...prev, ...users]);
                    }
                    setSkip(skip)
                    setIsLoading(null)
                }
            }
        } catch (error) {
            console.log("🚀 ~ catch ~ errror:", error)
            return;
        }

    }
    useEffect(() => {
        setIsLoading(LoadingState.INITIAL)
        getDataListing({ skip: 0 })
        if (netInfo?.isInternetReachable) {
            clearTimeout(timeOut)
            getDataListing({ skip: 0 })
        } else if (netInfo.isInternetReachable === false && netInfo?.isConnected === false) {
            timeOut = setTimeout(() => {
                setIsLoading(null)
            }, 3000)
        }
    }, [netInfo?.isInternetReachable])

    return {
        setIsLoading,
        isLoading,
        getDataListing,
        data,
        setData,
        skip,
        setSkip,
        netInfo
    }
}
export default useActivities