"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import toast from "react-hot-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { cn, isEmail } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { sendEmails } from "@/lib/actions/resend.action"
import supabase from "@/lib/supabase"
import SubForm from "./SubForm"

export default function DialogForm({
  buttonText = "Join Now",
  type = "default",
  other,
  page,
  pageId,
  large,
}: any) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={type}
            className={cn(
              "rounded-md mx-auto shadow-md bg-red-500 hover:text-white text-white w-fit px-8 py-4 hover:bg-red-600",
              large && "text-xl py-10 px-8",
              other && other
            )}
          >
            {buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter the Metaverse - Online Event Ticket</DialogTitle>
            <DialogDescription>
              This is a once in a life time opportunity to accelerate your
              business into the technologies of the future!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <SubForm
              buttonText={buttonText}
              type={type}
              page={page}
              pageId={pageId}
              large={large}
            />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
