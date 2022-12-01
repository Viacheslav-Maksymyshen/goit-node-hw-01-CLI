const yargs = require("yargs");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const { hideBin } = require("yargs/helpers");
const arr = hideBin(process.argv);
const { argv } = yargs(arr);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.table(allContacts);
      break;

    case "get":
      const oneContact = await getContactById(id);
      console.table(oneContact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.table(newContact);
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      console.table(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
