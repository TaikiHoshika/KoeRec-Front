import Recorder from "../../components/recorder/Recorder";

import style from "./Record.module.css";

const Record = () => {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <span className={style.header}>ストレージ</span>
                <div className={style.storage}>
                    <div className={style.progressBar}>
                        <div
                            className={style.bar}
                            style={{width: "67%"}}
                        >
                        </div>
                    </div>
                    <div className={style.using}>
                        <span>67GB / 100GB</span>
                        <a href={false}>ストレージを拡張する</a>
                    </div>
                </div>
            </div>

            <div className={style.component}>
                <Recorder />
            </div>
        </div>
    );
}

export default Record;