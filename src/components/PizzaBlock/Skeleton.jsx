import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={289}
    height={476}
    viewBox="0 0 289 476"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="141" cy="131" r="130" /> 
    <rect x="1" y="274" rx="0" ry="0" width="288" height="30" /> 
    <rect x="1" y="315" rx="0" ry="0" width="288" height="88" /> 
    <rect x="2" y="421" rx="0" ry="0" width="90" height="45" /> 
    <rect x="136" y="418" rx="0" ry="0" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton

