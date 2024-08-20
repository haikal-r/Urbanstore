// import component
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// import react-redux

// import react-router-dom
import { useParams } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { storeSchema } from "@/lib/validations/store";
import { Textarea } from "../ui/textarea";
import { axiosPrivate } from "@/lib/axios";
import { AlertModal } from "../modals/alert-modal";

const FormUpdateStore = ({ data }) => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(storeSchema),
    defaultValues: {
      name: data.name,
      description: data.description,
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      await axiosPrivate.patch(`/api/v1/stores/${slug}`, values);
      toast.success("Store is updated.");
    } catch (error) {
      toast.error("Something wrong. Please try again...");
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteSubmit = async () => {
    try {
      setIsLoading(true);
      await axiosPrivate.delete(`/api/v1/stores/${slug}`);
      toast.success("Store is deleted.");

      setTimeout(() => {
        window.location.assign("/dashboard/stores");
      }, 1000); 

    } catch (error) {
      toast.error("Something wrong. Please try again...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDeleteSubmit}
        loading={isLoading}
      />
      <Form {...form}>
        <form
          className="grid w-full max-w-xl gap-5 ps-1"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type store name here."
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type store description here."
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button isLoading={isLoading}>
            Update Store
            <span className="sr-only">Add Store</span>
          </Button>
          <Button
            variant="destructive"
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
            isLoading={isLoading}
          >
            Delete Store
            <span className="sr-only">Delete Store</span>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormUpdateStore;
