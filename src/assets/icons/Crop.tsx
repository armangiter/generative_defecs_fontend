import { ActiveNode } from "../../models"

function Crop({ isActive }: ActiveNode) {
    return (
        <div className={`p-1 pr-0 transition rounded ${!!isActive && 'bg-svg'}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25033 15.8333H15.8337V8.24996C15.8337 4.99996 15.0003 4.16663 11.7503 4.16663H4.16699V11.75C4.16699 15 5.00033 15.8333 8.25033 15.8333Z" stroke={isActive ? '#0F172A' : '#64748B'} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16699 1.66663V4.16663H1.66699M15.8337 18.3333V15.8333H18.3337" stroke={isActive ? '#0F172A' : '#64748B'} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

export default Crop