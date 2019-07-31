class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.name = name;
    this.contacts.push((this.name = new Contact(name, email, phone, relation)));
  }
  display() {
    document.querySelector(".info_container").innerHTML = "";
    addressBook.contacts.forEach((contact, index) => {
      const div = document.createElement("div");
      div.innerHTML = `<p>Name: ${contact.name}</p> <p>Email ${
        contact.email
      }</p> <p>Phone: ${contact.phone}</p> <p>Relation: ${contact.relation}</p>
      <i class="fas fa-trash-alt" index=${index}></i> `;
      document.querySelector(".info_container").append(div);
    });
  }
  delete(i) {
    this.contacts.splice(i, 1);
    addressBook.display();
  }
}
const addressBook = new AddressBook();
function handleSubmit(event) {
  event.preventDefault();
  let name = event.target[0].value;
  let email = event.target[1].value;
  let phone = event.target[2].value;
  let relation = event.target[3].value;
  addressBook.add(name, email, phone, relation);
  addressBook.display();
}

document.querySelector("form").addEventListener("submit", handleSubmit);

function handleDelete(e) {
  let otype = e.target.nodeName;
  if (otype == "I") {
    let i = e.target.getAttribute("index");
    addressBook.delete(i);
  }
}

document
  .querySelector(".info_container")
  .addEventListener("click", handleDelete);
