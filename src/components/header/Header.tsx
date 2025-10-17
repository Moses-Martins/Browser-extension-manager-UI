import Mode from '../../assets/images/icon-moon.svg'
import Logo from '../../assets/images/logo.svg'

function Header() {


  return (
    <>
      <header className="flex items-center justify-between w-[90vw] h-[8vh] mt-[4vh] mx-[auto] rounded-[10px] bg-white">
        <img className="mx-[9px] h-[80%]" src={Logo} alt="Logo"/>
        <img className="mx-[9px] rounded-[9px] p-[5px] bg-[hsl(0_0%_93%)]" src={Mode} alt="Logo"/>
      </header>
    </>
  )
}

export default Header

