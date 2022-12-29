import { ifcToken } from "../pages";

export const mumbaiTokens: ifcToken[] = [
  {
    name: "TCO2_VCS_439_2008",
    address: "0xa5831eb637dff307395b5183c86b04c69c518681",
    amount: "NaN",
    blockScanner: "https://mumbai.polygonscan.com/",
  },
  {
    name: "TCO2_VCS_674_2014",
    address: "0xF7e61e0084287890E35e46dc7e077d7E5870Ae27",
    amount: "NaN",
    blockScanner: "https://mumbai.polygonscan.com/",
  },
  {
    name: "BCT",
    address: "0xf2438A14f668b1bbA53408346288f3d7C71c10a1",
    amount: "NaN",
    blockScanner: "https://mumbai.polygonscan.com/",
  },
  {
    name: "NCT",
    address: "0x7beCBA11618Ca63Ead5605DE235f6dD3b25c530E",
    amount: "NaN",
    blockScanner: "https://mumbai.polygonscan.com/",
  },
];

export const alfajoresTokens: ifcToken[] = [
  {
    name: "TCO2_VCS_1052_2012",
    address: "0xB297F730E741a822a426c737eCD0F7877A9a2c22",
    amount: "NaN",
    blockScanner: "https://alfajores.celoscan.io/",
  },
  {
    name: "TCO2_VCS_1671_2018",
    address: "0xF0a5bF1336372FdBc2C877bCcb03310D85e0BF81",
    amount: "NaN",
    blockScanner: "https://alfajores.celoscan.io/",
  },
  {
    name: "BCT",
    address: "0x4c5f90C50Ca9F849bb75D93a393A4e1B6E68Accb",
    amount: "NaN",
    blockScanner: "https://alfajores.celoscan.io/",
  },
  {
    name: "NCT",
    address: "0xfb60a08855389F3c0A66b29aB9eFa911ed5cbCB5",
    amount: "NaN",
    blockScanner: "https://alfajores.celoscan.io/",
  },
];
export const mumbaiFaucetAddress = "0x0564A412E44dE08fd039E67FC9B323Dc521eF410";

export const alfajoresTokens: {
  name: string;
  address: string;
  amount: string;
}[] = [];

export const alfajoresFaucetAddress = "";

export enum ChainId {
  Mumbai = 80001,
  Alfajores = 44787,
}
