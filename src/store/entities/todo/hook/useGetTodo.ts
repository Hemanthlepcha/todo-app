import { useRecoilCallback } from "recoil";
import { useGetTodosQuery } from "../../../../graphql/types";
import { useUpsert } from "./useUpsert";

export const useGetTodo = (userId: string) => {
  const { upsert } = useUpsert();

  const { refetch: getAllTodoRefetch } = useGetTodosQuery({
    variables: {
        UserId: parseInt(userId)
    },
  });

  const setTodo = useRecoilCallback(
    ()=> async()=>{
        const {data, errors}= await getAllTodoRefetch();
        const todos = data?.getTodos //optional chaining for accessing the nested object from data 

        if(errors){
            throw new Error(`${errors}`)
        }else{
            if(Array.isArray(todos)){
                todos.forEach((todo)=> upsert({...todo, userId: userId}))
            }else{
                console.error("Unexpected format:", data)
            }
        }
    },
    [upsert, getAllTodoRefetch, userId]
  )
  return setTodo
};
