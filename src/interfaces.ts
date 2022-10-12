import { BigNumber } from 'ethers'

export enum FunctionNames {
  Approve = 'approve',
  SendToL2 = 'sendToL2'
}

export interface ApproveParams {
  spender: string
  value: BigNumber
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

type FunctionName = FunctionNames.Approve | FunctionNames.SendToL2
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