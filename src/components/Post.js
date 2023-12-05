import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import {
  EllipsisOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { getItem } from "../utils/helper_functions";
import { Image, Dropdown } from "antd";
import Feedback from "./Feedback";
import { useNavigate } from "react-router-dom";

function Post(props) {
  // pid is the id of this particular post, uuid is the id of the user who POSTED this particular post (not the user logged in)
  const { message, pid, uuid } = props;
  const [username, setUsername] = useState(null);
  const [subscribers, setSubscribers] = useState(null);
  const [avatarUrl, setAvatarURL] = useState(null)
  const navigate = useNavigate()

  const items = [
    getItem(
      "Report Message",
      "report",
      <ExclamationCircleOutlined className="text-[#F24E1E] text-lg" />
    ),
  ];

  const getData = async () => {
    try {
      const resp = await supabase.from("user").select().eq("id", uuid);
      setUsername(resp.data[0].user_name);
      setSubscribers(resp.data[0].subscribers);
      setAvatarURL(resp.data[0].avatar_url)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-full py-5 flex flex-col justify-between">
      <div className="flex w-11/12 justify-between mx-auto items-center">
        <div className="flex gap-4 w-4/12 items-center">
          <Image
            height={45}
            width={45}
            className="rounded-full"
            preview={false}
            src={avatarUrl}
          />
          <div className="flex flex-col">
            <p className="text-lg font-bold">{username}</p>
            <p className="text-xs text-[#7C7C7C]">{subscribers} subscribers</p>
          </div>
        </div>
        <Dropdown menu={{ items }} >
          <EllipsisOutlined className="text-2xl font-bold text-[#8C8C8C]" />
        </Dropdown>
      </div>
      <div className="w-11/12 flex items-center mx-auto cursor-pointer" onClick={() => navigate('/post', {state: pid})}>
        <p className="text-base">{message}</p>
      </div>
      <Feedback pid={pid} uuid={uuid} />
    </div>
  );
}
export default Post;
