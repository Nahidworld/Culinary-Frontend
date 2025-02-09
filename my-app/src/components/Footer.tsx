import Link from "next/link"
import { Facebook, Instagram, PinIcon as Pinterest, Twitter, Youtube } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Define the gallery images array
// const galleryImages = [
//   "/gallery/image1.jpg",
//   "/gallery/image2.jpg",
//   "/gallery/image3.jpg",
//   "/gallery/image4.jpg",
//   "/gallery/image5.jpg",
//   "/gallery/image6.jpg",
// ]

export default function Footer() {
  return (
    <footer className="bg-[#f2f3f0]">
      {/* Previous sections remain the same */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              Culinary <span className="text-[#1B4D0B]">Odyssey</span>
            </h2>
            <p className="text-sm">Subscribe our newsletter and get discount 25%off</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter Your Email" className="max-w-[200px]" />
              <Button variant="default" className="bg-[#1B4D0B] hover:bg-[#143709]">
                →
              </Button>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-[#1B4D0B]">
                <Pinterest className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#1B4D0B]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#1B4D0B]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#1B4D0B]">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#1B4D0B]">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact us</h3>
            <div className="space-y-2 text-sm">
              <p>Kuril, Dhaka</p>
              <p>01836-277166</p>
              <p>mfbinahid@gmail.com</p>
              <p>Sun - Sat</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#1B4D0B]">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1B4D0B]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#1B4D0B]">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1B4D0B]">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1B4D0B]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Instagram Gallery */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Instagram Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/chef/food1.jpg"
                  alt="Gallery image 1"
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/chef/food2.jpg"
                  alt="Gallery image 2"
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/chef/food3.jpg"
                  alt="Gallery image 3"
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/chef/salmon1.jpg"
                  alt="Gallery image 4"
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/chef/food4.jpg"
                  alt="Gallery image 5"
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/chef/veg1.jpg"
                  alt="Gallery image 6"
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1B4D0B] py-4 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p>Copyright @ 2024 All Rights Reserved</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline">
                Term of Use
              </Link>
              <Link href="#" className="hover:underline">
                Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}




// import Link from "next/link"
// import { Facebook, Instagram, PinIcon as Pinterest, Twitter, Youtube } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// export default function Footer() {
//   return (
//     <footer className="bg-[#f2f3f0]">
//         <br />
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {/* Newsletter Section */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold">
//               Culinary <span className="text-[#1B4D0B]">Odyssey</span>
//             </h2>
//             <p className="text-sm">Subscribe our newsletter and get discount 25%off</p>
//             <div className="flex gap-2">
//               <Input type="email" placeholder="Enter Your Email" className="max-w-[200px]" />
//               <Button variant="default" className="bg-[#1B4D0B] hover:bg-[#143709]">
//                 →
//               </Button>
//             </div>
//             <div className="flex gap-4">
//               <Link href="#" className="text-gray-600 hover:text-[#1B4D0B]">
//                 <Pinterest className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="text-gray-600 hover:text-[#1B4D0B]">
//                 <Twitter className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="text-gray-600 hover:text-[#1B4D0B]">
//                 <Facebook className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="text-gray-600 hover:text-[#1B4D0B]">
//                 <Instagram className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="text-gray-600 hover:text-[#1B4D0B]">
//                 <Youtube className="h-5 w-5" />
//               </Link>
//             </div>
//           </div>

//           {/* Contact Section */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Contact us</h3>
//             <div className="space-y-2 text-sm">
//               <p>Kuril, Dhaka</p>
//               <p>01836-277166</p>
//               <p>mfbinahid@gmail.com</p>
//               <p>Sun - Sat</p>
//             </div>
//           </div>

//           {/* Links Section */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="#" className="hover:text-[#1B4D0B]">
//                   About us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-[#1B4D0B]">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-[#1B4D0B]">
//                   Our Menu
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-[#1B4D0B]">
//                   Team
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-[#1B4D0B]">
//                   FAQ
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Instagram Gallery */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Instagram Gallery</h3>
//             <div className="grid grid-cols-3 gap-2">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="aspect-square overflow-hidden rounded-lg">
//                   <img
//                     src={`/placeholder.svg?height=100&width=100`}
//                     alt={`Gallery image ${i + 1}`}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-[#1B4D0B] py-4 text-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
//             <p>Copyright @ 2024 All Rights Reserved</p>
//             <div className="flex gap-6">
//               <Link href="#" className="hover:underline">
//                 Privacy Policy
//               </Link>
//               <Link href="#" className="hover:underline">
//                 Term of Use
//               </Link>
//               <Link href="#" className="hover:underline">
//                 Partner
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

