'use client'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Meta Node Dao',
  projectId: 'bd073c40caf35eb21853ba7ce3553196',
  chains: [
    sepolia,
    mainnet
  ],
  ssr: true,
});
