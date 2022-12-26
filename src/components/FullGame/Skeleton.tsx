import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
    <ContentLoader
        speed={2}
        width={500}
        height={380}
        viewBox="0 0 500 380"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="1" y="5" rx="10" ry="10" width="492" height="302" />
        <rect x="50" y="315" rx="10" ry="10" width="110" height="57" />
        <rect x="189" y="315" rx="10" ry="10" width="110" height="54" />
        <rect x="330" y="315" rx="10" ry="10" width="110" height="53" />
    </ContentLoader>
)

export default Skeleton