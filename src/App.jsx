import { useState } from "react"

const productDetails = {
  merk: "CONVERSE",
  nama: "Walk Star Trainer",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  originalPrice: "999.000",
  discountPrice: "799.000",
  image_1: "/src/assets/image-product-1-thumbnail.png",
  image_2: "/src/assets/image-product-2-thumbnail.png",
  image_3: "/src/assets/image-product-3-thumbnail.png",
  image_4: "/src/assets/image-product-4-thumbnail.png",
  largeImage_1: "/src/assets/image-product-1.png",
  largeImage_2: "/src/assets/image-product-2.png",
  largeImage_3: "/src/assets/image-product-3.png",
  largeImage_4: "/src/assets/image-product-4.png"
}

function Nav({countNumber}) {
  return (
    <nav className="fixed w-full min-h-[80px] flex items-center p-[20px] nav justify-between">
      <img src="/src/assets/sneakers.svg" alt="" />
      <div className="w-[40px] h-[40px] flex justify-center items-center relative">
        <img src="/src/assets/keranjang.svg" alt="" className="w-[20px] h-[20px]"/>
        <p className={`w-[20px] h-[20px] rounded-full absolute top-0 right-0 flex items-center justify-center counter ${countNumber == 0 ? "bg-transparent" : "bg-[#F54900]"}`}>{countNumber}</p>
      </div>
    </nav>
  )
}

function MainSection({nambah, kurang, number, addToCart}) {
  const [image, setImage] = useState(productDetails.largeImage_1)
  return (
    <section className="flex justify-center items-center max-w-screen w-full min-h-screen">
      <div className="flex flex-row w-full max-w-[941px] justify-between flex-wrap">
        <div className="max-w-[400px] gap-[20px] flex flex-col w-full">
          <div className="max-w-[400px] w-full min-h-[400px] rounded-2xl" style={{backgroundImage: `url(${image})`, backgroundSize: `cover`}}></div>
          <div className="flex w-full justify-between">
            <div className="max-w-[80px] w-full min-h-[80px] rounded-[8px] cursor-pointer" style={{backgroundImage: `url(${productDetails.image_1})`}} onClick={() => {setImage(productDetails.largeImage_1)}}></div>
            <div className="max-w-[80px] w-full min-h-[80px] rounded-[8px] cursor-pointer" style={{backgroundImage: `url(${productDetails.image_2})`}} onClick={() => {setImage(productDetails.largeImage_2)}}></div>
            <div className="max-w-[80px] w-full min-h-[80px] rounded-[8px] cursor-pointer" style={{backgroundImage: `url(${productDetails.image_3})`}} onClick={() => {setImage(productDetails.largeImage_3)}}></div>
            <div className="max-w-[80px] w-full min-h-[80px] rounded-[8px] cursor-pointer" style={{backgroundImage: `url(${productDetails.image_4})`}} onClick={() => {setImage(productDetails.largeImage_4)}}></div>
          </div>
        </div>
        <div className="max-w-[420px] w-full flex flex-col justify-center gap-[20px]">
          <p className="merk">{productDetails.merk}</p>
          <h1 className="nama">{productDetails.nama}</h1>
          <p className="description">{productDetails.description}</p>
          <div className="flex gap-[10px]">
            <p className="discountPrice">Rp. {productDetails.discountPrice}</p>
            <p className="originalPrice">Rp. {productDetails.originalPrice}</p>
          </div>
          <div className="flex gap-[20px]">
            <div className="flex gap-[10px]">
              <img src="/src/assets/kurang.svg" alt="" className="w-[48px] h-[48px] cursor-pointer" onClick={kurang}/>
              <p className="w-[48px] h-[48px] flex justify-center items-center bg-[#F7F8FD] rounded-[8px] total">{number}</p>
              <img src="/src/assets/tambah.svg" alt="" className="w-[48px] h-[48px] cursor-pointer" onClick={nambah}/>
            </div>
            <button className="addToCart min-h-[48px] max-w-[130px] w-full bg-[#F54900] rounded-[8px] cursor-pointer" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [countNumber, setCountNumber] = useState(0)
  const [number, setNumber] = useState(1)
  function nambah() {
    setNumber(number + 1)
  }
  function kurang() {
    if(number <= 1) {
      setNumber(1)
    } else {
      setNumber(number - 1)
    }
  }
  function addToCart() {
    setCountNumber(countNumber + number)
    setNumber(1)
  }
  return (
    <main className="max-w-screen w-full min-h-screen">
      <Nav countNumber={countNumber}/>
      <MainSection number={number} kurang={kurang} nambah={nambah} addToCart={addToCart}/>
    </main>
  )
}