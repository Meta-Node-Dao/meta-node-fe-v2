'use client'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Meta Node Dao',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    sepolia,
    mainnet
  ],
  ssr: true,
});
