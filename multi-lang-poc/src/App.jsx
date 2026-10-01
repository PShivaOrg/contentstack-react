import { useEffect, useState } from "react"
import { getHomepage } from "./contentstack/homepage"
import DOMPurify from "dompurify"
import "./App.css"
import Product from "./Components/product"

function App() {
  const [locale, setLocale] = useState("en-us")
  const [page, setPage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true)
      setError(null)

      try {
        const data = await getHomepage(locale)
        console.log(`Contentstack ${locale}:`, data)
        setPage(data)
      } catch (err) {
        console.error("Contentstack error:", err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadPage()
  }, [locale])

  const handleLanguageChange = (event) => {
    setLocale(event.target.value)
  }

  if (loading) {
    return <div>Loading Contentstack data...</div>
  }

  if (error) {
    return <div>Failed to load Contentstack data.</div>
  }

  if (!page) {
    return <div>No page found.</div>
  }

  // return (
  //   <div className="page-container">
  //     <hr />
  //     <h1 className="counter main-header">{page.title}</h1>
  //     <p className="">{page.description}</p>
  //      <label htmlFor="language">
  //       Language:{" "}
  //     </label>
  //     <select
  //       id="language"
  //       value={locale}
  //       onChange={handleLanguageChange}
  //     >
  //       <option value="en-us">English</option>
  //       <option value="es-es">Spanish</option>
  //     </select>
  //     <h2>uno id</h2>
  //     <p>{page.uno_id}</p>
  //     <h2>Content</h2>
  //     <p>{page.content}</p>
  //     <h2>JSON Data</h2>
  //      <h2>Testing One More Field</h2>
  //     <div
  //       dangerouslySetInnerHTML={{
  //         __html: DOMPurify.sanitize(
  //           page.adiing_one_more_filed_for_testing
  //         ),
  //       }}
  //       className="prose"
  //     />
      // <pre>
      //   {JSON.stringify(page.json_data, null, 2)}
      // </pre>
  //   </div>
  // )

   return (
  <div className="website">

    {/* =========================
        HERO SECTION
    ========================== */}
    <section className="hero-section">

      <div className="hero-content">

         <Product />

        {/* Small heading */}
        <p className="hero-eyebrow">
          CONTENTSTACK • MULTI LANGUAGE
        </p>

        {/* Main Title */}
        <h1 className="hero-title">
          {page.title}
        </h1>

        {/* Description */}
        <p className="hero-description">
          {page.description}
        </p>

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

        {/* Main Content */}
        <div className="hero-content-text">

          <h2>
            Content
          </h2>

          <p>
            {page.content}
          </p>

        </div>

      </div>

    </section>


    {/* =========================
        IMAGE SECTION
    ========================== */}

    <section className="image-section">

      <div className="image-placeholder">

        {/* 
          Later you can add your image here.

          Example:

          <img
            src="/images/your-image.jpg"
            alt="Website"
          />
        */}

        <span>
          <img src= "https://eu-images.contentstack.com/v3/assets/blte7f2ac7abc2ebaf0/bltd87edeae64cfc6c0/6abac61157eef6fe830497d6/contentstack-kickstarts.jpg" />
        </span>


      </div>

    </section>


    {/* =========================
        INFORMATION SECTION
    ========================== */}

    <section className="information-section">

      <div className="information-grid">

        {/* UNO ID */}
        <div className="info-card">

          <p className="info-label">
            UNO ID
          </p>
          <h2>
            {page.uno_id}
          </h2>

        </div>


        {/* TESTING FIELD */}
        <div className="info-card">

          <p className="info-label">
            TESTING ONE MORE FIELD
          </p>

          <div
            className="rich-text-container"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                page.adiing_one_more_filed_for_testing
              ),
            }}
          />

        </div>

      </div>

    </section>


    {/* =========================
        JSON SECTION
    ========================== */}

    {/* <section className="json-section">

      <div className="json-container">

        <p className="info-label">
          JSON DATA
        </p>

        <pre>
          {JSON.stringify(page.json_data, null, 2)}
        </pre>

      </div>

    </section> */}

  </div>
);
}

export default App