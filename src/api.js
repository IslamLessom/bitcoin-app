import { cryptoAssets, cryptoData } from './data'

export function fakeFetchCrypto() {
    return Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 2000)
    })
}

export function fetchAssets() {
    return Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 2000)
    })
}