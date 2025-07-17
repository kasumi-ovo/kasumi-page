import { motion } from "motion/react";

type Props = {
    classNames?: string;
} & React.PropsWithChildren

const SpringEffect: React.FC<Props> = ({ children, classNames }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.3,
                rotate: 5,
                transition: { type: "spring", stiffness: 300, damping: 6, mass: 0.6 }
            }}
            whileTap={{ scale: 0.8 }}
            className={classNames}
        >
            {children}
        </motion.div>
    )
}

export default SpringEffect;