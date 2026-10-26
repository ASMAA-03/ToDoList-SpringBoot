const API_URL = "http://localhost:8080/api/dailytasks";


export async function getTasks() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        return new Error("Can't get the daily Tasks");
    }
    return response.json();
}
export async function addTask(title) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
        })
    })
    if (!response.ok) {
        return new Error("Can't add a Task");
    }
    return response.json();
}

export async function deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) {
        throw new Error("Failed to Delete")
    }
}