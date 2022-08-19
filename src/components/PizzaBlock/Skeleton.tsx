// @ts-ignore
import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="139" cy="117" r="115" />
        <rect x="2" y="249" rx="5" ry="5" width="280" height="27" />
        <rect x="1" y="288" rx="10" ry="10" width="280" height="88" />
        <rect x="9" y="401" rx="10" ry="10" width="90" height="27" />
        <rect x="124" y="392" rx="26" ry="26" width="157" height="48" />
    </ContentLoader>
)

export default Skeleton

