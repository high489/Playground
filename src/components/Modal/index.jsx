import React from 'react';

export function Modal({renderLayout, children, handleClose}) {
    return (
        renderLayout(children, handleClose)
    )
};