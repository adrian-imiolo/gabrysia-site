import { servicesData } from "./servicesData"
import { useState } from "react"
function DropDown() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div>
      <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {servicesData.map(item => (<li key={item.id}>{item.name}</li>))}
      </ul>
    </div>
  )
}

export default DropDown