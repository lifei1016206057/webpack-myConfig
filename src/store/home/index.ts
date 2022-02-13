interface stateInterface {
    name: string,
    num: number,
    ['prop']: any,
}

export default {
    state: {
        name: 'hoem',
        num: 0,
    },
    mutations: {
        add(state: stateInterface) {
            state.num++;
        }
    },
}