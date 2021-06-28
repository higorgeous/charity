import { useState, useEffect, createContext, useCallback } from 'react';
import Web3 from 'web3';

import isClientSide from '@utils/isClientSide';

import { tokenABI, gorgeousAddress } from './constants';

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

  let web3: Web3 = new Web3('https://bsc-dataseed1.binance.org:443');

  const onWeb3Click = async () => {
    if (isClientSide && typeof (window as any).ethereum !== 'undefined') {
      web3 = new Web3((window as any).ethereum);
      try {
        await (window as any).ethereum.request({
          method: 'eth_requestAccounts',
        });
        console.log(`true`, (window as any).ethereum);
        setWeb3Enabled(true);
        isClientSide && checkAccount();
      } catch (e) {
        console.log('user did not add account...', e);
      }
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
      return;
    });
    console.log(account, isHolder);
  }, [account, isHolder, web3.eth]);

  useEffect(() => {
    checkAccount();
  }, [checkAccount]);

  return (
    <Web3Context.Provider
      value={{ isHolder, account, web3Enabled, onWeb3Click }}
    >
      {children}
    </Web3Context.Provider>
  );
};
