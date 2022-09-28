import React from 'react'
import { motion } from 'framer-motion'
import styled from "styled-components";

const StyledOverlay = styled(motion.div)`
    position: fixed;
    height: 100vh;
    width: 100vw;
    inset: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 50;
`
const Overlay = ({ handleOverlayClick }) => {
  return (
    <StyledOverlay initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={handleOverlayClick} />
  )
}

export default Overlay