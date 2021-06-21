import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SLabel } from '@styled/forms/SLabel';
import { SInput } from '@styled/forms/SInput';
import { SSubmitButton } from '@styled/forms/SSubmitButton';
import { SWrapCol } from '@styled/flex-wrappers/SWrapCol';

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
    }

    return (
        <form onSubmit={handleSubmit}>
            <SWrapCol>
                <SLabel htmlFor="uname">Username</SLabel>
                <SInput id="uname" type={'text'} name={'username'} onChange={handleChangeInput} value={authData.username} />
                <SLabel htmlFor="pass">Password</SLabel>
                <SInput id="pass" type={'password'} name={'password'} onChange={handleChangeInput} value={authData.password} />
                <SLabel htmlFor="cpass">Confirm password</SLabel>
                <SInput id="cpass" type={'password'} name={'confirmPasword'} onChange={handleChangeInput} value={authData.confirmPasword} />
                <SSubmitButton type={'submit'}>Sign Up</SSubmitButton>
            </SWrapCol>
        </form>
    )
}

SignUp.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string,
    confirmPasword: PropTypes.string,
}