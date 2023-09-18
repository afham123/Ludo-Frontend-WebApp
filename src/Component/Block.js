export default function Block({ star, color, arrow, coin }) {

    const styleclass = "block" + (star ? " star" : "") + (color ? " " + color : "") + (arrow ? " " + arrow : "");
    return <div className={styleclass} >
        {coin && <div className="coin" style={{ backgroundColor: color }}>
        </div>}
    </div>
}