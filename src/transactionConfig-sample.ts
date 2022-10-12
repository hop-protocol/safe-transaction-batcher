import { utils } from 'ethers'
const { parseUnits } = utils
import { TransactionConfig } from './interfaces'
import { FunctionNames } from './constants'

const transactionConfig: TransactionConfig = {
  transactions: [
    {
      target: '0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC',
      value: parseUnits('0'),
      functionName: FunctionNames.approve,
      params: {
        spender: '0x914f986a44AcB623A277d6Bd17368171FCbe4273',
        amount: parseUnits('1'),
      },
    },
  ],
}

export default transactionConfig
