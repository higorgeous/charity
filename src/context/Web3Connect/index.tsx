import { useState, useEffect, createContext, useCallback } from 'react';
import Web3 from 'web3';

import isClientSide from '@utils/isClientSide';

import { tokenABI, gorgeousAddress } from './constants';
import { useFlags } from '@atlaskit/flag';

export const Web3Context = createContext<{
  isHolder: boolean;
  account: string | null;
  web3Enabled: boolean;
  onWeb3Click: any;
}>({
  isHolder: false,
  account: '',
  web3Enabled: false,
  onWeb3Click: () => {},
});

export const Web3Provider = ({ children }: any) => {
  const [isHolder, setIsHolder] = useState(false);
  const [account, setAccount] = useState('');
  const [web3Enabled, setWeb3Enabled] = useState(false);

  const { showFlag } = useFlags();

  let web3: Web3 = new Web3('https://bsc-dataseed1.binance.org:443');

  const onWeb3Click = async () => {
    if (isClientSide && typeof (window as any).ethereum !== 'undefined') {
      web3 = new Web3((window as any).ethereum);
      try {
        await (window as any).ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWeb3Enabled(true);
        checkAccount();
      } catch (e) {
        showFlag({
          icon: null,
          appearance: 'error',
          title: `For more votes, connect to Gorgeous`,
          isAutoDismiss: true,
        });
      }
    } else {
      showFlag({
        icon: null,
        appearance: 'error',
        title: `You need a web3 wallet extension to connect`,
        isAutoDismiss: true,
      });
    }
    return false;
  };

  // invoke to check if account is already connected
  const checkAccount = useCallback(async () => {
    const accounts = await web3.eth.getAccounts();
    accounts.map(async (address: string) => {
      const tokenInst = new web3.eth.Contract(tokenABI, gorgeousAddress);
      const balance = await tokenInst.methods.balanceOf(address).call();
      setIsHolder(balance > 0);
      setAccount(accounts[0]);
      if (balance > 0) {
        showFlag({
          icon: null,
          appearance: 'success',
          title: `Your wallet is looking Gorgeous`,
          isAutoDismiss: true,
        });
      } else {
        showFlag({
          icon: null,
          appearance: 'error',
          title: `You have no Gorgeous in your wallet`,
          isAutoDismiss: true,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3.eth]);

  return (
    <Web3Context.Provider
      value={{ isHolder, account, web3Enabled, onWeb3Click }}
    >
      {children}
    </Web3Context.Provider>
  );
};
