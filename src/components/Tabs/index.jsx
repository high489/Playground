import React from 'react';
import { useState } from "react";

export function Tabs({tabs, renderLayout, navItemComponent}) {
    const [activeKey, setActiveKey] = useState();

    /* Массивы и объекты
    Массив []
    предназначение:
        - быстрый перебор элементов массива
        - можно применять функции JS .map .filter .reduce и тп
        - можно рендерить в ReactJS

    Объект {}
    предназначение:
        - быстрый поиск по ключу
        - нельзя рендерить в ReactJS
    */

    // t нужно закешировать
    const t = {
        entries: {...tabs}, // t - полуклон объекта tabs (ключи клонируются, остальное - ссылки)
        keys: Object.keys(tabs), // массив ключей объекта t
    };
    //console.log(t);

    return (
        renderLayout(
            /* перебор массива keys, но рендер по объекту t */
            t.keys.map(key => (
                <NavItem 
                    onClick={setActiveKey}
                    key={key}
                    id={key}
                    navItemComponent={navItemComponent}
                >
                    {t.entries[key].title}
                </NavItem>
            )),
            t.entries[activeKey] && t.entries[activeKey].content,
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