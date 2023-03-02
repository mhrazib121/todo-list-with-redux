import React from 'react';
import { useDispatch } from 'react-redux';
import cancelIcon from "../assets/images/cancel.png";
import { ColorChanged, Deleted, ToggledTodo } from '../redux/Todos/action';

const Todo = (props) => {

    const dispatch = useDispatch();
    console.log(props)
    const handleColorChange = (id, color) => {
        dispatch(ColorChanged(id, color));
    }
    return (
        <div
            class="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
        >
            <div
                onClick={() => dispatch(ToggledTodo(props.todo.id))}
                class="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500 bg-green-500"
            >
                <input
                    type="checkbox"
                    class="opacity-0 absolute rounded-full"
                />
                <svg
                    class="hidden fill-current w-3 h-3 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
            </div>

            <div class={`${props.todo.completed && "select-none line-through"} flex-1`}>
                {props.todo.text}
            </div>

            <div
                onClick={() => handleColorChange(props.todo.id, 'green')}
                class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${props.todo.color === "green" ? "bg-green-500" : null}`}
            ></div>

            <div
                class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${props.todo.color === "yellow" ? "bg-yellow-500" : null}`}
                onClick={() => handleColorChange(props.todo.id, 'yellow')}
            ></div>

            <div
                onClick={() => handleColorChange(props.todo.id, 'red')}
                class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${props.todo.color === "red" ? "bg-red-500" : null}`}
            ></div>

            <img
                onClick={() => dispatch(Deleted(props.todo.id))}
                src={cancelIcon}
                class="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
            />
        </div>
    );
};

export default Todo;