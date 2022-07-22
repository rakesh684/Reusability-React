import { useState } from "react";
function useToggler(){
    const [isToggledOn,setIsToggledOn]=useState(false)
    function toggler(){
        setIsToggledOn(prev=>!prev)
    }
    // return {isToggledOn,toggler}
    return [isToggledOn,toggler]
}
export default useToggler