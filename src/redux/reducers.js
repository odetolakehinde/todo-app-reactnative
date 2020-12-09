const initialState = {
  tasks: [
    {
      id: '1',
      name: 'Task 1 ',
      due_date: '9:00AM 12-1-2019',
      status: 'done',
    },
    {
      id: '2',
      name: 'Task 2 ',
      due_date: '11:00AM 12-1-2019',
      status: 'in-progress',
    },
    {
      id: '3',
      name: 'Task 3 ',
      due_date: '22:00AM 12-1-2019',
      status: 'pending',
    },
  ],
  all_tasks_completed: false,
  username: 'User',
};

export default function todos_reducer(state = initialState, action) {
  switch (
    action.type // action.type is a String
  ) {
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        tasks: state.tasks.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
}
