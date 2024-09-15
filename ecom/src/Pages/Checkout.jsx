import React from 'react'

const Checkout = () => {
  return (
    <>
    <div class="font-sans bg-white p-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">Checkout</h2>
        </div>

        <div class="mt-12">
          <div class="grid md:grid-cols-3 gap-4">
            <div>
              <h3 class="text-3xl font-bold text-gray-300">01</h3>
              <h3 class="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
            </div>

            <div class="md:col-span-2">
              <form>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="First name"
                      class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="Last name"
                      class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email address"
                      class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <input type="number" placeholder="Phone number"
                      class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 class="text-3xl font-bold text-gray-300">02</h3>
              <h3 class="text-xl font-bold text-gray-800 mt-1">Shopping Address</h3>
            </div>

            <div class="md:col-span-2">
              <form>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="Street address"
                      class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="City"
                      class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="State"
                      class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <input type="number" placeholder="Zip Code"
                      class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 class="text-3xl font-bold text-gray-300">03</h3>
              <h3 class="text-xl font-bold text-gray-800 mt-1">Payment method</h3>
            </div>

            <div class="md:col-span-2">
       
              <select name="" id="" className='mt-5'>
                <option value="">Esewa</option>
                <option value="">Cash on delivery</option>
              </select>
         
            </div>
          </div>

          <div class="flex flex-wrap justify-end gap-4 mt-12">

            <button type="button"
              class="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700">Proceed now</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkout