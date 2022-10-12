import path from 'path'

export const abiDir = path.resolve(__dirname, 'abi')
export const outputDir = path.resolve(__dirname, '')

// The app requires this field. This field is auto-populated upon upload to the UI
export const defaultOutputMeta = {
  name: "",
  description: "",
  txBuilderVersion: "",
  createdFromSafeAddress: "",
  createdFromOwnerAddress: "",
  checksum: ""
}