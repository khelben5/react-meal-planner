import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

interface BasicCardProps {
    title: string;
    content: string;
    image: string;
    onClick: () => void;
}

const BasicCard = ({ title, content, image, onClick }: BasicCardProps): JSX.Element => (
    <Card sx={{ minWidth: 275 }} component="div" onClick={onClick}>
        <CardMedia component="img" height="140" image={image} alt="ingredients" />
        <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
                {content}
            </Typography>
        </CardContent>
    </Card>
);

export default BasicCard;
