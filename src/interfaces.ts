import { BigNumber } from 'ethers'
import { FunctionNames } from './constants'


export interface ApproveParams {
  spender: string
  amount: BigNumber
}

export interface SendToL2Params {
  chainId: number
  recipient: string
  amount: BigNumber
  amountOutMin: BigNumber
  deadline: number
  relayer: string
  relayerFee: BigNumber
}

// https://www.typescriptlang.org/docs/handbook/enums.html#enums-at-compile-time
type FunctionName = keyof typeof FunctionNames
type TransactionParams = ApproveParams | SendToL2Params

export interface Transaction {
  target: string
  value: BigNumber
  functionName: FunctionName
  params: TransactionParams
}

export interface TransactionConfig {
  transactions: Transaction[]
}

// Transaction Builder App interfaces

export interface TransactionBuilderTransaction {
  to: string
  value: string
  data: string | null
  contractMethod: string
  contractInputsValues: any

}

export interface TransactionBuilderMeta {
  name: string
  description: string
  txBuilderVersion: string
  createdFromSafeAddress: string
  createdFromOwnerAddress: string
  checksum: string
}

export interface TransactionBuilderData {
  version: string
  chainId: string
  createdAt: number
  meta: TransactionBuilderMeta
  transactions: TransactionBuilderTransaction[]
}
