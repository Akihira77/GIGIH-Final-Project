import React, { useEffect, useState } from "react";
import { MainVideoContainer } from "./VideoStyled";
import { getVideoById } from "../../utils/fetchApi";

type Props = {
  videoId: string;
};

const MainVideo = ({ videoId }: Props) => {
  const [video, setVideo] = useState();
  useEffect(() => {
    const getVideo = async () => {
      const { axiosResponse } = await getVideoById(videoId);

      console.log(axiosResponse);
      setVideo(axiosResponse?.data.data.url);
    };
    getVideo();
  }, [videoId]);

  console.log(video);
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
