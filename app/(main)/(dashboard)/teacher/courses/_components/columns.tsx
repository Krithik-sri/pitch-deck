"use client";

import { Button } from "@/components/ui/button";
import { Course } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ClipboardIcon, Edit2, Eye, Trash2 } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { toast } from "sonner";
import axios from "axios";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { AiFillEyeInvisible } from "react-icons/ai";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    enableHiding: false,
  },

  {
    accessorKey: "isPublished",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Published
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isPublished = row.getValue("isPublished") || false;

      return (
        <Badge variant={isPublished ? "default" : "secondary"}>
          {isPublished ? (
            "Published"
          ) : (
            <>
              <AiFillEyeInvisible className="mr-1" /> Draft
            </>
          )}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const course = row.original;
      const onDelete = async () => {
        try {
          await axios.delete(`/api/courses/${course.id}`);
          toast.success("Course deleted!");
          redirect(`/teacher/courses`);
        } catch (error) {
          toast.error("Something went wrong!");
        }
      };

      return (
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(course.id)}
              >
                <ClipboardIcon className="w-4 h-4 mr-2" />
                Copy pitch ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link href={`/courses/${course.id}`}>
                <DropdownMenuItem>
                  <Eye className="w-4 h-4 mr-2" />
                  View pitch
                </DropdownMenuItem>
              </Link>
              <Link href={`/teacher/courses/${course.id}`}>
                <DropdownMenuItem>
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit pitch Details
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <DialogTrigger className="flex gap-1 items-center w-full">
                  <>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete pitch
                  </>
                </DialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent className="sm:max-w-[425px] border">
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete this
                pitch and remove it&apos;s data from our database.
              </DialogDescription>
            </DialogHeader>
            <div className="flex w-full gap-2 items-center">
              <DialogClose asChild>
                <Button
                  className="w-full rounded-md hover:scale-100"
                  variant="outline"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                className="w-full rounded-md hover:scale-100"
                variant="destructive"
                onClick={onDelete}
              >
                Delete Pitch
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      );
    },
    enableHiding: false,
  },
];
