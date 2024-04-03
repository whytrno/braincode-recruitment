type ImageProps = {
    src: string;
    alt: string;
}

const Image = ({src, alt}: ImageProps) => {
    return (
        <img src={src} alt={alt} class="rounded-lg object-cover object-top h-full w-full"/>
    )
}

export default Image;