import Link from "next/link";

interface ifcTableProps {
  wallet: string | null;
  tokens: any[];
  withdrawToken: Function;
  importTokenToWallet: Function;
}

const Table = ({
  wallet,
  tokens,
  withdrawToken,
  importTokenToWallet,
}: ifcTableProps) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {wallet ? "Amount" : "Connect wallet to see balances"}
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Withdraw</span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Import</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* TODO this should filter out tokens that the faucet doesn't have in its balance */}
                {tokens.map((token, index) => (
                  <tr
                    key={token.address}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {token.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {token.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => {
                          withdrawToken(token.address);
                        }}
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Get Token
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href={`https://mumbai.polygonscan.com/token/${token.address}`}
                      >
                        <a className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          See on Polygonscan
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {wallet ? "Amount" : "Connect wallet to see balances"}
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Withdraw</span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Import</span>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
