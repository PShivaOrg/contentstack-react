import contentstack from "@contentstack/delivery-sdk"

const stack = contentstack.stack({
    apiKey: import.meta.env.VITE_CONTENTSTACK_API_KEY,
    deliveryToken: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
    environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
    region: import.meta.env.VITE_CONTENTSTACK_REGION,

    live_preview: {
        enable: true,
        preview_token: import.meta.env.VITE_CONTENTSTACK_PREVIEW_TOKEN,
        host: "eu-rest-preview.contentstack.com",
    },
})

export default stack