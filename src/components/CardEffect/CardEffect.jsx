import { motion } from 'framer-motion';

const CardEffect = ({title, children}) => {
    return (
        <motion.div
            className=" bg-white overflow-hidden relative"
            whileHover={{ backgroundColor: "white" }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="absolute inset-0 flex items-center justify-center bg-[#141414]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                animate={{ scale: 2 }}
            >
                <span className="text-white text-xl font-semibold">{title}</span>
            </motion.div>

            <div className="p-4">{children}</div>

        </motion.div>
  );
};

export default CardEffect;