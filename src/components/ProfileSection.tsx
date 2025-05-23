import { Card, CardContent, Typography, Button, Box } from "@mui/material"
import { Edit } from "@mui/icons-material"

interface ProfileSectionProps {
  title: string
  content: string
  actionLabel: "Edit" | "Add"
  empty?: boolean
}

export default function ProfileSection({ title, content, actionLabel, empty = false }: ProfileSectionProps) {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, color: "text.secondary" }}>
            {title}
          </Typography>
          <Button
            size="small"
            startIcon={actionLabel === "Edit" ? <Edit fontSize="small" /> : undefined}
            sx={{ textTransform: "none" }}
          >
            {actionLabel}
          </Button>
        </Box>
        <Typography variant="body2" sx={{ color: empty ? "text.disabled" : "text.primary" }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}
