import img1 from "../../assets/1 img.jpg";
import img2 from "../../assets/img 2.jpg";
import img3 from "../../assets/img 3.jpeg";
import img4 from "../../assets/img 4.png";
import img5 from "../../assets/img 5.jpeg";
import img6 from "../../assets/img 6.png";
import img7 from "../../assets/img 7.png";
import img8 from "../../assets/img 8.png";
import img9 from "../../assets/img 9.png";
import img10 from "../../assets/img 10.png";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Card,
  IconButton,
  Snackbar,
} from "@mui/material";

const Product = () => {
  const cards = [
    {
      id: 1,
      name: "National Ketchup",
      img: img1,
      price: 400,
    },
    {
      id: 2,
      name: "Natural Juice",
      img: img2,
      price: 200,
    },
    {
      id: 3,
      name: "Tang Orange",
      img: img3,
      price: 500,
    },
    {
      id: 4,
      name: "Nestle Fruta",
      img: img4,
      price: 90,
    },
    {
      id: 5,
      name: "Fruta Vitals Orange",
      img: img5,
      price: 220,
    },
    {
      id: 6,
      name: "Fruta Vitals",
      img: img6,
      price: 520,
    },
    {
      id: 7,
      name: "Banana Shake",
      img: img7,
      price: 320,
    },
    {
      id: 8,
      name: "Mango Shake",
      img: img8,
      price: 190,
    },
    {
      id: 9,
      name: "Grapes Juice",
      img: img9,
      price: 110,
    },
    {
      id: 10,
      name: "Red Bull",
      img: img10,
      price: 160,
    },
  ];

  const [addingProduct, setAddingProduct] = useState([]);

  const [openAlert, setOpenAlert] = useState(false);

  const AddingCart = (products) => {
    const productExist = addingProduct.find(
      (product) => product.id === products.id
    );
    if (!productExist) {
      setAddingProduct((prev) => [...prev, products]);
      
    } else {
      setOpenAlert(true);
    }
    
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  useEffect(()=>{
    let strCartlist = JSON.stringify(addingProduct);
    localStorage.setItem("Products", strCartlist);
  },[addingProduct])

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={openAlert}
        onClose={handleClose}
        action={action}
        autoHideDuration={3000}
        message={"This item is already in cart"}
        ContentProps={{
          sx: {
            border: "1px solid black",
            borderRadius: "40px",
            color: "white",
            bgcolor: "#E53935",
            fontWeight: "bold",
          },
        }}
      />

      <div className="mt-5">
        <Typography variant="h4" color="black" sx={{ marginLeft: "50px" }}>
          Products
        </Typography>
       <Box className="container">
       <div className="row align-items-center justify-content-center gap-4">
          {cards?.map((items, index) => {
            return (
              <Card
                key={index}
                className="p-4 col-sm-6 col-md-4 col-lg-4 "
                sx={{ width: "190px" }}
              >
                <Box
                  className="d-flex align-items-center justify-content-center flex-column"
                >
                  <img src={items.img} style={{ width: "120px" }} alt="" />
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "100%" }}
                    color="black"
                  >
                    {items.name}
                  </Typography>
                  <Typography variant="body1" color="black">
                    {items.price} Rs
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => {
                      AddingCart(items);
                    }}
                    className="bg-success"
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            );
          })}
        </div>
       </Box>
      </div>
    </>
  );
};

export default Product;
