import {  List, ListItem, ListItemAvatar,Avatar,ListItemText } from "@mui/material"
// import Image from "next/image"
import {Image,Work} from '@mui/icons-material';

interface ProjectCardProps {
  title?: string
  icon?: string
}

export default function ProjectCard({ title, icon = "/placeholder.svg?height=40&width=40" }: ProjectCardProps) {
  return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="DEX Protocol" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Work />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="NFT Protocol" secondary="Jan 7, 2014" />
      </ListItem>
    </List>
  )
}
