"use client"

import { useState } from "react"
import { useDisconnect } from "wagmi"
import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Button, Avatar, Box, Typography, Divider } from "@mui/material"
import { OpenInNew, ContentCopy, Logout, Person } from "@mui/icons-material"
import { useRouter } from "next/navigation"

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "12px",
    padding: theme.spacing(2),
    maxWidth: "360px",
    width: "100%",
  },
}))

const AccountButton = styled(Button)(({ theme }) => ({
  justifyContent: "flex-start",
  padding: theme.spacing(1.5),
  borderRadius: "8px",
  width: "100%",
  textTransform: "none",
  marginBottom: theme.spacing(1),
}))

interface CustomAccountModalProps {
  account:
    | {
        address: string
        displayName: string
        displayBalance?: string
        balanceFormatted?: string
        balanceSymbol?: string
        ensAvatar?: string
        ensName?: string
      }
    | undefined
}

export function CustomAccountModal({ account }: CustomAccountModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { disconnect } = useDisconnect()
  const router = useRouter()

  // Function to copy address to clipboard
  const copyAddressToClipboard = () => {
    if (account?.address) {
      navigator.clipboard.writeText(account.address)
      // You could add a toast notification here
    }
  }

  // Function to view on block explorer
  const viewOnExplorer = () => {
    if (account?.address) {
      window.open(`https://etherscan.io/address/${account.address}`, "_blank")
    }
  }

  // Function to go to profile page
  const goToProfilePage = () => {
    setIsOpen(false)
    // Since we're already on the profile page, we could just close the modal
    // or refresh the page, or navigate to a specific tab
    router.push("/profile")
  }

  // Function to disconnect wallet
  const handleDisconnect = () => {
    disconnect()
    setIsOpen(false)
  }

  // Open our custom modal only
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        type="button"
        className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-1.5 text-sm"
      >
        {account?.displayName}
        {account?.displayBalance ? ` (${account.displayBalance})` : ""}
      </button>

      <StyledDialog open={isOpen} onClose={() => setIsOpen(false)}>
        {/* <Box>
          <DialogTitle>Your Profile</DialogTitle>
        </Box> */}
        <DialogContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2,flexDirection: "column",justifyContent: "center" }}>
            <Avatar
              src={account?.ensAvatar || "/placeholder.svg?height=40&width=40"}
              alt="Avatar"
              sx={{ width: 40, height: 40, mr: 2 }}
            />
            <Box>
              <Typography variant="subtitle1">{account?.displayName}</Typography>
              <Typography variant="body2" color="text.secondary" className="text-center">
                {account?.displayBalance}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <AccountButton
            startIcon={<ContentCopy fontSize="small" />}
            onClick={copyAddressToClipboard}
            variant="outlined"
          >
            Copy Address
          </AccountButton>

          <AccountButton startIcon={<OpenInNew fontSize="small" />} onClick={viewOnExplorer} variant="outlined">
          View on block explorer
          </AccountButton>

          <AccountButton
            startIcon={<Person fontSize="small" />}
            onClick={goToProfilePage}
            variant="contained"
            color="primary"
            sx={{ bgcolor: "#4CAF50" }}
          >
            Your Profile
          </AccountButton>

          <AccountButton
            startIcon={<Logout fontSize="small" />}
            onClick={handleDisconnect}
            variant="outlined"
            color="error"
          >
            Disconnect
          </AccountButton>
        </DialogContent>
      </StyledDialog>
    </>
  )
}
