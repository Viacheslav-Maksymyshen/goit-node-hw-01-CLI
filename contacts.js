const path = require("path");
const fs = require("fs/promises");

const contactsPath = path.resolve("db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const dataParse = JSON.parse(data);
    return dataParse;
  } catch (error) {
    console.log(
      "🚀 ~ file: contacts.js ~ line 12 ~ listContacts ~ error",
      error
    );
  }
}

function getContactById(contactId) {
   try {
    const data = await listContacts();
    const contact = data.find(({ id }) => id === contactId.toString());
    console.log(`Contact with id ${contactId} is: ${JSON.stringify(contact)}`);
  } catch (error) {
    console.error(error);
  }
}

function removeContact(contactId) {
  try {
    const data = await listContacts();
    const newData = data.filter(({ id }) => id !== contactId.toString());
    console.log(`Contact with ${contactId} successfully deleted`);
    await fs.writeFile(contactsPath, JSON.stringify(newData));
  } catch (error) {
    console.error(error);
  }
}

function addContact(name, email, phone) {
    try {
    const data = await listContacts();
    data.push({ name, email, phone });
    await fs.appendFile(contactsPath, JSON.stringify(data));
    console.log(`Contact ${name} added`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
