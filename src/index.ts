import fs from 'fs'
import transactionConfig from './transactionConfig'
import { getContractMethod } from './utils'
import { defaultOutputMeta, outputDir } from './constants'
import {
  Transaction,
  TransactionBuilderTransaction,
  TransactionBuilderData,
} from './interfaces'

// TODO: Add a contract name to TransactionConfig in order to avoid issues when multiple contracts have the same function name

async function main() {
  // Generate data
  const transactions: TransactionBuilderTransaction[] = []
  const configTransactions: Transaction[] = transactionConfig.transactions
  for (const tx of configTransactions) {
    const contractMethod = await getContractMethod(tx.functionName)
    const contractInputsValues: any = {}
    for (const [key, value] of Object.entries(tx.params)) {
      // App requires every value to be a string
      contractInputsValues[key] = value.toString()
    }
    transactions.push({
      to: tx.target,
      value: tx.value.toString(),
      data: null,
      contractMethod,
      contractInputsValues,
    })
  }

  // Add metadata
  const output: TransactionBuilderData = {
    version: '1.0',
    chainId: '1',
    createdAt: Date.now(),
    meta: defaultOutputMeta,
    transactions,
  }

  // Produce output
  const distributionLocation = `${outputDir}/output.json`
  if (fs.existsSync(distributionLocation)) {
    fs.unlinkSync(distributionLocation)
  }
  fs.writeFileSync(
    distributionLocation,
    JSON.stringify(output, null, 2),
    'utf-8'
  )
}

main()
