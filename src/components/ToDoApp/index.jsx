import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from "@components/Modal";
import { Auth } from "@components/Auth";

const theme = {
    primaryColor: '#333',
    bgColor: '#fefefe',
}

export function ToDoApp() {
    // состояние для модального окна
    const [isModalVisible, setIsModalVisible] = useState(false);
 
    const handleToggleModal = () => setIsModalVisible(!isModalVisible);

    return (
        <ThemeProvider theme={theme}>
        <button onClick={handleToggleModal}>
          Open Modal
        </button>
        {
          isModalVisible && (
            <Modal
              handleClose={handleToggleModal}
            >
              <Auth />
            </Modal>
          )
        }
      </ThemeProvider>
    );
};
