/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Card, Grid, Image, Text } from "@geist-ui/core";
import { LocationOn } from "@mui/icons-material";
import Head from "../../components/Misc/Head";
import ImageBlackBox from "../../components/Misc/ImageBlackBox";
import GetAQuote from "../../components/Misc/GetAQuote";

const Locations = ({ title, description, canonicalUrl }) => {
  return (
    <main className="max-w-[900px] my-12 mx-auto px-2">
      <Head title={title} description={description} url={canonicalUrl} />
      <section className="space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold text-[#6578c1]">
          MCC Locations
        </h1>
        <ImageBlackBox
          image={"bg-[url(/images/location-images/location-0.webp)]"}
          title={
            "It doesn't matter where you are located, we have a cleaner to suit your needs!"
          }
          position={"bg-center"}
        />
      </section>
      <section className="reviews-section flex flex-col items-center gap-2 my-12">
        <h2 className="text-lg md:text-2xl font-semibold text-[#6578c1]">
          Master Class Commercial Cleaning Locations
        </h2>
        <Card shadow>
          <Image
            src="/images/location-images/location-1.webp"
            // height="200px"
            // width="400px"
            draggable={false}
          />
          <Text className="text-xl font-semibold" h3 mb={0}>
            Head Quarters - Burlington
          </Text>
          <Text p type="secondary" small>
            2390 Prospect St, Burlington ON L7R 2A8
          </Text>
          <Card.Footer>
            <Link
              className="w-full flex justify-between text-[#6578c1]"
              to="https://maps.app.goo.gl/XQcH2VRRg9uV134JA"
              target="_blank"
            >
              View it on Google Maps.
              <LocationOn />
            </Link>
          </Card.Footer>
        </Card>
        <Grid.Container marginTop={"0.4rem"} gap={1} justify="center">
          <Grid xs={24} md={12}>
            <Card shadow>
              <Image
                src="/images/location-images/location-3.webp"
                // height="200px"
                // width="400px"
                draggable={false}
              />
              <Text className="text-lg font-semibold" h3 mb={0}>
                Woodbridge
              </Text>
              <Text type="secondary" small>
                190 Marycroft Ave, Woodbridge ON L4L 5Y2
              </Text>
              <Card.Footer>
                <Link
                  className="w-full flex justify-between text-[#6578c1]"
                  to="https://maps.app.goo.gl/Y3iykWTqm9pfQ2or8"
                  target="_blank"
                >
                  View it on Google Maps.
                  <LocationOn />
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={24} md={12}>
            <Card shadow>
              <Image
                src="/images/location-images/location-2.webp"
                // height="200px"
                // width="400px"
                draggable={false}
              />
              <Text className="text-lg font-semibold" h3 mb={0}>
                Milton
              </Text>
              <Text type="secondary" small>
                837 Cousens Terrace, Milton ON L9T 0G1
              </Text>
              <Card.Footer>
                <Link
                  className="w-full flex justify-between text-[#6578c1]"
                  to="https://maps.app.goo.gl/wKJnWHBrirRHrqsC7"
                  target="_blank"
                >
                  View it on Google Maps.
                  <LocationOn />
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </section>
      <GetAQuote />
    </main>
  );
};

export default Locations;
