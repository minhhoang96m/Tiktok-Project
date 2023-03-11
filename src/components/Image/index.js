import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Image.module.scss";
import { forwardRef, useState } from "react";
import images from "~/assets/images";

const Image = forwardRef(
    (
        {
            className,
            src,
            alt,
            fallBack: customFallback = images.noImage,
            ...props
        },
        ref
    ) => {
        const [fallBack, setfallback] = useState("");
        const handleOnError = () => {
            setfallback(customFallback);
        };
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallBack || src}
                onError={handleOnError}
                alt={alt}
                {...props}
            />
        );
    }
);

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
    customFallback: PropTypes.string,
};
export default Image;
