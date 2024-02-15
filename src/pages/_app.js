import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          },
        }}>
          <Sidebar />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
