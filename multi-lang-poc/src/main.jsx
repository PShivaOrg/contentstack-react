import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import ContentstackLivePreview from "@contentstack/live-preview-utils"
import "./index.css"
import App from "./App.jsx"
import stack from "./contentstack/contentstack"

ContentstackLivePreview.init({
    enable: import.meta.env.VITE_CONTENTSTACK_PREVIEW === "true",
    ssr: false,
    stackSdk: stack.config,
})

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
)