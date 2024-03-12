import Image from "next/image";
import data from '@/app/outfit/data.json'

export default function ProductCard() {
    return (
        <>
            <div>
                {data.clothes.map((item) => {
                    return (
                        <>
                            <Image 
                                width={50} 
                                height={50}
                                src={item.image}
                            />
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </>
                    )
                })}
            </div>
        </>
    )
}