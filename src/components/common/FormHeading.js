const FormHeading = ({
    mainTitle = '',
    subTitle = ''
}) => {
    return (
        <div>
            <p className="font-bold text-[20px]">{mainTitle}</p>
            <p className="text-[12px]">{subTitle}</p>
        </div>
    )
}

export default FormHeading;