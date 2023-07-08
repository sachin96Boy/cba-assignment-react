import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import QRimage from "../../assets/qr_code.jpg";
import Visaimage from "../../assets/visa-vector-logo.jpg";
import Masterimage from "../../assets/mastercard-vector.jpg";
import Walletimage from "../../assets/Wallet with Money in it.jpg";

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
  return (
    <Box
      sx={{
        width: "100%",
        overflow: { xs: "auto", sm: "initial" },
      }}
    >
      <Card
        sx={{
          width: "100%",
          flexWrap: "wrap",
          // make the card resizable for demo
          overflow: "auto",
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
        {/* <img
            src={
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
            alt=""
          /> */}

        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {props.cardLabel}
          </Typography>
          <Typography fontWeight="lg">
            {props.currency}: {props.amount}
          </Typography>
          <Box
            sx={{
              bgcolor: "red",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
            }}
          >
            <div>
              <Typography fontWeight="lg">Invoice No</Typography>
              <Typography fontWeight="lg">{props.invoiceNo}</Typography>
            </div>
            <div>
              <Typography fontWeight="lg">Mobile</Typography>
              <Typography fontWeight="lg">
                {props.customerMobile == null ? "None" : props.customerMobile}
              </Typography>
            </div>
            <div>
              <Typography fontWeight="lg">Recorded Pan</Typography>
              <Typography fontWeight="lg">
                {props.pan == null ? "None" : props.pan}
              </Typography>
            </div>
          </Box>
          <Typography fontWeight="lg">{props.TransDate}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ReportCard;
