"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  Stack,
  Grid,
  Paper,
  Box,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import { Edit as EditIcon, OpenInNew } from "@mui/icons-material";
import { useAccount } from "wagmi";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
// Custom styled components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  height: "100%",
}));
const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  border: `4px solid ${theme.palette.background.paper}`,
}));
export default function ColumnLayoutInsideGrid() {
  const { address, isConnected } = useAccount();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={3} offset={2}>
          <Stack spacing={2}>
            <StyledCard>
              <CardContent className="p-0 bg-gradient-to-b from-lime-100 to-white">
                <div className="pt-12 pb-4 px-2">
                  <div className="flex justify-between items-end">
                    <ProfileAvatar
                      src="/placeholder.svg?height=80&width=80"
                      alt="Profile"
                    />
                    <IconButton size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </div>
                  <Box className="mt-0.5 ">
                    {isConnected && address
                      ? address.substring(0, 12) +
                        "..." +
                        address.substring(address.length - 4)
                      : "11"}
                  </Box>
                </div>
              </CardContent>
            </StyledCard>
            <StyledCard>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-gray-700"
                  >
                    BIO
                  </Typography>
                  <Button
                    startIcon={<EditIcon fontSize="small" />}
                    size="small"
                  >
                    Edit
                  </Button>
                </div>
                <Typography variant="body2" className="mt-2">
                  WEB xiaobai!!!
                </Typography>
              </CardContent>
            </StyledCard>

            <StyledCard>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-gray-700"
                  >
                    Social
                  </Typography>
                  <Button size="small">Add</Button>
                </div>
                <Typography variant="body2" className="mt-2 text-gray-400">
                  Add your social
                </Typography>
              </CardContent>
            </StyledCard>

            <StyledCard>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-gray-700"
                  >
                    Skill
                  </Typography>
                  <Button size="small">Add</Button>
                </div>
                <Typography variant="body2" className="mt-2 text-gray-400">
                  Add your skill
                </Typography>
              </CardContent>
            </StyledCard>

            <StyledCard>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Typography
                    variant="subtitle1"
                    className="font-medium text-gray-700"
                  >
                    Language
                  </Typography>
                  <Button size="small">Add</Button>
                </div>
                <Typography variant="body2" className="mt-2 text-gray-400">
                  Add your Languages
                </Typography>
              </CardContent>
            </StyledCard>
          </Stack>
        </Grid>
        <Grid size={5}>
          <Item sx={{ height: "100%", boxSizing: "border-box" }}>Column 2</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
