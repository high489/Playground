export const normalizeObject = obj => ({
    entries: obj, // полуклон объекта (ключи клонируются, остальное - ссылки)
    keys: Object.keys(obj), // массив ключей объекта
});

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