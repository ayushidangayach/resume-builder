import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="flex w-full flex-wrap">
                {/* The below is the header */}
                <div id="header" className="w-full shadow-sm h-min px-7 py-5 sticky bg-teal-50">
                    <img 
                        src="https://resumebuild.com/app/static/images/resumebuild-logo.svg" 
                        alt="logo" 
                        width="150" 
                        className="self-start cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                </div>

                {/* The below if the variable outlet which would change according to the path */}
                <div className="px-7 w-full">
                    <Outlet />
                </div>
                
            </div>
            
        </>
    )
}

export default AppLayout;