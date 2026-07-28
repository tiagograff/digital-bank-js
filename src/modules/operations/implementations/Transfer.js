import { App } from "../../../shared/App.js";
import Operations from "../Operations.js"

export default class Transfer extends Operations {
  constructor(senderUser, recipientUser, value) {
    super()
    this.senderUser = senderUser;
    this.recipientUser = recipientUser;
    this.value = App.valueValidator(value);
  }
}