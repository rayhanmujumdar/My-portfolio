import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactOwlCarousel from "react-owl-carousel";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function Project({ project }) {
  const { id, title, images, description } = project;
  const navigate = useNavigate()
  return (
    <Card
      className="flex justify-between flex-col"
      sx={{maxWidth: 345}}
    >
      <ReactOwlCarousel
        items={1}
        autoplay
        loop
        autoplayTimeout={2000}
        autoplayHoverPause={true}
      >
        {images.map((img, index) => (
          <CardMedia
            key={index}
            className="item"
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
        ))}
      </ReactOwlCarousel>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
          <ol className="list-disc">
            {description.map((des, index) => (
              <li key={index}>{des}</li>
            ))}
          </ol>
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <Button onClick={() => navigate(`/project/${id}`)} variant="contained" endIcon={<SendIcon />}>
            more info
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
