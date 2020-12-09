let nextTaskId = 0;

export const addTodo = (task) => ({
  type: 'ADD_TODO',
  payload: {
    id: ++nextTaskId,
    task,
  },
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: {
    id,
  },
});
