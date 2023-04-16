import { ChainId } from '../../../../uniswap-sdk-moonbeam'
import MULTICALL_ABI from './abi.json'
import { multicall } from '../../faisaa_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: multicall,
  [ChainId.TESTNET]: multicall,
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
