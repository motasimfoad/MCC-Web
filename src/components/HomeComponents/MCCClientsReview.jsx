import { Card, Grid, Text } from "@geist-ui/core";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const reviews = [
  {
    review:
      "Zoltan and his team are phenomenal and will always go the extra mile for you and your business. They have exceeded our expectation with the budget we agreed with and we would recommend them to anyone. They are professional and courteous with excellent customer service!",
    from: "MONTGOMERY PHARMACY.",
  },
  {
    review:
      "Master Class have been providing cleaning services for our office building for over a year now and have been consistent with their high cleaning quality and standards. The cleaning crew are professional, punctual and thorough. The office of Master Clean periodically calls in to check that we are satisfied with work and there&apos;s no issues. They take proactive measures to ensure customer satisfaction.",
    from: "CIMCO Refrigeration.",
  },
  {
    review:
      "The team at Master Class Commercial Cleaning is great! They are quick to communicate and demonstrate genuine care for their customers. We use their janitorial services in a few of our retail locations and are very happy with their attention to detail and willingness to work with us to find the best solutions. Would highly recommend them for all your cleaning needs!",
    from: "Mountain Equipment Company (MEC).",
  },
];

const MCCClientsReview = () => {
  return (
    <>
      <Grid.Container gap={1} justify="center">
        {reviews.map((item) => (
          <Grid xs={24} md={12} key={item.from}>
            <Card shadow width="100%">
              <FormatQuoteIcon
                className="rotate-180 text-[#6578c1]"
                fontSize="large"
              />
              <Text className="italic text-sm/7 md:text-base/8">
                {item.review}
              </Text>
              <FormatQuoteIcon className="text-[#6578c1]" fontSize="large" />
              <Text p type="secondary" className="italic">
                {item.from}
              </Text>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default MCCClientsReview;
