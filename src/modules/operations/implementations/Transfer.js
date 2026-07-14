import Operations from "../Operations.js"

class Transfer extends Operations {
  constructor(senderUser, recipientUser, value) {
    super()
    this.senderUser = this.userValidator(senderUser);
    this.recipientUser = this.userValidator(recipientUser);
    this.value = this.valueValidator(value);
  }
}
