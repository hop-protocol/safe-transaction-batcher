import { BigNumber } from 'ethers'

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

type TransactionParams = ApproveParams | SendToL2Params

export interface Transaction {
  target: string
  value: BigNumber
  functionName: string
  params: TransactionParams
}

export interface TransactionConfig {
  transactions: Transaction[]
}