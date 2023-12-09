import React, { useState } from 'react'
import UniswapV2 from "../../assets/UniswapV2.svg";
import UniswapV3 from "../../assets/UniswapV3.svg";
import Sushiswap from "../../assets/Sushiswap.svg";
import Aave from "../../assets/Aave.svg";
import Compound from "../../assets/Compound.svg";
import Image from 'next/image';
import { initializeWebSocket } from '../utils';
// import UniswapV2 from "../../assets/UniswapV2.svg";

const protocols = [
    {
        "name": "Uniswap V2",
        "imageUrl": UniswapV2,
        "categoryId": 1000
    },
    {
        "name": "Uniswap V3",
        "imageUrl": UniswapV3,
        "categoryId": 1100
    },
    {
        "name": "Sushiswap",
        "imageUrl": Sushiswap,
        "categoryId": 1300
    },
    {
        "name": "Aave",
        "imageUrl": Aave,
        "categoryId": 1400
    },
    {
        "name": "Compound V2",
        "imageUrl": Compound,
        "categoryId": 1500
    }

]
const HeroSection = () => {
    const [userAddress, setUserAddress] = useState();
    const [category, setCategory] = useState(null);

    const subscribeUserTransactions = (e) => {
        e.preventDefault();
        initializeWebSocket(userAddress, category)
    }

    return (

        <section class="relative overflow-hidden">
            <section class="relative flex items-center justify-center overflow-hidden">
                <div class="relative items-center w-full px-5 py-12 mx-auto lg:px-16 lg:py-24 max-w-7xl md:px-12">
                    <div class="mx-auto text-center">
                        <div>
                            <p class="text-3xl font-extrabold text-black lg::text-8xl md:text-5xl">
                                Defi events
                                <span class="md:block"> into your wallet</span>
                            </p>
                            <p class="mx-auto max-w-md lg:text-2xl mt-4 text-[#141521]/80 text-base">
                                Subscribe any user wallet address or any defi Protocols event
                            </p>
                            <div class="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
                                <form>
                                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div class="relative lg:w-96">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input value={userAddress} onChange={(e) => setUserAddress(e.target.value)} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" placeholder="Insert any user wallet address" required />
                                        <button type="submit" onClick={(e) => subscribeUserTransactions(e)} class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 dark:focus:ring-blue-800">Search</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div class="mx-auto mt-12">
                            <div class="grid w-full grid-cols-2 gap-6 mx-auto lg:grid-cols-6 md:grid-cols-3">
                                {protocols.map(({name, categoryId, imageUrl}) => (
                                   <div key={categoryId}>
                                    <figure class="relative max-w-md mx-auto lg:mx-0">
                                        <div>
                                            <figcaption class="mt-2 text-sm">
                                                <div class="flex flex-col items-center">
                                                    <div className="cursor-pointer">
                                                        <Image alt="" height={16} width={16} class="inline-block w-16 h-16 rounded-full" src={imageUrl} />
                                                    </div>
                                                    <div class="mt-3">
                                                        <p class="mt-2">
                                                            <span class="px-4 py-2 text-blue-500 rounded-full bg-pink-50">{name}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HeroSection