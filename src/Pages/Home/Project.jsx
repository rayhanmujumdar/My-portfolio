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
import Details from "../Details/Details";

export default function Project({ project }) {
  const { id, title, images, description } = project;
  const navigate = useNavigate();
  function openModal() {
    setIsOpen(true);
  }
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
      <Card
        className="flex justify-between flex-col"
        sx={{ maxWidth: 345, padding: "10px" }}
      >
        <ReactOwlCarousel
          items={1}
          
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
            <Button
              sx={{ background: "#112B3C" }}
              onClick={openModal}
              variant="contained"
              endIcon={<SendIcon />}
            >
              more info
            </Button>
            <Details
              project={project}
              modalIsOpen={modalIsOpen}
              openModal={openModal}
              setIsOpen={setIsOpen}
            ></Details>
          </Stack>
        </CardActions>
      </Card>
  );
}
