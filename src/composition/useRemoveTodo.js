export default function useRemoveTodo(todoListRef) {

    const removeTodo = (todo) => {
        todoListRef.value = todoListRef.value.filter(item => item.id !== todo.id)
    }

    const removeCompleted = () => {
        todoListRef.value = todoListRef.value.filter(item => !item.completed)
    }

    return {
        removeTodo,
        removeCompleted,
    }
}
