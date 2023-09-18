import "../css/Ludo.css"
import CircleBlock from "./CircleBlock"
import Blocks from "./GenerateFunc";
import VerBlock from "./VerBlock";
import HorBlock from "./HorBlock";

export default function Ludo() {
    return (
        <div className="board" style={{ width: "600px", margin: "0 auto" }}>
            <div style={{ clear: "both" }}>
                <div className="yellow-maze" style={{ float: "left", width: "55%", position: "relative" }}>
                    <CircleBlock color="yellow" />
                    <VerBlock data={Blocks.WhiteBlocksType2} />
                    <VerBlock data={Blocks.GreenColoredBlock} />
                    <VerBlock data={Blocks.GreenWhiteColoredBlocks} />
                    <HorBlock data={Blocks.yellowWhiteColoredBlocks} />
                    <HorBlock data={Blocks.yellowColoredBlock} />
                    <HorBlock data={Blocks.WhiteBlocksType2} />
                    <div className="middle">
                        <div className="top"></div>
                        <div className="left"></div>
                        <div className="right"></div>
                        <div className="bottom"></div>
                    </div>
                </div>
                <div className="green-maze" style={{ float: "left", width: "43%", marginLeft: "-2px" }}>
                    <CircleBlock color="green" />
                    <HorBlock data={Blocks.WhiteBlocksType1} />
                    <HorBlock data={Blocks.redColoredBlock} />
                    <HorBlock data={Blocks.redWhiteColoredBlocks} />
                </div>

            </div>
            <div style={{ clear: "both" }}>
                <div className="blue-maze" style={{ float: "left", width: "55%" }}>
                    <CircleBlock color="blue" />
                    <VerBlock data={Blocks.blueWhiteColoredBlocks} />
                    <VerBlock data={Blocks.blueColoredBlock} />
                    <VerBlock data={Blocks.WhiteBlocksType1} />
                </div>
                <div className="red-maze" style={{ float: "left", width: "43%", marginLeft: "-2px" }}>
                    <div style={{ float: "left" }}>
                        <CircleBlock color="red" />
                    </div>
                </div>
            </div>
        </div>
    );
}