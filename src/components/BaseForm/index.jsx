import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

export function BaseForm({renderForm, formikData}) {
    const handleSubmit = (...args) => {
        console.log('commonAct');
        return formikData.onSubmit.call(null, ...args);
    }

    const afterSubmitPhrase = 'Loading';
    return (
        <Formik
            // formik сам делает форму зависимой, управляя состоянием этой формы
            {...formikData}
            onSubmit={handleSubmit}
        >
            {
                // передаем render props для formik
                ({
                    values,
                    handleSubmit,
                    errors,
                    status,
                    handleChange, 
                    isSubmitting,
                    dirty,
                    handleBlur,
                    handleReset,
                    isValid,
                    isValidating,
                    resetForm,
                    setErrors,
                    setFieldError,
                    setFieldTouched,
                    submitForm,
                    submitCount,
                    setStatus,
                    setSubmitting,
                    setTouched,
                    setValues,
                    touched,
                    validateForm,
                    ValidateField,
                    component,
                    render,
                    children,
                    enableReinitialize,
                    isInitialValid,
                    initialErrors,
                    initialStatus,
                    initialTouched,
                    initialValues,
                    onReset,
                    onSubmit,
                    validate,
                    validateOnBlur,
                    validateOnChange,
                    validateOnMount,
                    validationSchema,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        {
                            renderForm({
                                values,
                                handleSubmit,
                                errors,
                                status,
                                handleChange, 
                                isSubmitting,
                                dirty,
                                handleBlur,
                                handleReset,
                                isValid,
                                isValidating,
                                resetForm,
                                setErrors,
                                setFieldError,
                                setFieldTouched,
                                submitForm,
                                submitCount,
                                setStatus,
                                setSubmitting,
                                setTouched,
                                setValues,
                                touched,
                                validateForm,
                                ValidateField,
                                component,
                                render,
                                children,
                                enableReinitialize,
                                isInitialValid,
                                initialErrors,
                                initialStatus,
                                initialTouched,
                                initialValues,
                                onReset,
                                onSubmit,
                                validate,
                                validateOnBlur,
                                validateOnChange,
                                validateOnMount,
                                validationSchema,
                                afterSubmitPhrase,
                            })
                        }
                    </Form>
                )
            }
        </Formik>
    )
}

BaseForm.propTypes = {
    renderForm: PropTypes.func.isRequired,
    formikData: PropTypes.object.isRequired,
}

/* Зависимая форма на React
    - создаем состояние для  полей формы
        (важно задать изначальные значения состояния, иначе форма не будет зависимой);
    - в ванильном JS: form.login.value чтобы взять значение инпута из реального DOM дерева
        React работает с виртуальным DOM
    - value={authData.} - для инпута задается состоянием (вместо поведение вывода инпута по умолчанию).
        Это делает форму независимой. 
        Если у инпута не будет обработчика onChange={handleChangeInput},
        который меняет состояние после ввода,
        то в инпуте значение будет изначальное состояние - login: '' */

/*// состояние зависимой формы (без Formik)
const [authData, setAuthData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
});
// управление состоянием зависимой формы
const handleChangeInput = (e) => {
    setAuthData({
        ...authData,
        // пример: для валидации "только цифры" value не isNaN при преобразовании к числу
        // пример: введенное value должно быть в UpperCase
        [e.target.name]: e.target.value.toUpperCase(), 
    });
}*/