import {computed} from "@vue/composition-api";

export default function useEditTodo(todoListRef) {

    // const editTodo = (todo) => {
    //
    // }

    const allDoneRef = computed({
        get: () => {
            // var val = todoListRef.value.filter((it) => !it.completed).length === 0;
            // return val;
            return !(todoListRef.value.filter(item => !item.completed).length)
        },
        set: (checked) => {
            todoListRef.value.forEach(item => item.completed = checked)
        }
    })

    return {
        allDoneRef,
    }
}
