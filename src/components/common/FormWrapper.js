import { useLocation } from "react-router-dom";
import constants from "../../utils/constants";

const FormWrapper = ({
    children
}) => {
    const { pathname } = useLocation();
    
    return (
        <div className="flex flex-wrap items-center gap-10">
            {children}
            <div className="w-[25%] p-3 text-[12px] max-w-max text-center ml-2" style={{border: "1px dashed #17a34a"}}>
                {constants.SIDE_BAR_TEXT[pathname]}
            </div>
        </div>
    )
}

export default FormWrapper;