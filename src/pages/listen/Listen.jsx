
import iconFolder from "../../resources/icons/folder.png"
import style from "./Listen.module.css";

const Listen = () => {
    return (
        <div className={style.container}>
            <div className={style.search}>
                <input type="text" placeholder="ファイルを検索" />
            </div>
            <div className={style.iconFolder}>
                <img src={iconFolder} alt="" />
                <div className={style.description}>
                    <div className={style.title}>
                        <span>会議</span>
                    </div>
                    <div className={style.files}>
                        <span>8個のファイル</span>
                    </div>
                </div>
            </div>

            <div className={style.iconFolder}>
                <img src={iconFolder} alt="" />
                <div className={style.description}>
                    <div className={style.title}>
                        <span>セミナー</span>
                    </div>
                    <div className={style.files}>
                        <span>4個のファイル</span>
                    </div>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.title}>
                    <span>中間報告会</span>
                </div>
                <div className={style.time}>
                    <span className={style.date}>2023/05/02</span>
                    <span className={style.time}>12:03</span>
                </div>
            </div>

        </div>
    );
}

export default Listen;