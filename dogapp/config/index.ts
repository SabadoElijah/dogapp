import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
    return new Contract(
        "0xf9A1a2EF54656f6Ab5984860AB62bE897755D25a", //contract add
        abi as any,
        signer
    );
}