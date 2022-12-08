import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
    <ContentLoader
        speed={2}
        width={245}
        height={380}
        viewBox="0 0 245 380"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="-3" y="-5" rx="20" ry="20" width="245" height="325" />
        <rect x="4" y="333" rx="15" ry="15" width="238" height="37" />
    </ContentLoader>
)

export default Skeleton

