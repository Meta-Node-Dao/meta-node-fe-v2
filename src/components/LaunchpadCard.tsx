import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Chip,
} from "@mui/material";
// import Image from "next/image"
import { Image, Work } from "@mui/icons-material";

interface LaunchpadCardProps {
  title: string;
  status: string;
  goal?: string;
  progress?: string;
  icon?: string;
}

export default function LaunchpadCard({
  title,
  status,
  goal,
  progress,
  icon = "/placeholder.svg?height=40&width=40",
}: LaunchpadCardProps) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <div className="flex items-center gap-2">
            <Typography variant="subtitle1">{"CrossFi流动性众筹"}</Typography>
            <Chip
              label={"Satrted Working"}
              variant="outlined"
              size="small"
              sx={{ borderRadius: 1, height: 24, fontSize: "0.75rem" }}
            />
          </div>
          <div>
            <span>
              Raise Goal: <span className="greenText">50000MLT</span>
            </span>
            •{" "}
            <span>
              Progress: <span className="greenText">"5000MLT(84%)"</span>
            </span>
          </div>
        </ListItemText>
      </ListItem>
    </List>
  );
}
