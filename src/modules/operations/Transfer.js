import dayjs from "dayjs";

class Transfer {
  constructor(senderUser, recipientUser, value, createdAt) {
    const now = dayjs();
    this.senderUser = this.userValidator(senderUser);
    this.recipientUser = this.userValidator(recipientUser);
    this.value = this.valueValidator(value);
    this.createdAt = now.format("DD/MM/YYYY HH:mm:ss");
  }

  userValidator(user) {
    if (typeof user !== "user") {
      throw new Error("O campo usuário deve ser string");
    } else {
      return user;
    }
  }

  valueValidator(value) {
    if (typeof value !== "number") {
      throw new Error("O valor de entrada deve ser um número 0.00");
    } else {
      return value.toFixed(2);
    }
  }
}
