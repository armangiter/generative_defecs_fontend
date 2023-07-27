import { ActiveNode } from "../../models"

function Draw({ isActive }: ActiveNode) {
    return (
        <div className={`p-1 transition rounded ${!!isActive && 'bg-svg'}`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Iconsax/Linear/edit">
                    <path id="Vector" d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75" stroke={isActive ? '#0F172A' : '#64748B'} strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Vector_2" d="M12.0304 2.26495L6.1204 8.17495C5.8954 8.39995 5.6704 8.84245 5.6254 9.16495L5.3029 11.4224C5.1829 12.2399 5.7604 12.8099 6.5779 12.6974L8.8354 12.3749C9.1504 12.3299 9.5929 12.1049 9.8254 11.8799L15.7354 5.96995C16.7554 4.94995 17.2354 3.76495 15.7354 2.26495C14.2354 0.764945 13.0504 1.24495 12.0304 2.26495Z" stroke={isActive ? '#0F172A' : '#64748B'} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Vector_3" d="M11.1826 3.11255C11.4313 3.99565 11.9026 4.8001 12.5513 5.44883C13.2001 6.09757 14.0045 6.56886 14.8876 6.81755" stroke={isActive ? '#0F172A' : '#64748B'} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>
        </div>
    )
}

export default Draw