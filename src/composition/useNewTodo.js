import { ref } from '@vue/composition-api'
import { generateId } from "@/utils/storeTodos";

export default function newTodo(todoListRef) {
    const newTodoRef = ref('')

    const addTodo = () => {
        const value = newTodoRef.value && newTodoRef.value.trim()
        if (!value) return;

        const todo = {
            id: generateId(),
            title: value,
            completed: false
        }
        todoListRef.value.unshift(todo)
    }

    return {
        newTodoRef,
        addTodo
    }
}
