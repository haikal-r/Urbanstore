import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function navigate(location){
  window.location.href = location
}

export function formatPriceUSD(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0, 
  }).format(price)

}

export function formatPriceIDR(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0, 
  }).format(price);

}

export function getInitials(name) {
  const nameArray = name.split(' ');
  if (nameArray.length > 1) {
    return nameArray[0][0] + nameArray[1][0];
  } else {
    return nameArray[0][0];
  }
};

