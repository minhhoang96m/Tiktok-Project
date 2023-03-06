import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faKeyboard,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
    faMoon,
    faCloudUpload,
    faCableCar,
    faSun,
    faMoneyCheckDollar,
    faSignOut,

} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Tippy from "@tippyjs/react/headless";
import CloneTippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import { Dropper as PopperDropper } from "~/components/Dropper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/components/AccountItem";
import Menu from "~/components/ListResult";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tieng Viet",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and Help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcut",
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: "Dark mode",
    },
];
function Header() {
    const [searchResult, setsearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([...searchResult]);
        }, 0);
    }, [searchResult]);
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // console.log(menuItem.type);
                break;
            default:
            // console.log("Khong co type");
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCableCar} />,
            title: "View profile",
        },
        {
            icon: <FontAwesomeIcon icon={faMoneyCheckDollar} />,
            title: "Get coins",
        },
        {
            icon: <FontAwesomeIcon icon={faSun} />,
            title: "Settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: "/logout",
            separate :true,
        },
    ];
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div
                            className={cx("search-result")}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <h4 className={cx("search-tittle")}>Account</h4>
                            <PopperDropper>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperDropper>
                        </div>
                    )}
                    
                >
                    <div className={cx("search")}>
                        <input
                            className={cx("search-input")}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />

                        <button className={cx("search-close")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx("search-loading")}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>

                        <button className={cx("search-icon")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <CloneTippy
                                interactive
                                delay={[0, 200]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                                {/* <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button> */}
                            </CloneTippy>
                        </>
                    ) : (
                        <>
                            <Button
                                text={true}
                                icon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Button primary={true}>Login</Button>
                        </>
                    )}
                    <Menu items={ currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx("user-avatar")}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c3a691d2863e61d0442e0e017fc36e0a~c5_100x100.jpeg?x-expires=1678280400&x-signature=y2A44i45NMqoUqpxp1%2BZzN2ifcY%3D"
                                alt="ok"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
