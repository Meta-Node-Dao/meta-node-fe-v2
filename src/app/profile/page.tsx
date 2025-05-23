"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  Stack,
  Container,
  Paper,
  Box,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Grid,
  Button,
} from "@mui/material";
import { Edit as EditIcon, OpenInNew } from "@mui/icons-material";
import { useAccount } from "wagmi";
import ProfileSection from "@/components/ProfileSection";
import ProjectCard from "@/components/ProjectCard";
import BountyCard from "@/components/BountyCard";
import LaunchpadCard from "@/components/LaunchpadCard";
import SectionHeader from "@/components/SectionHeader";
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
    // <Container maxWidth="xl" className="py-6">
    //     <Grid container spacing={3}>
    //       {/* Left Sidebar - Profile */}
    //       <Grid  xs={12} md={4} lg={3}>

    //       </Grid>

    //       {/* Right Content Area */}
    //       <Grid item xs={12} md={8} lg={9}>

    //       </Grid>
    //     </Grid>
    //   </Container>
    <Box sx={{ flexGrow: 1, pt: 2 }}>
      <Grid container spacing={2}>
        <Grid size={3} offset={2}>
          <Box className="space-y-4">
            <Card variant="outlined">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="h-40 bg-lime-100"></div>
                  <ProfileAvatar
                    src="/placeholder.svg?height=80&width=80"
                    alt="Profile"
                  />
                  <div className="pt-12 pb-4 px-6">
                    <div className="flex justify-between items-start">
                      <Typography variant="h6" className="font-bold">
                        {isConnected && address
                          ? address.substring(0, 6) +
                            "..." +
                            address.substring(address.length - 4)
                          : "WEconomy_277a15711ede"}
                      </Typography>
                      <IconButton size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ProfileSection
              title="BIO"
              content="WEB xiaobai!!!"
              actionLabel="Edit"
            />
            <ProfileSection
              title="Social"
              content="Add your social"
              actionLabel="Add"
              empty
            />
            <ProfileSection
              title="Skill"
              content="Add your skill"
              actionLabel="Add"
              empty
            />
            <ProfileSection
              title="Language"
              content="Add your Languages"
              actionLabel="Add"
              empty
            />
          </Box>
        </Grid>
        <Grid size={5}>
          <Item sx={{ height: "100%", boxSizing: "border-box" }}>
            <Paper
              elevation={0}
              sx={{
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
                p: 2,
                mb: 3,
              }}
            >
              <SectionHeader title="Projects" />
              <ProjectCard title="DEX Protocol" />
            </Paper>

            <Paper
              elevation={0}
              sx={{
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
                p: 2,
                mb: 3,
              }}
            >
              <SectionHeader title="Bounty" />
              <BountyCard
                title="开发跨链资产桥协议"
                tag="智能合约审计"
                status="Started working"
                stage="Stage"
                createdAt="Created just now"
                applicants={8}
                reward="15000 MLT + 2 ETH"
                deposit={{ type: "USDC", amount: 400 }}
              />
            </Paper>

            <Paper
              elevation={0}
              sx={{ border: 1, borderColor: "divider", borderRadius: 1, p: 2 }}
            >
              <SectionHeader title="Fair Launchpad" />
              <LaunchpadCard
                title="CrossFi流动性众筹"
                status="Live"
                goal="500000 MLT"
                progress="420000 MLT(84 %)"
              />
            </Paper>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
