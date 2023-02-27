import { TextField } from "@mui/material";

const CustomInput = ({
    label = '',
    placeholder = '',
    fullWidth = true,
    name = '',
    value = '',
    onChange = () => {},
    error = false,
    helperText = false,
    variant = 'outlined',
    size = "small",
    color = '',
    type = "text"
}) => {

    return (
        <TextField 
            label={label} 
            variant={variant} 
            placeholder={placeholder} 
            fullWidth={fullWidth} 
            id={name}
            name={name}
            value={value}
            error={error}
            helperText={helperText}
            onChange={onChange}
            size={size}
            color={color}
            inputProps={
                type === 'number' ?
                { inputMode: 'numeric', pattern: '[0-9]*' }
                :
                {}
            }
        />
    )
}

export default CustomInput;