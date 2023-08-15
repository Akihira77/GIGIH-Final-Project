import Body from "./Body";
import { useSearchParams } from "react-router-dom";
import { useGetLiveVideo } from "../../hooks/useGetLiveVideo";
import { useLeaveRoom } from "../../hooks/useLeaveRoom";

type Props = {
  socket: any;
};

const BodyContainer = ({ socket }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("searchText");
  const room = window.sessionStorage.getItem("room");
  const thumbnails = useGetLiveVideo({ searchText });
  useLeaveRoom({ room, socket });

  return (
    <>
      <Body thumbnails={thumbnails} />
    </>
  );
};

export default BodyContainer;
