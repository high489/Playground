import React from 'react';
import { normalizeObject } from '@utills/normalize-object'
import { Tabs } from '@components/Tabs'
import { LogIn } from '@components/Auth/LogIn'
import { SignUp } from '@components/Auth/SignUp'

import { SWrapRow } from '@styled/flex-wrappers/SWrapRow';
import { STabsNavCol } from '@styled/Tabs/STabsNavCol';
import { SWrapCol } from '@styled/flex-wrappers/SWrapCol';
import { STabsNavRow } from '@styled/Tabs/STabsNavRow';
import { STabsContentArea } from '@styled/Tabs/STabsContentArea';
import { STabNavLi } from '@styled/Tabs/STabNavLi';

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
                // вертикальные табы                 
                <SWrapCol>
                  <STabsNavRow>
                    {nav}
                  </STabsNavRow>
                  <STabsContentArea>
                    {content}
                  </STabsContentArea>
                </SWrapCol>
                /* // горизонтальные табы                 
                <SWrapRow>
                  <STabsNavCol>
                    {nav}
                  </STabsNavCol>
                  <STabsContentArea>
                    {content}
                  </STabsContentArea>
                </SWrapRow> */
            )}
            /* 2 способ */
            navItemComponent={(props) => <STabNavLi {...props} />}
            tabs={tabs}
        />
    )
}