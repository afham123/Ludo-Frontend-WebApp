export default function CircleBlock({ color }) {
    const styleclass = "circle " + color;
    return (
        <div className="main-box">
            <div className="row-circles">
                <div className={styleclass}></div>
                <div className={styleclass}></div>
            </div>
            <div className="row-circles">
                <div className={styleclass}></div>
                <div className={styleclass}></div>
            </div>
        </div>
    )
}