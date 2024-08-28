import * as React from "react";
import Box from "@mui/material/Box";
import { Step, StepLabel, Stepper } from "@mui/material";
import { HorizontalStepperProps } from "@/types";
import "./index.css";

const steps = ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED"];

export const statusToStepIndex = (status: string) => {
  switch (status) {
    case "PENDING":
      return 1;
    case "PROCESSING":
      return 2;
    case "SHIPPED":
      return 3;
    case "DELIVERED":
      return 4;
    default:
      return 1;
  }
};

export default function HorizontalStepper({ status }: HorizontalStepperProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={statusToStepIndex(status)} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
