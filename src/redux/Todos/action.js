import { CREATED, ALLCOMPLETED, CLEARCOMPLETED, COLORCHANGE, DELETED, TOGGLED } from "./actionTypes"

export const CreatedTodo = (todoText) => {
    return {
        type: CREATED,
        payload: todoText
    }
}
export const ToggledTodo = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId,
    };
};
export const ColorChanged = (todoId, color) => {
    return {
        type: COLORCHANGE,
        payload: {
            todoId,
            color
        },
    };
};
export const Deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,
    };
};
export const AllCompleted = () => {
    return {
        type: ALLCOMPLETED,
    };
};
export const ClearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    };
};