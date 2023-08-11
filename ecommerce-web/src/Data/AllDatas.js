import ao1 from '../Assets/ao1.webp';
import ao2 from '../Assets/ao2.webp';
import ao3 from '../Assets/ao3.webp';
import ao4 from '../Assets/ao4.webp';
import ao5 from '../Assets/ao5.webp';
import ao6 from '../Assets/ao6.webp';
import quan1 from '../Assets/quan1.webp';
import quan2 from '../Assets/quan2.webp';
import mu1 from '../Assets/mu1.webp';
import mu2 from '../Assets/mu2.webp';
const Items = [
      {
        id: 1,
        des:"MAVERIK MESH FOOTBALL JERSEY ( BLACK)",
        price: "49$",
        detail: "Form Oversize",
        front: ao1,
        back: ao2 
      },
      {
        id: 2,
        des:"Kaki Jacket",
        price: "90$",
        detail: "Form Oversize",
        front: ao3,
        back: ao4
      },
      {
        id: 3,
        des:"Faded Girl T-shirt",
        price: "49$",
        detail: "Form Oversize",
        front: ao5,
        back: ao6
      },
      {
        id: 4,
        des:"Distressed Vintage Hat",
        price: "40$",
        detail: "100% cotton, one size",
        front: mu1,
        back: mu2
      }, 
      {
        id: 5,
        des:"Kaki Work Pants",
        price: "80$",
        detail: "100% kaki",
        front: quan1,
        back: quan2
      }
    ]
function getItemData(id){
  let itemData = Items.find(Item=> Item.id ===id);
  if(itemData == undefined){
    console.log("error")
    return undefined
  }
  return itemData
}
export {Items, getItemData};