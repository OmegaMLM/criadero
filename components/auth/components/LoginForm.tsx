"use client";

import { Button, Divider, ResizablePanel } from "@heroui/react";
import { m, domAnimation, LazyMotion } from "framer-motion";
import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <ResizablePanel>
          <h1 className="mb-4 text-xl text-center font-medium text-default-foreground">
            Ingresar al sistema
          </h1>
          <LazyMotion features={domAnimation}>
            <m.div
              animate="visible"
              className="flex flex-col gap-y-2"
              exit="hidden"
              initial="hidden"
              variants={variants}
            >
              <Button
                fullWidth
                startContent={<Icon icon="logos:google-icon" width={24} />}
                variant="flat"
                onPress={() => signIn("google", { callbackUrl: "/" })}
              >
                Ingresar con Google
              </Button>
            </m.div>
          </LazyMotion>
        </ResizablePanel>
      </div>
    </div>
  );
}
