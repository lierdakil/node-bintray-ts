import { Rest } from './rest'
import { ApiEP } from './apiEp'

export type Attributes = Attribute[]
export type Attribute =
  | {
      name: string
      values: string[]
      type: 'string'
    }
  | {
      name: string
      values: string[]
      type: 'date'
    }
  | {
      name: string
      values: number[]
      type: 'number'
    }
  | {
      name: string
      values: boolean[]
      type: 'boolean'
    }
  | {
      name: string
      values: string[]
      type: 'version'
    }

export class HasAttrs<ItemType, DataType> extends ApiEP<ItemType, DataType> {
  constructor(createBase: string, itemName: string, rest: Rest) {
    super(createBase, itemName, rest)
  }
  public getAttrs = (attributes: string[]) =>
    this.rest.get(`${this.apiBase}/attributes?names=${attributes.join(',')}`)
  public setAttrs = (data: Attributes) =>
    this.rest.post(`${this.apiBase}/attributes`, data)
  public deleteAttrs = (attributes: string[]) =>
    this.rest.del(`${this.apiBase}/attributes?names=${attributes.join(',')}`)
  public updateAttrs = (data: Attributes) =>
    this.rest.patch(`${this.apiBase}/attributes`, data)
}
