import React from 'react';

const logOutIcon = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>log out icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 3.875C6.70163 3.875 6.41548 3.99353 6.2045 4.2045C5.99353 4.41548 5.875 4.70163 5.875 5V19C5.875 19.2984 5.99353 19.5845 6.2045 19.7955C6.41548 20.0065 6.70163 20.125 7 20.125H11C11.4832 20.125 11.875 20.5168 11.875 21C11.875 21.4832 11.4832 21.875 11 21.875H7C6.2375 21.875 5.50623 21.5721 4.96707 21.0329C4.4279 20.4938 4.125 19.7625 4.125 19V5C4.125 4.2375 4.4279 3.50624 4.96707 2.96707C5.50624 2.4279 6.2375 2.125 7 2.125H11C11.4832 2.125 11.875 2.51675 11.875 3C11.875 3.48325 11.4832 3.875 11 3.875H7Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3813 7.38128C16.723 7.03957 17.277 7.03957 17.6187 7.38128L21.6187 11.3813C21.9604 11.723 21.9604 12.277 21.6187 12.6187L17.6187 16.6187C17.277 16.9604 16.723 16.9604 16.3813 16.6187C16.0396 16.277 16.0396 15.723 16.3813 15.3813L19.7626 12L16.3813 8.61872C16.0396 8.27701 16.0396 7.72299 16.3813 7.38128Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.125 12C11.125 11.5168 11.5168 11.125 12 11.125H21C21.4832 11.125 21.875 11.5168 21.875 12C21.875 12.4832 21.4832 12.875 21 12.875H12C11.5168 12.875 11.125 12.4832 11.125 12Z"
            fill={fill}
        />
    </svg>
);
export default logOutIcon;
