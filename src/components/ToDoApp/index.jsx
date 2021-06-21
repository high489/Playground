import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from "@components/Modal";
import { Auth } from "@components/Auth";

import { SModalRoot } from '@styled/Modals/SModalRoot';
import { SModalWindow } from '@styled/Modals/SModalWindow';
import { SCloseButton } from '@styled/Modals/SCloseButton';

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
              renderLayout={(children, handleClose) => (
                <SModalRoot>
                  <SModalWindow>
                    <SCloseButton onClick={handleClose}>x</SCloseButton>
                    {children}
                  </SModalWindow>
                </SModalRoot>
              )}
              handleClose={handleToggleModal}
            >
              <Auth />
            </Modal>
          )
        }
      </ThemeProvider>
    );
};
