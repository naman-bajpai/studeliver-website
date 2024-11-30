import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import "../styles/globals.css"; // Your global styles

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* Animate the page transition */}
      <motion.div
        key={router.route}
        initial={{ opacity: 0, x: 50 }} // Starting state
        animate={{ opacity: 1, x: 0 }}  // Final state
        exit={{ opacity: 0, x: -50 }}   // Exit state
        transition={{ duration: 0.5 }}  // Duration of animation
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
