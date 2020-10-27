const key = 'TODOS_KEY'

export function save(data) {
    localStorage.setItem(key, JSON.stringify(data))
}

export function fetch() {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
}

export function generateId() {
    return Date.now() + Math.random().toString(16).substr(2, 4)
}

export function filter(todos, filterWord) {
    if (filterWord === 'all') {
        return todos
    } else if (filterWord === 'active') {
        return todos.filter(item => !item.completed)
    } else if (filterWord === 'completed') {
        return todos.filter(item => item.completed)
    }
    throw new Error("invalid filter word");
}
