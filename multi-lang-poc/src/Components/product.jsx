import React, { useEffect, useState } from "react";
import { getProductPage } from "../contentstack/productpage";


const Product = () => {
    const [locale, setLocale] = useState("en-us");
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loading = async () => {
            setLoading(true)
            setError(null)

            try {
                const data = await getProductPage(locale)
                console.log(`Contentstack ${locale}:`, data)
                setProduct(data)

            } catch (err) {
                console.error("Contentstack error:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        loading()

    }, [locale])

    const handleLanguageChange = (event) => {
    setLocale(event.target.value)
  }

    if (loading) {
        return <div>Loading Contentstack product data...</div>
    }

    if (error) {
        return <div>Failed to load Contentstack product data.</div>
    }

    if (!product) {
        return <div>No product found.</div>
    }


    return <>
    <div className="Product-website">
        <div>
            <h1 className="title">{product.title}</h1>
            <p>{product.product_name}</p>

              {/* Language Dropdown */}
        <div className="language-wrapper">

          <label htmlFor="language">
            Language
          </label>

          <select
            id="language"
            value={locale}
            onChange={handleLanguageChange}
          >
            <option value="en-us">
              English
            </option>

            <option value="es-es">
              Spanish
            </option>
          </select>

        </div>
        </div>
    </div>
    </>
}


export default Product