"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { CustomAccountModal } from "./CustomAccountModal"
import { Button } from "@mui/material"
// Add custom styles for the RainbowKit components
const buttonStyles = {
  connectButton: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium",
  networkButton: "flex items-center gap-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm",
  chainIcon: "w-4 h-4 rounded-full overflow-hidden",
  errorButton: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium",
}

export function WalletConnectButton() {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        const ready = mounted && authenticationStatus !== "loading"
        const connected =
          ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated")

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className={buttonStyles.connectButton}>
                    Connect Wallet
                  </button>
                )
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className={buttonStyles.errorButton}>
                    Wrong network
                  </button>
                )
              }

              return (
                <div className="flex items-center gap-2">
                <Button variant="contained" size="small">Created</Button>
                  <button onClick={openChainModal} type="button" className={buttonStyles.networkButton}>
                    {chain.hasIcon && (
                      <div className={buttonStyles.chainIcon}>
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl || "/placeholder.svg"}
                            className="w-full h-full"
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                
                  {/* Only use our custom modal, don't pass openAccountModal */}
                  <CustomAccountModal account={account} />
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
