import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import QRimage from "../../assets/qr_code.jpg";
import Visaimage from "../../assets/visa-vector-logo.jpg";
import Masterimage from "../../assets/mastercard-vector.jpg";
import Walletimage from "../../assets/Wallet with Money in it.jpg";
import React from "react";
import ReportSummery from "../ReportSummery";

export interface IreportardProps {
  id: string;
  paymentMode: string;
  customerMobile: null | string;
  cardLabel: null | string;
  invoiceNo: number;
  amount: number;
  currency: string;
  pan: string | null;
  TransDate: string;
}

function ReportCard(props: IreportardProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: { xs: "auto", sm: "initial" },
      }}
      onClick={handleClickOpen}
    >
      {open && (
        <ReportSummery
          open={open}
          handleClose={handleClose}
        />
      )}
      <Card
        sx={{
          width: "100%",
          flexWrap: "wrap",
          // make the card resizable for demo
          overflow: "auto",
          m: "20px",
        }}
      >
        <CardMedia
          component="img"
          alt="Payment-type"
          height="300"
          image={
            props.paymentMode === "card" &&
            props.cardLabel?.toLowerCase() === "visa"
              ? Visaimage
              : props.paymentMode === "card" &&
                props.cardLabel?.toLowerCase() === "master"
              ? Masterimage
              : props.paymentMode === "qr"
              ? QRimage
              : Walletimage
          }
          sx={{
            objectFit: "cover",
          }}
        />

        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mx: "10px",
            }}
          >
            <Typography fontSize="xl" fontWeight="lg" variant="h5">
              {props.cardLabel?.toUpperCase()}
            </Typography>
            <Typography fontWeight="lg" variant="h5">
              {props.currency}: {props.amount}
            </Typography>
          </Box>

          <Box
            sx={{
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
            }}
          >
            <div>
              <Typography
                fontWeight="lg"
                variant="body2"
                color="text.secondary"
              >
                Invoice No
              </Typography>
              <Typography
                fontWeight="lg"
                variant="body2"
                color="text.secondary"
              >
                {props.invoiceNo}
              </Typography>
            </div>
            <div>
              <Typography
                fontWeight="lg"
                variant="body2"
                color="text.secondary"
              >
                Mobile
              </Typography>
              <Typography
                fontWeight="lg"
                variant="body2"
                color="text.secondary"
              >
                {props.customerMobile == null ? "None" : props.customerMobile}
              </Typography>
            </div>
            <div>
              <Typography
                fontWeight="lg"
                variant="body2"
                color="text.secondary"
              >
                Recorded Pan
              </Typography>
              <Typography
                fontWeight="lg"
                variant="body2"
                color="text.secondary"
              >
                {props.pan == null ? "None" : props.pan}
              </Typography>
            </div>
          </Box>
          <Typography
            sx={{
              mx: "10px",
            }}
            fontWeight="lg"
            variant="body1"
            color="text.primary"
          >
            {props.TransDate}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ReportCard;
