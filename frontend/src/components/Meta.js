import React from 'react'
import { Helmet } from 'react-helmet'
const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content="{description}" />
            <meta name="keyword" content={keywords} />
        </Helmet>
    )
}
Meta.defaultProps = {
    title: 'Welcome to Ecommerce',
    keywords: 'Electronics, latest products, latest Electronics',
    description: 'Excellent products for cheap price'
}

export default Meta
