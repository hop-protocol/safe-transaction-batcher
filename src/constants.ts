import path from 'path'
import { TransactionBuilderMeta } from './interfaces'

export const abiDir = path.resolve(__dirname, 'abi')
export const outputDir = path.resolve(__dirname, '')

export enum FunctionNames {
  approve = 'approve',
  sendToL2 = 'sendToL2'
}

// The app requires this field. This field is auto-populated upon upload to the UI
export const defaultOutputMeta: TransactionBuilderMeta = {
  name: "",
  description: "",
  txBuilderVersion: "",
  createdFromSafeAddress: "",
  createdFromOwnerAddress: "",
  checksum: ""
}