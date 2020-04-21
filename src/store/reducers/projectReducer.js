const initState = {
    projects: [
        { id: '1', title: 'help me find peach', content: 'blah blah blah' },
        { id: '2', title: 'Hey, This', content: 'who is peach?' },
        { id: '3', title: 'Okay. Buddy friend dude.', content: 'I don\'t know dude, some princess' }

    ]
}
// const projectReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'CREATE_PROJECT':
//       console.log('create project', action.project);
//   }
//   return state;
// };
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
};


export default projectReducer;