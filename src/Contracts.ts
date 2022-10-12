import { ApproveParams, SendToL2Params } from './interfaces'
import { Interface } from 'ethers/lib/utils'

enum Signatures {
  Approve = 'approve',
  SendToL2 = 'sendToL2'
}
const ABIs = [
  'function approve(address,uint256)',
  'function sendToL2(uint256,address,uint256,uint256,uint256,address,uint256)'
]

export default class Contracts {
  iface: Interface

  constructor () {
    this.iface = new Interface(ABIs)
  }


  approve(params: ApproveParams): string {
    const values = [params.spender, params.value]
    return this._encodeFunctionData(Signatures.Approve, values)
  }

  sendToL2(params: SendToL2Params): string {
    const values = [params.chainId, params.recipient, params.amount, params.amountOutMin, params.deadline, params.relayer, params.relayerFee]
    return this._encodeFunctionData(Signatures.SendToL2, values)
  }

  private _encodeFunctionData(signature: string, values: any[]): string {
    return this.iface.encodeFunctionData(
      signature, values
    )
  }
}