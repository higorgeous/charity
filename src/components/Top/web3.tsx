import { FC, ReactNode, useState } from 'react';
import Web3 from 'web3';

import isClientSide from '@utils/isClientSide';

const tokenABI: any = [
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
    ],
    payable: false,
    type: 'function',
  },
];

const gorgeousAddress = [
  {
    address: '0xfE1179267621899D85E6EDdC0dC9Bf9345fb5E55',
    token: 'GORGEOUS',
  },
];

const Top: FC = () => {
  const [accounts, setAccounts] = useState<Array<any>>([]);
  const [web3Enabled, setWeb3Enabled] = useState(false);

  // Empty web3 instance
  let web3: Web3 = new Web3('https://bsc-dataseed1.binance.org:443');

  const ethEnabled = async () => {
    if (isClientSide && typeof (window as any).ethereum !== 'undefined') {
      web3 = new Web3((window as any).ethereum);
      try {
        await (window as any).ethereum.enable();
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  };

  const onClickConnect = async () => {
    if (await !ethEnabled()) {
      alert('Please install MetaMask to use this dApp!');
    }

    setWeb3Enabled(true);

    var accs = await web3.eth.getAccounts();

    const newAccounts = await Promise.all(
      accs.map(async (address: string) => {
        const balance = await web3.eth.getBalance(address);

        const tokenBalances = await Promise.all(
          gorgeousAddress.map(async (token) => {
            const tokenInst = new web3.eth.Contract(tokenABI, token.address);

            const balance = await tokenInst.methods.balanceOf(address).call();
            console.log(balance);

            return {
              token: token.token,
              balance,
            };
          }),
        );

        return {
          address,
          balance: web3.utils.fromWei(balance, 'ether'),
          tokens: tokenBalances,
        };
      }),
    );

    setAccounts(newAccounts);
  };

  return (
      <div>
        <div className="actions">
          {!web3Enabled && <button onClick={onClickConnect}>Connect</button>}
        </div>
        {accounts && accounts.length > 0 && (
          <div className="accounts">
            {accounts.map((account) => {
              return (
                <div className="account" key={account.address}>
                  <div className="account">
                    <div className="address">
                      <label>Address: </label>
                      {account.address}
                    </div>
                    <div className="balance">
                      <div className="token-logo">ETH</div>
                      <div className="balance-value">{account.balance}</div>
                    </div>
                    <div className="tokens">
                      {account.tokens.map((token: any) => {
                        return (
                          <div className="token" key={token.token}>
                            <div className="balance">
                              <div className="token-logo">{token.token}</div>
                              <div className="balance-value">
                                {token.balance}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
  );
};

export default Top;
