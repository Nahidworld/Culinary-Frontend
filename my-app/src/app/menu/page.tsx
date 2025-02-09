'use client';
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import axios from 'axios'
import Link from 'next/link'

type MenuItem = {
  id?: number;
  name: string; // Name of the dish
  description?: string; // Description of the dish
  price?: number; // Price of the dish
  imageUrl?: string; // Image URL for the dish
  isAvailable?: boolean; // Availability of the dish (active/inactive)
};

function Menu() {
  const [menu, setMenu] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  // Fetch all menu items on component mount
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:3000/menu/")
        setMenu(response.data)
      } catch (error) {
        console.error("Error fetching menu:", error)
        setError("Error fetching menu. Please try again.")
      } finally {
        setLoading(false)
      }
    }
    fetchMenu()
  }, [])

  // Handle menu item deletion
  const handleDeleteMenuItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/menu/${id}`)
      setMenu(menu.filter((menuItem) => menuItem.id !== id))
    } catch (error) {
      console.error("Failed to delete menu item:", error)
      setError("Failed to delete menu item. Please try again.")
    }
  }

  return (
    <div>
      <header>
        <div className="Nav">
            <Navbar />
        </div>
        <br />
      </header>
    
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Menu</h2>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {loading ? (
          <p>Loading menu...</p>
        ) : (
          <ul className="space-y-4">
            {menu.map((menuItem) => (
              <li key={menuItem.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                <p>{menuItem.name} - {menuItem.description}</p>
                <div>
                  <Button
                    variant="outline"
                    onClick={() => handleDeleteMenuItem(menuItem.id!)}
                    className="mr-2"
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Menu

// 'use client';
// import Footer from '@/components/Footer';
// import Navbar from '@/components/NavBar';
// import { Button } from '@/components/ui/button';
// import { useState, useEffect } from 'react';
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import axios from 'axios';
// import Link from 'next/link';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { useToast } from '@/hooks/use-toast';


// type MenuItem = {
//   id?: number;
//   name: string;
//   description?: string;
//   price?: number;
//   imageUrl?: string;
//   isAvailable?: boolean;
// };

// function Menu() {
//   const [menu, setMenu] = useState<MenuItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");
//   const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
//   const [selectedMenuItemId, setSelectedMenuItemId] = useState<number | null>(null);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
//   const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
//   const { toast } = useToast();

//   // Fetch all menu items on component mount
//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/menu/");
//         setMenu(response.data);
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//         setError("Error fetching menu. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMenu();
//   }, []);

//   // Handle menu item deletion
//   const handleDeleteMenuItem = async (id: number) => {
//     try {
//       await axios.delete(`http://localhost:3000/menu/${id}`);
//       setMenu(menu.filter((menuItem) => menuItem.id !== id));
//       toast({
//         title: "Success",
//         description: "Menu item deleted successfully.",
//       });
//     } catch (error) {
//       console.error("Failed to delete menu item:", error);
//       setError("Failed to delete menu item. Please try again.");
//     } finally {
//       setIsDeleteDialogOpen(false);
//     }
//   };

//   // Handle menu item edit
//   const handleEditMenuItem = async (updatedMenuItem: MenuItem) => {
//     try {
//       const response = await axios.put(`http://localhost:3000/menu/${updatedMenuItem.id}`, updatedMenuItem);
//       setMenu(menu.map((item) => (item.id === updatedMenuItem.id ? response.data : item)));
//       toast({
//         title: "Success",
//         description: "Menu item updated successfully.",
//       });
//     } catch (error) {
//       console.error("Failed to update menu item:", error);
//       setError("Failed to update menu item. Please try again.");
//     } finally {
//       setIsEditDialogOpen(false);
//     }
//   };

//   return (
//     <div>
//       <header>
//         <div className="Nav">
//           <Navbar />
//         </div>
//         <br />
//       </header>

//       <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Menu</h2>
//         {error && (
//           <Alert variant="destructive" className="mb-4">
//             <AlertDescription>{error}</AlertDescription>
//           </Alert>
//         )}
//         {loading ? (
//           <p>Loading menu...</p>
//         ) : (
//           <ul className="space-y-4">
//             {menu.map((menuItem) => (
//               <li key={menuItem.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
//                 <div>
//                   <p className="font-semibold">{menuItem.name}</p>
//                   <p className="text-sm text-gray-600">{menuItem.description}</p>
//                   <p className="text-sm text-gray-600">${menuItem.price}</p>
//                 </div>
//                 <div>
//                   <Button
//                     variant="outline"
//                     onClick={() => {
//                       setSelectedMenuItem(menuItem);
//                       setIsEditDialogOpen(true);
//                     }}
//                     className="mr-2"
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     variant="destructive"
//                     onClick={() => {
//                       setSelectedMenuItemId(menuItem.id!);
//                       setIsDeleteDialogOpen(true);
//                     }}
//                   >
//                     Delete
//                   </Button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Delete Confirmation Dialog */}
//       <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Are you sure you want to delete this menu item?</DialogTitle>
//           </DialogHeader>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
//               Cancel
//             </Button>
//             <Button variant="destructive" onClick={() => handleDeleteMenuItem(selectedMenuItemId!)}>
//               Delete
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* Edit Dialog */}
//       <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Edit Menu Item</DialogTitle>
//           </DialogHeader>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleEditMenuItem(selectedMenuItem!);
//             }}
//           >
//             <div className="space-y-4">
//               <Input
//                 placeholder="Name"
//                 value={selectedMenuItem?.name || ""}
//                 onChange={(e) =>
//                   setSelectedMenuItem({ ...selectedMenuItem!, name: e.target.value })
//                 }
//               />
//               <Input
//                 placeholder="Description"
//                 value={selectedMenuItem?.description || ""}
//                 onChange={(e) =>
//                   setSelectedMenuItem({ ...selectedMenuItem!, description: e.target.value })
//                 }
//               />
//               <Input
//                 placeholder="Price"
//                 type="number"
//                 value={selectedMenuItem?.price || ""}
//                 onChange={(e) =>
//                   setSelectedMenuItem({ ...selectedMenuItem!, price: parseFloat(e.target.value) })
//                 }
//               />
//               <Input
//                 placeholder="Image URL"
//                 value={selectedMenuItem?.imageUrl || ""}
//                 onChange={(e) =>
//                   setSelectedMenuItem({ ...selectedMenuItem!, imageUrl: e.target.value })
//                 }
//               />
//             </div>
//             <DialogFooter className="mt-4">
//               <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button type="submit">Save</Button>
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>

//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export default Menu;

