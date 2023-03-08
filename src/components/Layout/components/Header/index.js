import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faEarthAsia,
    faKeyboard,
    faEllipsisVertical,
    faPlus,
    faMoon,
    faCableCar,
    faSun,
    faMoneyCheckDollar,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import CloneTippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";

import styles from "./Header.module.scss";
import images from "~/assets/images";

import Menu from "~/components/ListResult";
import Image from "~/components/Image";
import { IconInbox, IconMessage } from "~/components/Icon";
import Search from "../Search";

import { Route, Link } from "react-router-dom";
import Home from "~/pages/Home";

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
    const currentUser = true;

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
            separate: true,
        },
    ];
    const handleClickHomePage = () => {
        return <Route path="/" element={<Home />} />;
    };
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <Link to="/">
                        <img
                            src={images.logo}
                            alt="Tiktok"
                            onClick={handleClickHomePage}
                        />
                    </Link>
                </div>

                <Search />

                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <CloneTippy
                                delay={[0, 50]}
                                content="Messages"
                                placement="bottom"
                            >
                                <Button text className={cx("action-upload")}>
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        className={cx("icon-upload")}
                                    />
                                    <span>Upload</span>
                                </Button>
                            </CloneTippy>
                            <CloneTippy
                                delay={[0, 50]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <IconMessage className={cx("icon-mes")} />
                                </button>
                            </CloneTippy>
                            <CloneTippy
                                delay={[0, 50]}
                                content="Messages"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <IconInbox className={cx("icon-inbox")} />
                                </button>
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
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c3a691d2863e61d0442e0e017fc36e0a~c5_100x100.jpeg?x-expires=1678280400&x-signature=y2A44i45NMqoUqpxp1%2BZzN2ifcY%3D"
                                alt="ok"
                                fallBack="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3c471a7fb8b64142610f545f61641c83~c5_100x100.jpeg?x-expires=1678370400&x-signature=TUxCR%2BzegHJeoTThjKWVJJJfbcA%3D"
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
