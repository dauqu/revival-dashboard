import React from 'react'
import { BsListNested } from 'react-icons/bs'

const Navbar = ({toggleSidebar}) => {
	return (
		<div style={{ position: "sticky", top: 0, left: 0, zIndex: 45 }}>
			<div className="w-full top-0 z-20 flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-300 h-full">
				<div className="flex-none w-56 flex flex-row items-center">
					<BsListNested size={25} className="lg:hidden cursor-pointer mr-4" onClick={toggleSidebar} />
					<strong className="capitalize ml-1 flex-1">cleopatra</strong>
				</div>
				<hr />
			</div>
		</div>

	)
}

export default Navbar;