"use strict";

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.name = name;
    this.contacts.push((this.name = new Contact(name, email, phone, relation)));
  }
  delete(name) {
    var index = this.contacts.findIndex(contact => {
      return this.contacts.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }
  print() {
    // for (let i = 0; i < this.contacts.length; i++) {
    //   console.log(this.contacts[i]);
    this.contacts.forEach(contact => {
      console.log(contact);
    });
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}
const addressBook = new AddressBook();
addressBook.add("Kevin", "kpbalboa@gmail.com", "5172823794", "me");
addressBook.add("Karen", "kbalboa", "137289878327", "mom");
addressBook.add("Jay", "jdhuei", "32433224332", "father");
addressBook.print();
addressBook.delete("Karen");
addressBook.print();
