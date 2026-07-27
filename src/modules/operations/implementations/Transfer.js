import Operations from "../Operations.js"

class Transfer extends Operations {
  constructor(senderUser, recipientUser, value) {
    super()
    this.senderUser = App.userValidator(senderUser);
    this.recipientUser = App.userValidator(recipientUser);
    this.value = App.valueValidator(value);
  }
}
