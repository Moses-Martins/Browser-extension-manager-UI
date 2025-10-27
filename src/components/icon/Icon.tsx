
export type IconProps = {
  src: string;
  alt: string;
};

function Icon({src, alt}: IconProps) {
    
    return (
        <img className="w-12" src={src} alt={alt} />   
    )
}

export default Icon

