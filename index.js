const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

async function fileOperation({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const data = await listContacts();
      console.table(data);
      break;
    case "get":
      await getContactById(id);
      break;

    case "add":
      await addContact(name, email, phone);
      break;

    case "remove":
      await removeContact(id);
      break;

    default:
      console.log("Unknown action type!");
  }
}

fileOperation({ action: "list" });
