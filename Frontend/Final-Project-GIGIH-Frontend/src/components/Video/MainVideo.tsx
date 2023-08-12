import { MainVideoContainer } from "./VideoStyled";

type Props = {
  video: string;
};

const MainVideo = ({ video }: Props) => {
  return (
    <MainVideoContainer>
      <div className="youtube__video">
        <iframe
          src={video}
          title="Embedded Youtube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </MainVideoContainer>
  );
};

export default MainVideo;
