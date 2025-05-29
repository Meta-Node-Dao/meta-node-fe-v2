import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Box,
  Typography,
  Chip,
} from "@mui/material";
// import Image from "next/image"
import { Image, Work, listI } from "@mui/icons-material";

interface BountyCardProps {
  title: string;
  tag: string;
  status: string;
  stage: string;
  createdAt: string;
  applicants: number;
  reward: string;
  deposit: {
    type: string;
    amount: number;
  };
  icon?: string;
}

export default function BountyCard({
  title,
  tag,
  status,
  stage,
  createdAt,
  applicants,
  reward,
  deposit,
  icon = "/placeholder.svg?height=40&width=40",
}: BountyCardProps) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="DEX Protocol" secondary="Jan 9, 2014" /> */}
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "space-between", md: "space-between" },
              alignItems: "center",
              gap: 1,
              mb: 1,
            }}
          >
            <div className="flex gap-2 items-center">
              <Typography variant="subtitle1">
                {"开发跨链资产桥协议"}
              </Typography>
              <Chip
                label={"Satrted Working"}
                variant="outlined"
                size="small"
                sx={{ borderRadius: 1, height: 24, fontSize: "0.75rem" }}
              />
            </div>
            <span className="greenText">1500MLT +2ETH</span>
          </Box>
          <Box>
            <Chip
              label={"智能合约审计"}
              variant="outlined"
              size="small"
              sx={{ borderRadius: 1, height: 24, fontSize: "0.75rem" }}
            />
          </Box>
          <Box className="flex gap-2 items-center justify-between mt-1">
          <Typography variant="body2" color="text.secondary">
              {'Sage'} • {'Created Just Now'} • {'8 Applicatiants'} 
            </Typography>
            <span>Depost: <span className="greenText">{'400 USDC'}</span></span>
          </Box>
        </ListItemText>
      </ListItem>
    </List>
  );
}
