import dayjs from "dayjs";

export default class Operations {
  constructor() {
    const now = dayjs();
    this.createdAt = now.format("DD/MM/YYYY HH:mm:ss");
  }
}
