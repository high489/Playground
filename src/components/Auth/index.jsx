import React from 'react';
import { normalizeObject } from '@utills/normalize-object'
import { Tabs } from '@components/Tabs'
import { LogIn } from '@components/Auth/LogIn'
import { SignUp } from '@components/Auth/SignUp'

export function Auth() {
    const tabs = normalizeObject({
        login: {
            title: 'Login',
            content: <LogIn />,
        },
        signup: {
            title: 'Sign Up',
            content: <SignUp/>,
        },
    });

    return(
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
    )
}