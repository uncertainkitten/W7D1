export const allTodos = ({todos}) => {
  const keys = Object.keys(todos);
  return keys.map (key => todos[key]);
};
