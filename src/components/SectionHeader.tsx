import { Box, Typography, Button } from "@mui/material"

interface SectionHeaderProps {
  title: string
  showActions?: boolean
}

export default function SectionHeader({ title, showActions = true }: SectionHeaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pb: 1,
        mb: 2,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      {showActions && (
        <Box>
          <Button variant="text" size="small" sx={{ color: "text.secondary", mr: 1 }}>
            Created
          </Button>
          <Button variant="text" size="small" sx={{ color: "text.secondary" }}>
            Participated
          </Button>
        </Box>
      )}
    </Box>
  )
}
