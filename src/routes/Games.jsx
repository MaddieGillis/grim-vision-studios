import HeroBanner from "../components/HeroBanner";
import { Container } from "@mui/material";
import GameContainer from "../components/GameContainer";

const Games = () => {
  return (
    <>
      <HeroBanner
        heading="Games"
        // text='Example text for page heading...'
        // height='long'
        // image={'./home-page.jpg'}
      />
      <Container maxWidth="xl">
        <GameContainer
          title="Untitled horror Project"
          desc="Are you ready to brave the dark depths of 1700's Siberia? Our upcoming horror game will take you on a spine-chilling adventure through a frozen landscape filled with secrets and terror. Check out our early build video. Join us on our Discord channel for access to early information and updates on the game's development. Don't miss your chance to experience the bone-chilling horror of this exciting new game!"
          // playtestingLink="/playtesting"
          url="https://discord.gg/8VTRKtj3dN"
        />
      </Container>
    </>
  );
};

export default Games;