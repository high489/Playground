import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from "@components/Modal";
import { Auth } from "@components/Auth";

const theme = {
    primaryColor: '#333',
    bgColor: '#eee',
}

export function ToDoApp() {
    // состояние для модального окна
    const [isModalVisible, setIsModalVisible] = useState(false);
 
    const handleToggleModel = () => setIsModalVisible(!isModalVisible)

    return (
        <ThemeProvider theme={theme}>
            <button onClick={handleToggleModel}>
                Open Modal
            </button>
            {
                isModalVisible && (
                    <Modal
                        handleClose={handleToggleModel}
                    >
                        <Auth />
                    </Modal>   
                )
            }
        </ThemeProvider>
    );
};
