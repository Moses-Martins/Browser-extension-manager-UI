
export type IconProps = {
  src: string;
  alt: string;
};

function Icon({src, alt}: IconProps) {
    
    return (
        <img className="w-[100%]" src={src} alt={alt} />   
    )
}

export default Icon

