export class Holiday {
  id?: number
  description?: string
  holidayStart?: string
  holidayEnd?: string
  hoursTaken?: number
  taken?: boolean = false

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}