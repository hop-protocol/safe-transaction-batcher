import fs from 'fs'
import transactionConfig from './transactionConfig'
import { Transaction, TransactionConfig, FunctionNames } from './interfaces'
import { getContractMethod } from './utils'
import { defaultOutputMeta, outputDir } from './constants'
async function main() {
  // Generate data
  let transactions: any[] = []
  for (const tx of transactionConfig.transactions) {
    const contractMethod = await getContractMethod(tx.functionName)
    transactions.push({
      to: tx.target,
      value: tx.value,
      data: null,
      contractMethod,
      contractInputValues: tx.params
    })
  }

  // Add metadata
  const output = {
    version: '1.0',
    chainId: '1',
    createdAt: Date.now(),
    meta: defaultOutputMeta,
    transactions
  }

  // Produce output
  const distributionLocation = `${outputDir}/output.json`
  if (fs.existsSync(distributionLocation)) {
    fs.unlinkSync(distributionLocation)
  }
  fs.writeFileSync(distributionLocation, JSON.stringify(output, null, 2), 'utf-8')
}

main()
