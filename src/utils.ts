import fs from 'fs'
import globSync from 'glob'
import { promisify } from 'util'
import { abiDir } from './constants'

const glob = promisify(globSync)

export async function getContractMethod(functionName: string) {
  const files = await glob(`${abiDir}/*.json`)
  for (const file of files) {
    const contractFile = fs.readFileSync(file, 'utf-8')
    const contractJson = JSON.parse(contractFile)
    for (const contract of contractJson) {
      if (contract.name === functionName) {
        return contract
      }
    }
  }

  throw new Error(`Could not find ABI for ${functionName}`)
}
