import { useEffect, useState, useRef } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import { Dropper as PopperDropper } from "~/components/Dropper";
import styles from "./Search.module.scss";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);

const Search = () => {
    const ref1 = useRef();
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResult] = useState(true);
    const [loading, setLoading] = useState(true);

    const handleOnClickOutSide = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }
        setLoading(true);
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                searchValue
            )}&type=less`
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            });
       
    }, [searchValue]);

    return (
        <Tippy
            visible={
                showResults && searchResult.length > 0 && searchValue.length > 0
            }
            interactive
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <PopperDropper>
                        <h4 className={cx("search-title")}>Account</h4>
                        {searchResult.map((Results) => {
                            return (
                                <AccountItem
                                    key={Results.id}
                                    data={Results}
                                />
                            );
                        })}
                    </PopperDropper>
                </div>
            )}
            onClickOutside={handleOnClickOutSide}
        >
            <div className={cx("search")}>
                <input
                    ref={ref1}
                    value={searchValue}
                    className={cx("search-input")}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button
                        className={cx("search-close")}
                        onClick={() => {
                            setSearchValue("");
                            ref1.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {searchValue.length > 0 && loading && (
                    <button className={cx("search-loading")}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <button className={cx("search-icon")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
};

export default Search;
