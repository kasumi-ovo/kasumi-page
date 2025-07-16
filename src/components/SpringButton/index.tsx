import { motion } from "motion/react";
import styles from "./index.module.css";

type Props = {
    ariaLabel?: string,
    bgColor?: string
} & React.PropsWithChildren

const SpringButton: React.FC<Props> = ({ children, ariaLabel, bgColor }) => {
    return (
        <motion.button
            whileHover={{
                scale: 1.3,
                rotate: 5,
                transition: { type: "spring", stiffness: 300, damping: 6, mass: 0.6 }
            }}
            whileTap={{ scale: 0.8 }}
            className={`${styles['button-container']} ${bgColor}`}
            aria-label={ariaLabel}
        >
            {children}
        </motion.button>
    )
}

export default SpringButton;