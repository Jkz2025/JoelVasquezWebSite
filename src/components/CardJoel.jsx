import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Instagram } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/311868521_106947825551416_2588292935968046165_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHBEflfefET_2-2PUxDjBDugwc1N8C-H1eDBzU3wL4fV6Ifc7cC3UTqQfquQD1V86_kuPIOzvQngyyHG4W_Czfo&_nc_ohc=3LJXv6vZXm0AX842dsS&_nc_ht=scontent.fclo1-4.fna&oh=00_AfAhGthwDirE4NOOAvAMZZEqeBv1unrekACnHaIP0upSqg&oe=63FD1D99"
        title="Joel Vasquez Dj"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Joel vasquez dj
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Hi, I'm Joel Vasquez, a DJ, I'm from Cali Colombia, I'm 21 years old, I want to travel the world. My dream is to one day be a very good artist and web developer.
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://www.facebook.com/profile.php?id=100087085968145" target="_blank" rel="noopener noreferrer">Facebook</a>
        <FacebookIcon/>
        <a href="https://www.instagram.com/joel.djoficial/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <Instagram/>
        <a href="https://api.whatsapp.com/send?phone=+573054265468&text=Hola%20Joel%20Vasquez,%20%C2%BFComo%20estas?%20estuve%20revisando%20tu%20pagina%20web%20y%20estaba%20interesad@%20en%20contactarte,%20me%20podrias%20atender?" target="_blank" rel="noopener noreferrer">Whatsapp</a>
        <WhatsAppIcon/>
      </CardActions>
    </Card>
  );
}
