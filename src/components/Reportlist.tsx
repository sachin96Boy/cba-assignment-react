import React from "react";
import instance from "../utils/AxiosInstance";
import { AxiosResponse } from "axios";
import { Box, Divider, Stack } from "@mui/material";
import ReportCard from "./Reportcard/ReportCard";

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
        <Box>loading</Box>
      ) : isError ? (
        <Box>Something went Wrong</Box>
      ) : (
        <Stack direction={"column"} spacing={4} divider={<Divider flexItem />}>
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
