import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import instance from "../utils/AxiosInstance";
import { AxiosResponse } from "axios";
import LoadingSpinner from "./spinner/LoadingSpinner";
import Errorcomponent from "./error/Errorcomponent";

interface iReportSumery {
  totalTransactionCount: number;
  totalRevenue: number;
  totalCardTransaction: number;
  totalCashTransaction: number;
  totalQrTransaction: number;
}

interface ipropsSummery {
  open: boolean;
  handleClose: () => void;
}

function ReportSummery(props: ipropsSummery) {
  const [isloading, setIsloading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [reportSummery, setReportSummery] = React.useState<iReportSumery>();

  React.useEffect(() => {
    instance
      .get("/transaction-summary")
      .then((response: AxiosResponse) => {
        if (response.status == 200) {
          setReportSummery(response.data["summery"]);
          setIsloading(false);
        }
      })
      .catch((err) => {
        setIsloading(false);
        setIsError(true);
        console.log(err);
      });
  }, []);

  const reportSummeryDetails = (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Transaction details</DialogTitle>
      <Box>
        {isloading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoadingSpinner />
          </Box>
        ) : isError ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Errorcomponent />
          </Box>
        ) : (
          <>
            <DialogContent>
              <DialogContentText>
                Details on the Transaction Below
              </DialogContentText>
              <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <Typography variant="body1">
                  Total Transactions : {reportSummery?.totalTransactionCount}
                </Typography>
                <Typography variant="body1">
                  Total Revenue : {reportSummery?.totalRevenue}
                </Typography>
                <Typography variant="body1">
                  Total Credit Transactions :{" "}
                  {reportSummery?.totalCardTransaction}
                </Typography>
                <Typography variant="body1">
                  Total cash transactions :{" "}
                  {reportSummery?.totalCashTransaction}
                </Typography>
                <Typography variant="body1">
                  Total QR transactions : {reportSummery?.totalQrTransaction}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={props.handleClose}>Close</Button>
            </DialogActions>
          </>
        )}
      </Box>
    </Dialog>
  );

  return reportSummeryDetails;
}

export default ReportSummery;
