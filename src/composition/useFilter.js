import {computed, ref} from "@vue/composition-api";
import {filter} from "@/utils/storeTodos";

export default function useFilter(todoListRef) {
    const filterWordRef = ref('all');

    const filterTodoRef = computed(() => {
        return filter(todoListRef.value, filterWordRef.value)
    })

    const remainingRef = computed(() => {
        return filter(todoListRef.value, "active").length;
    });

    const completedRef = computed(() => {
        return filter(todoListRef.value, "completed").length;
    });

    console.log(filterWordRef, filterTodoRef.value)
    return {
        filterWordRef,
        filterTodoRef,
        remainingRef,
        completedRef,
    }
}
