import React from 'react';
import PropTypes from 'prop-types';

import { BaseForm } from '@components/BaseForm';
import { SLabel } from '@styled/forms/SLabel';
import { SInput } from '@styled/forms/SInput';
import { SSubmitButton } from '@styled/forms/SSubmitButton';
import { SWrapCol } from '@styled/flex-wrappers/SWrapCol';

export function SignUp() {
    const handleSubmit = (authData, {setErrors}) => {
        //e.preventDefault(); // Formik предотвращает стандартное поведение Submit по умолчанию
        if (authData.password !== authData.confirmPassword) {
            setErrors({
                confirmPassword: 'password does not match',
            });
        }
        console.log(authData);
    }

    return (
        <BaseForm 
            formikData={{
                onSubmit: handleSubmit,
                initialValues: {
                    username: '1',
                    password: '2',
                    confirmPassword: 3,
                },
            }}
            renderForm={({
                values,
                errors,
                status,
                handleChange,
                afterSubmitPhrease,
                isSubmitting,
            }) => (
                <SWrapCol>
                    <SLabel htmlFor="uname">Username</SLabel>
                    <SInput 
                        id="uname" 
                        type={'text'} 
                        name={'username'} 
                        onChange={handleChange} 
                        value={values.username} 
                    />
                    <SLabel htmlFor="pass">Password</SLabel>
                    <SInput 
                        id="pass" 
                        type={'password'} 
                        name={'password'} 
                        onChange={handleChange} 
                        value={values.password}
                    />
                    <SLabel htmlFor="cpass">Confirm password</SLabel>
                    <SInput 
                        id="cpass" 
                        type={'password'} 
                        name={'confirmPassword'} 
                        onChange={handleChange} 
                        value={values.confirmPassword}
                    />
                    {errors.confirmPassword}
                    <SSubmitButton type={'submit'}>{isSubmitting ? 'Sign Up' : afterSubmitPhrease}</SSubmitButton>
                </SWrapCol>
            )}
        />
    )
}

SignUp.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
}