import dayjs from 'https://esm.sh/dayjs'

export default class Operations {
  constructor() {
    const now = dayjs();
    this.createdAt = now.format("DD/MM/YYYY HH:mm:ss");
  }
}
