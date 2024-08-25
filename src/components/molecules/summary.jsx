import { useCreateOrderItem } from "@/features/order/use-create-order";
import { formatPriceIDR, navigate } from "@/lib/utils";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Summary = ({ totalPrice, refetch }) => {
  const { mutate: createOrderItem } = useCreateOrderItem({
    onSuccess: (response) => {
      refetch()
      if (response.data.data.token) {
        window.snap.pay(response.data.data.token, {
          onSuccess: () => {
            navigate('/dashboard/orders')
            toast.success('Payment success!')
          },
          onPending: () => {
            navigate('/dashboard/orders')
            toast('Waiting your payment..')
          },
          onError: () => {
            toast.error('Payment failed, something went wrong')
          },
          onClose: () => {
            navigate('/dashboard/orders')
            toast.error('You have not completed the payment.')
          },
        })
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message)
    }
  })

  useEffect(() => {
    const midtransUrl = 'https://app.sandbox.midtrans.com/snap/snap.js'

    let scriptTag = document.createElement('script')
    scriptTag.src = midtransUrl
    scriptTag.setAttribute('data-client-key', import.meta.env.VITE_MIDTRANS_CLIENT_KEY)

    document.body.appendChild(scriptTag)

    return () => {
      document.body.removeChild(scriptTag)
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    createOrderItem()
    
  }

  return (
    <div className="sticky w-auto bottom-0 md:right-0 md:top-32 z-10 mt-16 rounded-md bg-gray-100 md:px-4 md:py-6 p-3 md:col-span-5 md:mt-0 md:p-8">
      <h2 className="hidden md:block text-md font-medium text-gray-900">
        Order Summary
      </h2>
      <div className="md:mt-6 space-y-4">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center md:flex-col justify-end gap-3 md:border-t md:border-gray-200 md:pt-4">
            <div className="flex flex-col md:w-full md:flex-row md:justify-between text-sm md:text-base">
              <span className="font-medium text-gray-900">Order total</span>
              <span className="font-bold">{formatPriceIDR(totalPrice || 0)}</span>
            </div>
            <Button
              className="md:w-full mt-6 my-auto hover:before:-translate-x-[500px] rounded-md"
              disabled={totalPrice === 0}
              type="submit"
            >
              Checkout
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Summary;
