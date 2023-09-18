import Block from "./Block"
import { array } from "./Matrices"

function generateColoredBlocks(arr, color, arrow) {
    return arr.map((elem) => elem ? <Block arrow={arrow} /> : <Block color={color} />)
}
function generateWhiteBlocks(arr) {
    return arr.map((elem) => <Block star={elem} />)
}

function generateWhiteColoredBlocks(arr, color) {
    return arr.map((elem) => elem ? <Block color={color} star={true} /> : <Block />)
}

const Blocks = {
    WhiteBlocksType1: generateWhiteBlocks(array.type1),
    WhiteBlocksType2: generateWhiteBlocks(array.type2),
    GreenColoredBlock: generateColoredBlocks(array.type3, "green", "down-arrow"),
    redColoredBlock: generateColoredBlocks(array.type4, "red", "left-arrow"),
    blueColoredBlock: generateColoredBlocks(array.type4, "blue", "up-arrow"),
    yellowColoredBlock: generateColoredBlocks(array.type3, "yellow", "right-arrow"),
    GreenWhiteColoredBlocks: generateWhiteColoredBlocks(array.type5, "green"),
    blueWhiteColoredBlocks: generateWhiteColoredBlocks(array.type6, "blue"),
    redWhiteColoredBlocks: generateWhiteColoredBlocks(array.type6, "red"),
    yellowWhiteColoredBlocks: generateWhiteColoredBlocks(array.type5, "yellow")
}

export default Blocks;