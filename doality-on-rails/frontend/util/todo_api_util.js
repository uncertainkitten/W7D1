export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  });
};

export function uniqueId() {
  return new Date().getTime();
}
