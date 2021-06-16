import React, { useState } from 'react';

export function Tabs({tabs, renderLayout, navItemComponent}) {
    /* Функциональные и классовые компоненты
    Функциональный компонент: 
        - состояние - string, number, boolean, object;
        - для каждого изменения требующего рендер - свое состояние;
        - методы жизненного цикла подключаются отдельно;
        - функция создается каждый раз заново при новом вызове;
    Классовый компонент:
        - состояние - только object;
        - все изменения требующие рендера - в общем состоянии компонента;
        - имеет методы жизненного цикла;
        - класс создается один раз и существует на протяжении всего времени работы приложения;
    */
    const [activeKey, setActiveKey] = useState(tabs.keys[0]);

    return (
        renderLayout(
            /* перебор массива keys, но рендер по объекту t */
            tabs.keys.map(key => (
                <NavItem 
                    onClick={setActiveKey}
                    key={key}
                    id={key}
                    navItemComponent={navItemComponent}
                >
                    {tabs.entries[key].title}
                </NavItem>
            )),
            tabs.entries[activeKey] && tabs.entries[activeKey].content,
        )
    )
};

/* <NavItem/> вместо div чтобы при .map передать key в setActiveKey
(если написать хендлер для onClick в самом <Tabs/>, то в этот хендлер не передать key)
*/
function NavItem({children, onClick, id, navItemComponent: NavItem}) {
    const handleClick = () => {
        onClick(id);
    }
    return (
        <NavItem onClick={handleClick}>
            {children}
        </NavItem>
    )
};