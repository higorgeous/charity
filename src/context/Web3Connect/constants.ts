export const tokenABI: any = [
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

export const gorgeousAddress = '0xfE1179267621899D85E6EDdC0dC9Bf9345fb5E55';
