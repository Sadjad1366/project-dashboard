import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center px-2 mt-3">
      <p className="text-green-600 font-bold text-2xl">Counter Pro App</p>
      <div><GiHamburgerMenu color="oklch(62.7% 0.194 149.214)" fontSize={24}/></div>
    </div>
  )
}

export default Header
