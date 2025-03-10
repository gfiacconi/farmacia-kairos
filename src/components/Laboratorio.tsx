import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

const prodotti = [
    "/prodotti/farmaco1.svg",
    "/prodotti/farmaco2.svg",
    "/prodotti/farmaco3.svg",
];

const Laboratorio = () => {
    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <Box className="py-10 bg-gray-100 text-center">
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "primary.main" }}>
                I prodotti del nostro laboratorio
            </Typography>
            <Slider {...settings}>
                {prodotti.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Prodotto ${index}`} className="h-70 w-full object-cover rounded-md m-4" />
                    </div>
                ))}
            </Slider>
        </Box>
    );
};

export default Laboratorio;