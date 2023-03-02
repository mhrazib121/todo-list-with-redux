import React from 'react';
import noteIcon from "../assets/images/notes.png";
import tickIcon from "../assets/images/double-tick.png";
import plusIcon from "../assets/images/plus.png";
import { useDispatch } from 'react-redux';
import { AllCompleted, ClearCompleted } from '../redux/Todos/action';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <form
                class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img
                    src={noteIcon}
                    class="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    class={`appearance-none w-8 h-8 bg-[url(${plusIcon})] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul class="flex justify-between my-4 text-xs text-gray-500">
                <li class="flex space-x-1 cursor-pointer"
                    onClick={() => dispatch(AllCompleted())}>
                    <img
                        class="w-4 h-4"
                        src={tickIcon}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li class="cursor-pointer" onClick={() => dispatch(ClearCompleted())}>Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;