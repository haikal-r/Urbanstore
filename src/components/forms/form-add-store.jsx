import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { storeSchema } from '@/lib/validations/store'
import { axiosPrivate } from '@/lib/axios'

export function AddStoreForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(storeSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const onSubmit = async (values) => {
    try {
      setIsLoading(true)
      await axiosPrivate.post('/api/v1/stores', values)
      toast.success('Store is created.')
      window.location.assign('/dashboard/stores')
    } catch (error) {
      toast.error("Something wrong. Please try again...")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form
        className='grid w-full max-w-xl gap-5 ps-6 pe-9 py-5'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='Type store name here.'
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
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Type store description here.'
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button isLoading={isLoading} type="submit">
          Add Store
          <span className='sr-only'>Add Store</span>
        </Button>
      </form>
    </Form>
  )
}
