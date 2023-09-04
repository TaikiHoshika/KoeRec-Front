
import style from "./ColorPicker.module.scss";

const ColorPicker = ({colors, onChangeColor}) => {

    const handlerChangeColor = (event) => {
        onChangeColor(event.target.value);
    }

    return (
        <div className={style.container}>
            {colors.map((color) => (
                <div className={style.colorPicker} style={{backgroundColor: color}} key={color}>
                    <div className={style.button}>
                        <input type="radio" name="color" value={color} onChange={handlerChangeColor}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ColorPicker;