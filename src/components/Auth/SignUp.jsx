import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SInput } from '@styled/SInput';

export function SignUp() {
    /* Зависимая форма на React
        - создаем состояние для  полей формы
            (важно задать изначальные значения состояния, иначе форма не будет зависимой);
        - в ванильном JS: form.login.value чтобы взять значение инпута из реального DOM дерева
            React работает с виртуальным DOM
        - value={authData.} - для инпута задается состоянием (вместо поведение вывода инпута по умолчанию).
            Это делает форму независимой. 
            Если у инпута не будет обработчика onChange={handleChangeInput},
            который меняет состояние после ввода,
            то в инпуте значение будет изначальное состояние - login: ''
    */

    const [authData, setAuthData] = useState({
        login: '',
        password: '',
        confirmPassword: '',
    });

    const handleChangeInput = (e) => {
        setAuthData({
            ...authData,
            // пример: для валидации "только цифры" value не isNaN при преобразовании к числу
            // пример: введенное value должно быть в UpperCase
            [e.target.name]: e.target.value.toUpperCase(), 
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(authData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <SInput type={'text'} name={'login'} onChange={handleChangeInput} value={authData.login} />
            <SInput type={'text'} name={'password'} onChange={handleChangeInput} value={authData.password} />
            <SInput type={'text'} name={'confirmPassword'} onChange={handleChangeInput} value={authData.confirmPassword} />
            <SInput type={"submit"} />
        </form>
    )
}

SignUp.propTypes = {
}