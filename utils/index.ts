import { Contract, ContractInterface, ethers, Signer } from "ethers";
import * as alfajoresFaucetArtifacts from "../artifacts/alfajores/Faucet.json";
import * as mumbaiFaucetArtifacts from "../artifacts/mumbai/Faucet.json";
import { ifcToken } from "../pages";
import { alfajoresTokens, ChainId, mumbaiTokens } from "./contants";

export const getFaucetContract = (
  chainId: ChainId,
  signer: Signer
): Contract => {
  return new ethers.Contract(
    getFaucetAddress(chainId),
    getFaucetABI(chainId),
    signer
  );
};

const getFaucetAddress = (chainId: ChainId): string => {
  switch (chainId) {
    case ChainId.Mumbai:
      return mumbaiFaucetArtifacts.address;
    case ChainId.Alfajores:
      return alfajoresFaucetArtifacts.address;
  }
};

const getFaucetABI = (chainId: ChainId): ContractInterface => {
  switch (chainId) {
    case ChainId.Mumbai:
      return mumbaiFaucetArtifacts.abi;
    case ChainId.Alfajores:
      return alfajoresFaucetArtifacts.abi;
  }
};

export const getTokens = (chainId: ChainId): ifcToken[] => {
  switch (chainId) {
    case ChainId.Mumbai:
      return mumbaiTokens;
    case ChainId.Alfajores:
      return alfajoresTokens;
  }
};

export const getChainId = async (): Promise<number> => {
  // @ts-ignore
  const { ethereum } = window;
  if (!ethereum) {
    throw new Error("You need Metamask.");
  }
  const provider = new ethers.providers.Web3Provider(ethereum);
  const { chainId } = await provider.getNetwork();
  return chainId;
};

export const getChainName = (chainId: ChainId): string => {
  switch (chainId) {
    case ChainId.Mumbai:
      return "Mumbai";
    case ChainId.Alfajores:
      return "Alfajores";
  }
};

export const getSigner = (): Signer => {
  // @ts-ignore
  const { ethereum } = window;
  if (!ethereum) {
    throw new Error("You need Metamask.");
  }
  const provider = new ethers.providers.Web3Provider(ethereum);
  return provider.getSigner();
};
