import { useEffect, useState } from "react"; 

function useCurrency( currency) {
    const [price, setPrice] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then(res => res.json())
            .then(data => {
                setPrice(data[currency])
            })
    }, [currency]);
    return price;
}

export default useCurrency;