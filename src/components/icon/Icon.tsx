
export type IconProps = {
  src: string;
  alt: string;
};

function Icon({src, alt}: IconProps) {
    
    return (
        <img className="w-[90%] h-[auto]" src={src} alt={alt} />   
    )
}

export default Icon

