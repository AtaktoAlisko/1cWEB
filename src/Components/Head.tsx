import Image from "next/image";

export default function Head() {
  return (
    <div className="bg-yellow-400 p-0.5 md:px-[50px] text-center">
      <ul className="flex flex-col md:flex-row justify-between items-center text-amber-800 gap-1 lg:gap-2">
        <li className="flex items-center hover:text-red-600">
          +7-771-200-56-26
        </li>
        <li className="flex items-center hover:text-red-600">
          г. Астана, ул Кунаева 8/1
        </li>
        <li className="flex items-center hover:text-red-600">
          office@softway.kz
        </li>
      </ul>
    </div>
  );
}