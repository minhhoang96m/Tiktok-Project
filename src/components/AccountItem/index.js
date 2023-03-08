import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { Link } from "react-router-dom";
import Image from "../Image";

import React from "react";
// import MyContext from "~/components/AccountItem/MyContext.js";
// import Datas from '~/routes' 

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    // setok(refs.current)
    return (
        

            <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
                <Image className={cx("avatar")} src={data.avatar} alt={data.alt} />
                <div className={cx("info")}>
                    <p className={cx("name")}>
                        <span> {data.full_name} </span>
                        {data.tick && (
                            <FontAwesomeIcon
                                className={cx("check")}
                                icon={faCheckCircle}
                            />
                        )}
                    </p>
                    <span className={cx("username")}> {data.nickname} </span>
                </div>
           
            </Link>
  
         
    );
}


export default AccountItem;

