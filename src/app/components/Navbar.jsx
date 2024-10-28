'use client'
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../provider/SearchTermProvider";

const Navbar = () => {
  const {searchTerm,setSearchTerm} =useContext(SearchContext);;
  
  return (
    <div className="navbar bg-base-100 w-full px-8 shadow-xl border-b-2">
    <div className="flex-1">
    <div className="form-control relative ">
      <span className="absolute text-xl text-gray-500 top-3 left-4"><FaSearch /></span>
       <Link href='/inventory'>
       <input  value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search by product name..." className="input input-bordered w-32 md:w-auto pl-10" />
       </Link>
      </div>
  </div>
    <div className="flex-none gap-2 ">
     
      <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
      <div className="dropdown dropdown-end">
        
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-16 rounded-full">
         
            <Image
            width={16}
            height={16}
              alt="Tailwind CSS Navbar component"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUVGBUVFhUVFxcVFxgXFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0dHSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA6EAABBAAEAwYDCAIBBAMAAAABAAIDEQQFITESQVEGImFxgZETofAHFDJSscHR4RVCI2KSovEWY4L/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAJxEAAgICAgICAgIDAQAAAAAAAAECEQMhBBIiMRNBBVEUMkJScTP/2gAMAwEAAhEDEQA/ANCyIFCZjgWhpNKxwo0Vf2gxFMKQdRM8i7U0JCAqK1Z57LxSFVTlaMeR+RKyVXmQtBdazRK0fZ5ppVPSCwbmbPCYgAq4hzrh0sLGsmN0uMBJ4QDfMpSjZveStHoeHzMP5p2LxXA2ys72Xwry7W6Wpx2A4m0kzWzRB6s877TZwHWFjsEf+S/FbbPuzr6JAWM+7OjfTk6CVUjNNSnkXZaPQMoxgDQrX70CFh8Hj+FFjNKO6zfxujtHTkvjjZpMZi7bX+wVN8D4neOpG4/dAHMjxXasGYpv4mminwj12YsuTvor8Y1xNEUwbn8x6DwWdxuKPEQDstnju9Hp9WsNmWBfGbINHmtKlZzMuKUdogxGKJ0tCkpFcRGdtv2dBUsUihXQoROg9rrU+HZZQuEFq4w0CFmvBFzkicC2qpx76NBXjIiqTMITxJcVs6vOlL4kv2Rx49wFKSOXi3UJwpCdForbT9HOx9l/YMSTONJAaNHuTXUs52rnphV9I6lku1T+4Uwznl+Nkt5Qzin4j8RUDijSMUns63dbbs41ojsrHYeGytBg5iAAgyKx/Gl1lbNrl+WtcCequ8JlDOmqoMlzDZaaLHhI2jqRjF7RaYaBkYXX45vVVvxy7dV+M80pq2NikvZd4ksc1eW9toADbVpZ85LQQ0cVficTwgeHUnyVGMW6R5cwNJH5qpp8eLZXG4uwMjTi0jEjFO21RmAa+RwGosq3x0kpFccdXR4dTdWSXEb7e6Fa0DmQeY+tStKlZhlKa03ZrMP2OLo+LW6tU8mUysutaR2VdqZ4RwcVs5NfqPIP3HqVbw5wH94ta29xen7j9EWiLZX9nYC6VjXbV3lsc67LMkiOnJZkzwNt3FsQaF6+o6IrL+15BDC4tZyP4gLFAeOtdVE0i5JtHludZcYJXMPLbyQAC1/bhwkcHto67jY+KpMHgbROSRmhxp5J9YgEcBKOhywlWsOCARjXgCgh7X6OjDgQxf8Ap7K/C4INV1h8MKVcQbVrgpL3VT9G3gwipPQRFhhqs9nUXC+1pi/RU+axcYKmOIH5SapRj9FUwghDxYNz3UAu5dC8v4aO69L7PdnhQJGqTOXQx4I/KrZjf/jruhSXrH+JHRdSPlZp+PGDYkrGdppNCtpj2aLCdpDoVvOY3o8+xLNSo2RI6VtlcDFZjktncNEjAmYddmfSFsdCOrLbLZyCKWrwFnVYfK5xa1+EzWOMDiIHms2Ru6Ojg9FlicwLRXP63VJjs1Oo2J9rQ2YZ6wnQtF62eh206qhxWI43F1EtaRdbXz8zSKEQsmZLSDwx3LicSdaAIOvJp09wo5myhzmHRriO4C0HQWePgoAa8k9jya4QANNB41qbUMjmstt24iieVOBv9kaiZpSaWiRk3DewDeYA3HzPPnv0Qsdu73D3brXU+ZCFm43Gq02Pn4eqtIIqaNzW48T9fNF6FryJhgJOA/8AIODpzF9L1HJLE4gRN4A3kKuxxeJ6lV8+ZEjhGmo6nbUUFMMxDmU+uJwqzwkDTTxH/tC7GKvoCy0ySPIaBrejnhoHqSPkjTwNIBa4PbqQDYNG7FoKGFoJ4bO4JFX6fquwhrXfi4wNjqPMOB291f2VtIOnkY7UatPIn2IPLmoogBsbHI7Lk07OEjxttHZQyBwq+dFuu4+gpVmjBneKVoNMpKiIKkZSOZAHBW/E6WOL5Wn7KoP6o/BTUmYvBVqn4SAIZytWP4fFlDK4SD3TCkK9vGaCHzCThF3sn5LjAXC0XeoaMefj3ncWaLJsnFg0t3lzQ1qzuAnAAVkMRpYKxu5MCa6qkXnxQks/99PVJX1YkMxg0XnPauUC1f552ja0EWvPcxzAzOvktxznoGaxcc1EsC49ilg9LIIN03FtRkEVC0LiXpTfkNaUYAcMhBRM2Icb0skBo61rdJsFXdX4ImFzRbj5USBXPf8ApW/YML61YHI0/iOzQPUiufmposeQOGtz80xuJa48Ow5Dx1qyfROdhzwlwG3Px5owb/TD8EX/AIqFba8x/H8p0cduGxsoPAOIIC1eQYAOlJdqAP129f5QvQyHmGR5Q0RN67+u+/8ASAxHZ2YHiG7jWnvoOa3eHgBonYafJafK4GcIFDQ67b/ykJuTo2S6wjdHmGU/ZtJJ35XcF3TRv66rTO+zDD8FNvi5uvW/Zb2KMWjA0Jqg37Mss1PSPLY/sya2yyZzXEad1pHsqXMfs7kiJLHF4P4gQNfFezyMFqHE1WyrpRcc1/R87ZnkroDq00eZ6oDjJOvIfVBe39osrZLGWkb/AFovGMwwZjlfG7/U7+G4PsQUUWXNL2gZ0hbXirXLcRaqcYOICuXoicrsEK8m4nR/E5JRz0/Rc47ZUbMXRpW+Ml7qysstOQQjo3/kOV1mmtBmNxBchY5i3ZStIKGxDU2Nejkcpz7d7L7K+0ZboStAM/GlHdedRtRbXqviRkfOlLUjef5dvX5pLC/FPVJToi/5SGulfIbcfRTxwqFuiJEmiIyxf7JWrjnBBS4mlE2e1QxTRaOl0VTi3WVOZENKEMUDllaFh3edqLHSW7foutdXJDkWUaWxTl40SYU0QR1CsGymqQuHHStESDenr9fNWCmy2ymEENLa318PrX2W8yuNrWihvqvNsrnLXVyO/pf8lb/KpHOaDulzNvGdmmwxvTorrKZ9dtNlmsK4jwPP2WkyqHSyd9ll3Ztml12aGOipwEDAaR4eOq1RZzpqmRylAYlyLmeFDoVUthw0VeKbYXlP2h4bhma8CuNtH/8AJ/ghewyRgrzT7UouERmubgPYII/2HP8AqzAfEFD5orDPVa2Mk2ihoE2atUbuBkcH2YTjp9EDFgeNQ4l5KuOzTwTTtwgcXGOjVi5GHk8jrkWiuky5zeSGljIW9xsbeHSllsxjF6KoMZzOLGMHKPooyFI1clFFcYVoujyqh2lSJKXErXFXZD/48h84Q0k1BEYhyrMQ5QyMZJJadG9Qp7VbQKZYROTixQYdGsKAbdoFfEtD2aywFhnLQ4h3AxrgCOIAOLiDvuAB5oHDYW9RtzWn7McJZJEN2u+IPJwAd8wPdSXobxoJ5FZDiZmz93FRNAqmzRtDHtPLi5FqzeJjMbi2zpY1AIcOutr0PEiJkdSi9LqrNnYUszLgxM0U0g3w0dTyqz5UlRnRszYO/wD0z2AaXSNaNbIC9cyzBhjWs8NVkOzmUCJ9n8XJbvDTVvrXp7H+UvLk/ROPhcVsimYR+EeOu2ho+W4Sw2IfqZH8AHsAFaYWEyNdwjUm+Q2FcnHy9FT5h2fkmID3FobqWit+o0pSKT2HKdaCpO0OFrhOLp3uhG5jJ+OOUSt8D0VaewsAfxmR9XZa6yDre+3qjMLkrGykteGtPIXf9hOcUhUJN3Zd5bnRk05qbH50IvxGvVMyXLmsk3sHfz6hV/a/KJpJLiF0DWlgHez56Dbqhr6I2gjDdqw402NzulNJ/RU3b97J4WH8L2O4qcNwQQR4bj2VBBgc0jkJJmZwhx3trq24abQvau8l2lzl8mFY6Rv/ACcZaLaWkgtJ7w6iqPircWmVCakrSM0KTHxFR4NpV3DhrCuU0jtcXiSyx7PSKduGTou46wrOWEBV2J3UT7AZ8ccL8V6LF+Otu6q8VPyQn3irUHx0cIUY+X+QeRKKG4jRCslsqTEOtDR7ons5cX1mg3hST7CSTZ1uq/ZDiJFXyFWL2ByClhIKejzzIgEThobXYYbR2CYgnKhuPHZxkCa7QqzMSBxA1QQdjpxUUT4bElooc0Tl+OMUrXXQ1a4/9L9D7aH0VY1SPGiYwINrZ7Rl2AilHxHNBttUeTgKLfO1DhMmY2RwA0DCQDz1Fn9Fn+xfaGKVjYZXmOcU1rgaEgH4b5F1adVts1Y5oDwBdcJcN6IorLNHTU72n7MTO+prHM/NaXBtD6I0/f0WZxMdv+uquMpxfC+ilNWNRpMsZwEtAq9dOpPTZXn3MPb3gL9/mqrDYoHVW2HxgTMRlyp/RUz5Sy7IvztQTYRsYsVf17K2xWJaNyqvF4vi0YwE+JTpTpEhBsiil4SPNXmMgsA3uKBuvEfus8I3OPDwFp879leN4vg07dpHslwe7Dyx0qK34U7D+IuGujgD87GnuvPftKw1PhGveEjnDlxdwaeFL16B4LV539qGF78L+VSD1PAf2KNv7D4kVLMoyMBhYaVzhpAAqx7wAoBi0LVnocedRXWWkH4+VUuIeiZJ7CrpzadCNHH5/LUtRBJzqmMCkcExMbOLCPl2kQzOTOBP4CSizBohbodiwSyyb/QHxlJSfCSQ9kH8UztdfdKTXdWbcJ6hNfgq22R2YXjZXQAqwwUeqc2EBPY4JUlY6HitkuKkoKqldqiMTNaD3RQVCss7O8akL7CFmNKKKZGLjKnQST3gQaogjzW5g7W4z4QiOtV3zvVgHwPRYIO1C9DY0CDxPNKyUbuM/ZOZrN+StIW6grPfFoBW2WY2yLSXE1KZcjHkOAtGzZt8NnE40P1P7qqxkOrHVz19VZYjJhIA7egeEEmuLldfWqiiVKQPDjHzd5xLWchzPmR+ihzTHyQESRNDgAQ5hO9a2D1VQztSYZTFLhntczQ0eLrRHUEDdXcOd4WZoa9pZYsBw4SQdiLrRE0vsuDl7RHlnb6GRwEgMbxydsfIhaaftFA6PuvB011XmfaTI2PJfFIBXp6g9ULleXuYQ6SQHmNRv1rqpVeiSV+0ejZfnQDiy9RrR6FUv2g48OZG29eIu/8AGv3VcMDMJRIQQOHnvvzWbznMTI88wNB6IVFvRo48oRyKb+isxM6FMqjndqoeJbIRSRzebzJzm69BXxUx77UDnqN8mijdCcdz2x0j1GHKB0qcwqqKnk3SDcONVZPj7qrcKrIv7qVNbOz+OnGONtgNJJ3D9UkhphfJEnyzGcirGd4AsLIsmIKscNiS7ROaOHjyKthE8lqD4iIfGhJGKUDJ2DzzWVJDIFz4HXdRbK2hV72OxDb1QRCneXKEtPNWgZO3onwmrmjqQPmvTBDcVc6sLD9msIDbzuHNYP1P7L0eJndHks+WXlR0+JDwt/Zl5X6KfLcVThqiMzwnMbFUrzwlWlotumeislD4x4ELQYB9sHhqsJ2fx4cOH+ltcomFIHoP2iXN8tbMLrvAEBwribYIsXvvshJTL3gYI5oixsbgO68NAPGdRTib0bptureSwgcQ8XdEO6t/dGmn7Lj19SKTMsvwW5hmY413WteByP8AqeEe6B7M9nmDEOlfZDTcbXEnh2AOvPc+q0hxRqi7TmaSwjwGueNuvXkFbaXoN0o+22Un2g5uIoi1pHE7Qev18l5W16O7U5x94ncQe40kN8ddSqxpRwjSMbyW6R2YIcqd7kHLMibB+OPuQ4apTN0TYnp8z9EFmhRj00AO3UsRUbt1JE3VNs5rjcqRY4VqNcNFzBQbIiWNKuzuQwvHBICpdUnAkoK6SM81lqwwjNk+OJvS/NEh4TTjRQRelJjmrjX+C5K8qjQqoGmYgn6box1/X9qJ0YO5UFTQO3dQy7qVzKKY9mqgpmg7KHuEf/a0/wDj/S9Aw57o+vReb9mnU8tHOj7H+yvSsG22hZ8i8rOpxp3jSBcbBdrM5hBRWwnaqXMoLHiPr2VxYySKLBYwxO3WuynPQC3Xf62WJxLFFDiC3RRqwU6PoHLp2SN3Us2Aadf/AH7ryLs/2xMdNedtit1ge2Ub2/iCpa9kpv0WeJy8URdA/W6y32gZkMPhvhsNOk7o61/sfQX8lbZl2pia2y4V9ey8n7UZ0cVNx68LdGDw5n1/YI1G2Ky5OsSofBzb7JmqmicpXJtGWLK2eRCEKwkhB/pRfd1RHcmRRrkjkWINENPHSo0uElEGtFYRuqjiiRkLUT9GTHLzRe4HZSTN0QWFlpEYjEaJNUelxzU42RUkhfvKSsV80AdidfRRB6TpE482O+8f2FwSISZ1EO91MXWqCjKgi00xApjHIhuyoZdgsjE18ankC4dkQlo7lMvDM0na6ProvUcqNBeRPNFeidkc1ErAL77dHDr0Pr/KTlX2a+JPfU1GJhsWPrxVZiMNzAV9htQhsTARdpNnQSMhmWXbub6gfqqHEYMmyPrzW6xGFdy/o+fRUWNwdHpf16o0wJIyErSNCFLgcK97gGkgHmr92BZudfNE5bEBbgNNh+5RiHDZlc6j4JTGHFwaBq43rVn9UNG5LMZeKV7urj7bD5KAurVNRz5u5MJL6XDLaEdJakYVCJ0EApwQ5cpGP0UC7EzCuSxgpBOapQ6GaSXX6IWxIhmHRkUIVhFhhVlBKVHR4f495NspnAhBzzk6K6xrAqPEN1VRfYZy8T48GkyLjXUykkyjjfIyV+ijBUhN6KF2hUFHXiwlA/u+WiTkyHchWUShyJhdyQvCiohoFAkwhzNFEApbUR3VlgOIC5l+YSQyCRhoj2I5g+CnxbOY9UAWqvYG0z13s32phnAF8L+bDv6fmHiFoJ5QQCvAQSDYNEbEaLR5V2zxEQ4X1K3/AKtHf9w/cFIlh/1N+LmL/M9PklCqc0kBbrr0+uSpMP2zif8Ai4mE8iLHuL+anfj4H6/Fb71+qDq17NXywa0ysbxOdV90fWiscxmEUJPOqHmdAhHY6Jp0cPrkFT5xmRlIA0aNv5KalZmyZEkyncFHKUQQoZgmnPYwKUFQhSKih79kmuTHusKWCPZQKwmPVOcE5gXSFYSCcJiABruFzEZr0QTggnhA4JvZ0sf5LJix9Y+wyTHFyja4FBPdSYJUSVejFl5M8n9nZZ/DC6q/7wkrEdh0rCDYTnHiFjdSE2FCBRv3VFCtKEd5OMfz1XYt1ZQQ5idEkHJjHaqFhTXKN7kwvUT5LUsKyQm0FPFWyLjK65tqFMrgU8NtOmhToQoCOjgU3w10J1+KhDjQnOTHDqUwycgoFY8BRytTw5cItUQG4U8hOa1P4FZQxjEYxqgapWvUISldJ0UD5goHTkn9lC7CgULi20b6qdjlydttULZXPCjpFcKaWKIAgpJT8C4rIHYbAybcJ9k92CdtSc7NJDzXW4p55qg9EX3dwGoQ7hTkbJK6t0HLuoUzoemPfRUb3KF7lAQpz7TbTQnBUWPheiGoPmiYnqyzr22hyKRtKCdqoh2I2pCw9EPh5y02Ed/lHflarIq+wN7HHkU0Qnojv8u78rfZc/y7ujfZQvxBGxO6KQQnopTmj+jfZdGaP8PZQniQCI9F34ZRLca/w9lw4x3h7KEpAwjd0SdG7oVKcc8c/kuf5KT83yChWgUwu6H2S+7u/KfYor/Iyfm+QSOZSfm+QUJoiETvyn2Uwicf9T7FM/yMn5j7Bc+/yfnKlEtDXYV3Q+yb92d0KnZiXn/Yp3xndVCaBvuj+iSI+O78xXFCUCInDLqSgKJHIOTkkkoEweVQuSSUBCBsnMSSURDqfFukkrLCwopdl1JCWBlOSSVoFjUkklZDq61JJQgU1Jy6kqLQO9MCSShGdC4UklCjgSKSShAiFSOSSVBDUkklCH//2Q==" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Navbar;