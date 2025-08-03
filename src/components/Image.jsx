import { Image } from "@imagekit/react"

const CustomImage = ({ url, className, width, height, alt }) => {
  return (
    <Image urlEndpoint={import.meta.env.VITE_IK_API_URL} src={url} alt={alt} className={className} 
    loading="lazy"
    width={width}
    height={height}
    />
  )
}

export default CustomImage