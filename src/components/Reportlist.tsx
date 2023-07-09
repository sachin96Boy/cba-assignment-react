import React from "react";
import instance from "../utils/AxiosInstance";
import { AxiosResponse } from "axios";
import { Box, Divider, Stack } from "@mui/material";
import ReportCard from "./Reportcard/ReportCard";
import LoadingSpinner from "./spinner/LoadingSpinner";
import Errorcomponent from "./error/Errorcomponent";

function Reportlist() {
  const [reportList, setReportList] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const [isError, setIserror] = React.useState(false);

  React.useEffect(() => {
    instance
      .get("/detailed-transaction")
      .then((response: AxiosResponse) => {
        if (response.status == 200) {
          setReportList(response.data["transaction"]["transaction_list"]);
          setIsloading(false);
        }
      })
      .catch((err) => {
        setIsloading(false);
        setIserror(true);
        console.log(err);
      });
  }, []);

  const showingReports = (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
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
            minHeight: "100vh",
          }}
        >
          <Errorcomponent />
        </Box>
      ) : (
        <Stack
          direction={"column"}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
          spacing={4}
          divider={<Divider flexItem />}
        >
          {reportList.map((report: any) => (
            <Box key={report.id}>
              <ReportCard
                id={report.id}
                paymentMode={report.paymentMode}
                customerMobile={report.custMobile}
                cardLabel={report.cardLabel}
                invoiceNo={report.invoiceNo}
                amount={report.amount}
                currency={report.currency}
                pan={report.pan}
                TransDate={report.dateTime}
              />
            </Box>
          ))}
        </Stack>
      )}
    </>
  );

  return showingReports;
}

export default Reportlist;
