import { useQuery, gql } from "@apollo/client";
import CreateTodoComponent from "./components/organisms/createUserTest";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface GetTodosData {
  getTodos: Todo[];
}
const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      id
      title
      completed
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery<GetTodosData>(GET_TODOS);

  if (loading) <p>Loading...</p>;
  if (error) {
    return <p>Error:{error.message}</p>;
  }
  return (
    <>
      <CreateTodoComponent />
      <h1>Hello Todos</h1>
      <ul>
        {data?.getTodos?.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            {todo.completed ? ".....✓" : ".....x"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
