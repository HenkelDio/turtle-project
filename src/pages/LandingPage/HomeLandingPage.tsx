import { Box } from "@chakra-ui/react";
import SimpleThreeColumns from "../../components/LandingPage/SimpleThreeColumns";
import SplitWithImage from "../../components/LandingPage/SplitWithImage";
import FooterLandingPage from "../../components/LandingPage/FooterLandingPage";

export default function HomeLandingPage() {
	return (
		<>
			<SplitWithImage />
			<Box p={50} bg={"#1A202C"}>
				<SimpleThreeColumns />
			</Box>
			<FooterLandingPage />
		</>
	)
}