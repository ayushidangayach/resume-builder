import { MenuItem, TextField } from "@mui/material";

const CustomSelect = ({
    label = '',
    value = '',
    onChange = () => {},
    options = [],
    fullWidth = false,
    name = '',
    error = false,
    helperText = false,
    size = "small",
    color = ''
}) => {

    return (
        <TextField
            value={value}
            onChange={onChange}
            select // tell TextField to render select
            label={label}
            fullWidth={fullWidth}
            name={name}
            id={name}
            error={error}
            helperText={helperText}
            size={size}
            color={color}
        >
            <MenuItem key={''} value={""}><em>None</em></MenuItem>
            {
                options.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))
            }
        </TextField>
    )
}

export default CustomSelect;