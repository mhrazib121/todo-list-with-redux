import React from 'react';
import Todo from './Todo';

const Todos = () => {
    return (
        <div
            class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            <Todo />
        </div>
    );
};

export default Todos;