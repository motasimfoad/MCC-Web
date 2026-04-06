import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowCircleRightIcon sx={{ fontSize: "2em" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        style={{ background: "#e2e4e7" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h4 style={{ margin: "0" }}>Leave a Lasting Impression</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ margin: "0" }}>
            How do customers recognize you’re running a reliable business and
            you operate on a professional level? Leave them a lasting
            impression. If your office space is unintimidating yet emanates an
            aura of authority, customers and clients know you mean business.
          </p>
          <p>
            The cleanliness of your office represents your brand. Through a
            professional cleaning service company like MCC, you’ll never see
            another potential customer or client walk out the door.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ background: "#e2e4e7" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h4 style={{ margin: "0" }}>Increased Productivity</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ margin: "0" }}>
            Visual clutter is mental clutter. If you want your team members to
            be their most productive selves, you must ensure they’re free of
            distractions. Every minute you run an office with cluttered spaces,
            you lose valuable man-hours.
          </p>
          <p>
            Guaranteeing employee productivity is not just about purchasing
            advanced tools. It’s also about dusting, cleaning, and maintaining
            your office spaces which you can easily attain through commercial
            cleaning services.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ background: "#e2e4e7" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <h4 style={{ margin: "0" }}>Reduced Hazards</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ margin: "0" }}>
            Loose cables, empty boxes lying around, and equipment covering
            emergency exits. These environmental hazards put your facility at a
            high risk of accidents. Our commercial cleaning services consider
            these risks to improve or maintain the safety standards of your
            office.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ background: "#e2e4e7" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <h4 style={{ margin: "0" }}>Healthy Environment</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ margin: "0" }}>
            Providing employees with health care benefits is a waste if business
            owners can’t establish a healthy working environment. After all, an
            unsanitary workplace will eventually become the source of diseases
            amongst your team.
          </p>
          <p>
            The only way to guarantee that your office is safe, healthy, and
            maybe even environmentally friendly is by employing the services of
            a commercial cleaning company.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ background: "#e2e4e7" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <h4 style={{ margin: "0" }}>
            Avoid Heavy Repair & Replacement Costs
          </h4>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ margin: "0" }}>
            Did you know that the lifespan of your office furniture and
            equipment relies heavily on constant maintenance? If you want to
            avoid heavy repair and replacement costs, regularly cleaning your
            facility is one way to do so.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
