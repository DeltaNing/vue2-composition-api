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
