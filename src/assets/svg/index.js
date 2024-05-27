import * as React from "react"
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg"

const HomeTabIconSvg = ({ bgColor }) => {
    return (
        <Svg
            width={33}
            height={32}
            viewBox="0 0 33 32"
            fill="none">
            <Path
                opacity={0.2}
                d="M16.875 28c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12z"
                fill={bgColor}
            />
            <Path
                d="M22.375 13l-7.338 7-3.662-3.5"
                stroke={bgColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16.875 28c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12z"
                stroke={bgColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
const LibraryTabIconSvg = ({ bgColor }) => {
    return (
        <Svg
            width={33}
            height={32}
            viewBox="0 0 33 32"
            fill="none"
        >
            <Path
                opacity={0.2}
                d="M4.625 17v7a2 2 0 002 2h2a2 2 0 002-2v-5a2 2 0 00-2-2h-4zM28.813 17h-4a2 2 0 00-2 2v5a2 2 0 002 2h2a2 2 0 002-2v-7z"
                fill={bgColor}
            />
            <Path
                d="M28.813 17h-4a2 2 0 00-2 2v5a2 2 0 002 2h2a2 2 0 002-2v-7zm0 0a12 12 0 00-12.1-12A12 12 0 004.624 17m0 0v7a2 2 0 002 2h2a2 2 0 002-2v-5a2 2 0 00-2-2h-4z"
                stroke={bgColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
const ActivitiesTabIconSvg = ({ bgColor }) => {
    return (
        <Svg
            width={33}
            height={32}
            viewBox="0 0 33 32"
            fill="none"
        >
            <Path
                opacity={0.2}
                d="M14.375 6h-8v8h8V6zM26.375 6h-8v8h8V6zM14.375 18h-8v8h8v-8zM26.375 18h-8v8h8v-8z"
                fill={bgColor}
            />
            <Path
                d="M26.375 18h-8v8h8v-8zM14.375 6h-8v8h8V6zM26.375 6h-8v8h8V6zM14.375 18h-8v8h8v-8z"
                stroke={bgColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
const DashboardTabIconSvg = ({ bgColor }) => {
    return (
        <Svg
            width={33}
            height={32}
            viewBox="0 0 33 32"
            fill="none"
        >
            <Path
                opacity={0.2}
                d="M16.125 20a8 8 0 100-16 8 8 0 000 16z"
                fill={bgColor}
            />
            <Path
                d="M16.125 20a8 8 0 100-16 8 8 0 000 16z"
                stroke={bgColor}
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M4 27a14 14 0 0124.25 0"
                stroke={bgColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

const JourneyTabIconSvg = ({ bgColor }) => {
    return (
        <Svg
            width={33}
            height={32}
            viewBox="0 0 33 32"
            fill="none"
        >
            <G clipPath="url(#clip0_9732_41199)">
                <Path
                    opacity={0.2}
                    d="M25.625 28a3 3 0 100-6 3 3 0 000 6z"
                    fill={bgColor}
                />
                <Path
                    d="M25.625 28a3 3 0 100-6 3 3 0 000 6z"
                    stroke={bgColor}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M9.625 7h12a4 4 0 110 8h-12a5 5 0 000 10h13"
                    stroke={bgColor}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_9732_41199">
                    <Path fill="#fff" transform="translate(.625)" d="M0 0H32V32H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
const SortIconSvg = (props) => {
    return (
        <Svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_9732_41985)">
                <Path
                    opacity={0.2}
                    d="M22.5 26.25l6.25 6.25L35 26.25H22.5z"
                    fill="#fff"
                />
                <Path
                    d="M7.5 20h11.25M7.5 10h21.25M7.5 30h8.75M22.5 26.25l6.25 6.25L35 26.25H22.5zM28.75 26.25V17.5"
                    stroke="#fff"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_9732_41985">
                    <Path fill="#fff" d="M0 0H40V40.0001H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
const ArrowIconSvg = (props) => {
    return (
        <Svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G
                clipPath="url(#clip0_9732_41983)"
                stroke="#fff"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M6.25 20h27.5M17.5 8.75L6.25 20 17.5 31.25" />
            </G>
            <Defs>
                <ClipPath id="clip0_9732_41983">
                    <Path fill="#fff" d="M0 0H40V40H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
export {
    HomeTabIconSvg,
    LibraryTabIconSvg,
    ActivitiesTabIconSvg,
    DashboardTabIconSvg,
    JourneyTabIconSvg,
    ArrowIconSvg,
    SortIconSvg
}