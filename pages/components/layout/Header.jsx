import Logo from "../ui/Logo";
import {FaUserAlt,FaShoppingCart,FaSearch} from "react-icons/fa";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { Search } from "../ui/Search";

function Header() {

  const[isSearchModal,setIsSearchModal]=useState(false)



  return (
    <div>
    <div className="h-[5.5rem] bg-secondary">
        <div className="container mx-auto text-white  flex justify-between items-center h-full">
        <div> <Logo/></div>

<nav>
    <ul className="flex gap-x-2">
        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">Home</a></li>
        <li className="px-[5px] py-[10px] uppercase "><a href="">Menu</a></li>
        <li className="px-[5px] py-[10px] uppercase "><a href="">About</a></li>
        <li className="px-[5px] py-[10px] uppercase "><a href="">Book Table</a></li>




    </ul>



</nav>



<div className="flex gap-x-4 items-center">
    <a href=""><FaUserAlt className="hover:text-primary transition-all"/></a>
    <a href=""><FaShoppingCart className="hover:text-primary transition-all"/></a>
    <button onClick={()=>setIsSearchModal(true)}><FaSearch className="hover:text-primary transition-all"/></button>
    <a href=""><button className="btn-primary">Order Online</button></a>
</div>
</div>
        </div>
        {isSearchModal && <Search setIsSearchModal={setIsSearchModal}/>}
    </div>
    
  )
}

export default Header