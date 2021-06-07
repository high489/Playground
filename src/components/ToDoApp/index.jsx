import React from 'react';
import { Tabs } from "@components/Tabs";

export function ToDoApp() {
    const tabs = {
        login: {
            title: 'Login',
            content: <div>Please, Login</div>,
        },
        signin: {
            title: 'Sign In',
            content: <div>Please, Sign Up</div>,
        },
    };
 
    return (
        <div>
            <Tabs
                /* 1 способ убрать div в компоненте
                render props - функции передаваемые как props, вызываются в render(). 
                Задают структуру компонента, принимают стили (поэтому сам компонент не хранит стили) */
                renderLayout={(nav, content) => (
                    <div>
                        <div style={{ border: '1px solid red' }}>
                            {nav}
                        </div>
                        <div style={{ border: '1px solid blue' }}>
                            {content}
                        </div>
                    </div>
                )}
                /* 2 способ */
                navItemComponent={(props) => <li {...props} style={{ border: '1px solid black' }} />}
                tabs={tabs}
            />
        </div>
    );
};