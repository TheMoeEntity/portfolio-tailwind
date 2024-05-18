"use client";
import { useScrollTop, useWhatsappLink } from "@/Helpers/hooks";
import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Toaster } from 'react-hot-toast';
import { useValidRoute } from "@/Helpers/hooks";
import NotFound from "../app/not-found";
import { SnackbarProvider } from "notistack";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Loader from "@/components/Loader";

const Template = ({ children }: { children: ReactNode }) => {
  const { pathname } = useScrollTop();
  const isHome = pathname == '/' 

  if (useValidRoute(pathname)) {
    return (
      <SnackbarProvider
        classes={{ containerRoot: "z-alert" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Toaster
          toastOptions={{
            style: {
              zIndex: '99999999',
              background: 'white'
            }
          }}
        />
        <Loader />
        {isHome && <Header />}
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "circInOut", duration: 1 }}
        >
          {children}
        </motion.div>
      </SnackbarProvider>
    );
  } else {
    return <NotFound />;
  }
};

export default Template;
