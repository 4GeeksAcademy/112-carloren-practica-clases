export const getContactList = async () => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/carloren/contacts', { method: "GET" })
    const data = await response.json()
    return (data.contacts)
}