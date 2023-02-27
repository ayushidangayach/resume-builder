import { Button } from "@mui/material"

const CustomButton = ({
    textColor = "#ffffff",
    bgColor = "rgb(22 163 74 / 1)",
    text = 'Save and Next',
    onClickHandler = () => {},
    variant = "contained",
    extraStyles = {},
    type = ""
}) => {
    return (
        <Button 
            variant={variant}
            sx={{
                ...extraStyles,
                backgroundColor: bgColor,
                color: textColor,
                textTransform: "unset"
            }}
            type={type}
            onClick={onClickHandler}
        >
            {text}
        </Button>
    )
}

export default CustomButton