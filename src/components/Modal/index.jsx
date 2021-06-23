import React from 'react';

import { SModalRoot } from '@styled/Modals/SModalRoot';
import { SModalWindow } from '@styled/Modals/SModalWindow';
import { SCloseButton } from '@styled/Modals/SCloseButton';

export function Modal({children, handleClose, renderLayout}) {
    // если renderLayout не передан, использовать оформление по умолчанию
    renderLayout = renderLayout || ((children, handleClose) => (
        <SModalRoot>
          <SModalWindow>
            <SCloseButton onClick={handleClose}>x</SCloseButton>
            {children}
          </SModalWindow>
        </SModalRoot>
      ))
    return (
        renderLayout(children, handleClose)
    )
};