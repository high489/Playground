import styled from 'styled-components';

export const SInput = styled.input`
    border: none;
    border-bottom: 1px solid;
`;

/* пример
    export default Button = styled.input`
        color: red;
    `;

    <Button></Button> // отрендерится тег input
    <Button as='a'></Button> // отрендерится тег a, но с color: red;
*/