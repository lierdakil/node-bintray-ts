import { Rest, SuccessMessage } from './rest'

export class ApiEP<InfoType, DataType> {
  protected apiBase: string
  constructor(
    protected createBase: string,
    protected itemName: string,
    protected rest: Rest,
  ) {
    this.apiBase = `${createBase}/${itemName}`
  }
  public info = async () => this.rest.get(this.apiBase) as Promise<InfoType>
  public create = async (
    data: Pick<DataType, Exclude<keyof DataType, 'name'>>,
  ) =>
    this.rest.post(
      this.createBase,
      Object.assign({ name: this.itemName }, data),
    ) as Promise<InfoType>
  public delete = async () =>
    this.rest.del(this.apiBase) as Promise<SuccessMessage>
  public update = async (pkg: Partial<DataType>) =>
    this.rest.patch(this.apiBase, pkg) as Promise<SuccessMessage>
}
