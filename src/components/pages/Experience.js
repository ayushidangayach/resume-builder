import { useFormik } from "formik";
import countries from "../../utils/countries";
import CustomInput from "../common/CustomInput";
import CustomSelect from "../common/CustomSelect";
import FormHeading from "../common/FormHeading";
import * as yup from 'yup';
import { useState } from "react";
import CustomButton from "../common/CustomButton";
import FormWrapper from "../common/FormWrapper";

const initialValuesOfForm = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    email: '',
    phone: ''
}

const validationSchema = yup.object({
    firstName: yup
        .string('Enter your first name')
        .trim()
        .required('First name is required'),
    country: yup
        .string('Select your country')
        .required('Country is required'),
    email: yup
        .string("Enter your email")
        .trim()
        .required("Email is required")
        .email("Enter a valid email")
});

const Experience = () => {
    const [initialValues] = useState(initialValuesOfForm)

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            localStorage.setItem('ABC', JSON.stringify(values))
        },
    });

    
    return (
        <div className="flex w-full flex-col gap-2 mt-4 ">
            <FormHeading mainTitle="EXPERIENCE" subTitle="List your work experience, from the most recent to the oldest. Feel free to use our pre-written examples." />

            <FormWrapper>
                <form onSubmit={formik.handleSubmit} className="flex md:w-full lg:w-[75%] flex-wrap gap-6 mt-[50px]">
                    <div className="w-full flex gap-3">
                        <CustomInput 
                            label="First name" 
                            placeholder="e.g. Ayushi" 
                            fullWidth={true}
                            name="firstName"
                            value={formik?.values?.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <CustomInput 
                            label="Last name" 
                            placeholder="e.g. Dangayach" 
                            fullWidth={true}
                            name="lastName"
                            value={formik?.values?.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                    </div>

                    <CustomInput 
                        label="Address" 
                        placeholder="e.g. 5 MD Road"
                        fullWidth={true}
                        name="address"
                        value={formik?.values?.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                    />

                    <div className="w-full flex gap-3">
                        <CustomInput 
                            label="City" 
                            placeholder="e.g. Jaipur"
                            fullWidth={true}
                            name="city"
                            value={formik?.values?.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                        <CustomSelect 
                            label="Country"
                            options={countries} 
                            fullWidth={true}
                            name="country"
                            value={formik?.values?.country}
                            onChange={(e) => formik.setFieldValue('country', e.target.value)}
                            error={formik.touched.country && Boolean(formik.errors.country)}
                            helperText={formik.touched.country && formik.errors.country}
                        />
                        <CustomInput 
                            label="Zip code" 
                            placeholder="e.g. 302354"
                            fullWidth={true}
                            name="zipCode"
                            value={formik?.values?.zipCode}
                            onChange={formik.handleChange}
                            error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                            helperText={formik.touched.zipCode && formik.errors.zipCode}
                            type="number"
                        />
                    </div>

                    <div className="w-full flex gap-3">
                        <CustomInput 
                            label="Email address" 
                            placeholder="e.g. ayushi.d@resume.com"
                            fullWidth={true}
                            name="email"
                            value={formik?.values?.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <CustomInput 
                            label="Phone" 
                            placeholder="e.g. 9876543210"
                            fullWidth={true}
                            name="phone"
                            value={formik?.values?.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            type="number"
                        />
                    </div>
                    
                    <div className="flex justify-between w-full">
                        <CustomButton bgColor="grey" text="Back" />
                        <CustomButton type="submit" text="Save & Next" />
                    </div>
                    
                </form>
            </FormWrapper>
        </div>
    )
}

export default Experience;