const state = {
    breadcrumbs:[
        {name: 'Главная', path: '#'},
        {name: 'Системы хранения', path: '#'},
        {name: 'Комплекты стеллажных систем', path: '#'},
    ],
    filter:{
        SortBy:{
            code: 'SortBy',
            title: 'Сортировать по:',
            selected:{
                name: 'Цена по возрастанию',
                code: 'top'
            },
            filterList:[
                {
                    name: 'Цена по возрастанию',
                    id: 'top'
                },
                {
                    name: 'Цена по уменьшению',
                    id: 'down'
                }
            ]
        },
        Material:{
            code: 'Material',
            title: 'Материал',
            selected:{
                name: 'Материал',
                id: ''
            },
            filterList:
                [
                    {
                        "id": "1",
                        "name": "Дерево"
                    },
                    {
                        "id": "2",
                        "name": "Металл"
                    }
                ]
        }
    },
    items: [
        {
            "id": "1",
            "name": "Ручка дверная",
            "code": "L422WH",
            "price": {
                "old_price": 400,
                "current_price": 355
            },
            "image": {
                "url": "/pic/pic1.png"
            },
            "material": 1
        },
        {
            "id": "2",
            "name": "Ручка, нержавеющ сталь",
            "code": "L423WH",
            "price": {
                "old_price": 400.900,
                "current_price": 355.555
            },
            "image": {
                "url": "/pic/pic2.png"
            },
            "material": 2
        },
        {
            "id": "3",
            "name": "Стандартные петли",
            "code": "P424WN",
            "price": {
                "old_price": null,
                "current_price": 75
            },
            "image": {
                "url": "/pic/pic3.png"
            },
            "material": 2
        },
        {
            "id": "4",
            "name": "Петля со стопором",
            "code": "PW5AC",
            "price": {
                "old_price": 270,
                "current_price": 200
            },
            "image": {
                "url": "/pic/pic4.png"
            },
            "material": 2
        },
        {
            "id": "5",
            "name": "Ручка дверная",
            "code": "LM352",
            "price": {
                "old_price": null,
                "current_price": 720
            },
            "image": {
                "url": "/pic/pic1.png"
            },
            "material": 1
        },
        {
            "id": "6",
            "name": "Ручка, нержавеющ сталь",
            "code": null,
            "price": {
                "old_price": null,
                "current_price": 355.555
            },
            "image": {
                "url": "/pic/pic2.png"
            },
            "material": 2
        },
        {
            "id": "7",
            "name": "Стандартные петли",
            "code": "WD14LK",
            "price": {
                "old_price": null,
                "current_price": 75
            },
            "image": {
                "url": "/pic/pic3.png"
            },
            "material": 2
        },
        {
            "id": "8",
            "name": "Петля со стопором",
            "code": null,
            "price": {
                "old_price": 1200,
                "current_price": 900
            },
            "image": {
                "url": "/pic/pic4.png"
            },
            "material": 2
        }
    ],
    SortBy: 'top',
    Material: null,
};

const getters = {
    itemsGetters(state){
        let items = state.items
        if(state.Material){
           items =  items.filter(item=>item.material == state.Material)
        }
        if(state.SortBy && state.SortBy === 'top'){
            items.sort((a, b)=>{
                return a.price.current_price - b.price.current_price
            })
        }
        if(state.SortBy && state.SortBy === 'down'){
            items.sort((a, b)=>{
                return b.price.current_price - a.price.current_price
            })
        }
        return items
    }
};
const mutations = {
    setFilter: (state, {key, val})=> {
        state.filter[key].selected = val
        state[key] = val.id
    }
};

const actions = {

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
