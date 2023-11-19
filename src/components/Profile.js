import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { Avatar, Card, } from "antd";

function Profile(){
    const {Meta} = Card;

    const pfp = "https://i.pinimg.com/originals/d8/f5/2c/d8f52ce52985768ccac65f9550baf49e.jpg"; 

    return(
        <div className="h-full w-full flex justify-center items-center">
            <div className="w-8/12 h-full">
                <Card className="w-full h-fit mt-10" bordered={false}>
                    <Meta
                    avatar={<Avatar src={pfp} size={75}/>}
                    title="User Name"
                    description={
                        <div id="user-info">
                            <p>420 followers</p>
                            <p>69 following</p>
                        </div>}
                    />
                    <br/>
                    <p>Profile Bio</p>
                </Card>

                <Card className="w-2/5 h-fit mt-10" style={{border:"0.05rem solid rgb(229, 229, 229)"}}>
                    <Meta
                    avatar={<Avatar src={pfp} size={50}/>}
                    title="User Name"
                    description={
                        <div>
                            <p>420 followers</p>
                        </div>
                    }
                    />
                    <br/>
                    <p>wealth fame power, gol d roger, the king of pirates, has obtained these and everything else the world has to offer</p>
                    <br/>
                    <div style={{paddingLeft: '80%'}}>
                        <LikeOutlined style={{fontSize:'20px'}}/>   8008   <DislikeOutlined style={{fontSize:'20px'}}/>
                    </div>
                </Card>
            </div>
        </div>
    )
};

export default Profile;