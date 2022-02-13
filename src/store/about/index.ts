interface stateInterface {
    name: string,
    num: number,
    ['prop']: any,
}

export default {
    state: {
        name: 'about',
        num: 0,
    },
    mutations: {
        add(state: stateInterface) {
            state.num++;
        }
    },
}