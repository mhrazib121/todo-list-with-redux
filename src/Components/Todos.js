import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todos = () => {
    const allTodos = useSelector((state) => state.todos)

    return (
        <div
            class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {allTodos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default Todos;