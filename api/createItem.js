import env from "./env";

export default function createItem(fullItem, ownerId, token) {
    console.log('>>>>', token)
    return fetch(
        `${env.MY_URL}/goals`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    title: fullItem.title,
                    body: fullItem.body,
                    dueDate: fullItem.duedate,
                    priority: fullItem.priority,
                    ownerUserId: ownerId
            })
        }
    )
        .then(response => response.json())
        .then(record => {
            return {
                id: record.id
            };
        });
}