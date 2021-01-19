import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function SvgGrass(props) {
    return (
        <Svg
            width={104}
            height={104}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M58.167 26.28c-9.987 0-18.082 8.122-18.082 18.142v8.171c0 1.53-1.236 2.77-2.76 2.77H19.845A1.85 1.85 0 0018 57.215C18 72.56 30.398 85 45.692 85h12.834c9.788 0 17.723-7.961 17.723-17.782l-.001-.161V44.422c0-10.02-8.095-18.142-18.081-18.142z"
                fill="#B5FF56"
            />
            <Path
                d="M33.552 71.793l-3.31-7.724M38.517 71.793l-3.31-7.724M43.483 71.793l-3.31-7.724"
                stroke="#333"
                strokeWidth={1.655}
                strokeLinecap="round"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M74.614 67.059v-.02l.001-.093V44.422c0-9.126-7.37-16.511-16.448-16.511s-16.45 7.385-16.45 16.511v8.171a4.397 4.397 0 01-4.393 4.401H19.846a.217.217 0 00-.213.221c0 14.451 11.674 26.154 26.06 26.154h12.833c8.879 0 16.09-7.224 16.09-16.151l-.001-.14v-.02zm-34.53-22.637c0-10.02 8.096-18.142 18.083-18.142 9.986 0 18.082 8.122 18.082 18.142v22.436l-.001.199v.16C76.249 77.04 68.315 85 58.527 85H45.692C30.398 85 18 72.56 18 57.215a1.85 1.85 0 011.846-1.852h17.478c1.525 0 2.76-1.24 2.76-2.77v-8.17z"
                fill="#333"
            />
            <Circle cx={51.515} cy={42.25} r={2.515} fill="#333" />
            <Circle cx={65.485} cy={42.25} r={2.515} fill="#333" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M81.042 48.571a2.896 2.896 0 01-2.079 3.518l-9.686.943 9.492.64a2.893 2.893 0 012.315 3.363 2.875 2.875 0 01-3.34 2.332l-16.522-3.015a2.888 2.888 0 01-2.359-2.748 2.891 2.891 0 012.165-2.906l16.522-4.22a2.872 2.872 0 013.492 2.093z"
                fill="#fff"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M77.382 45.701a3.704 3.704 0 014.504 2.692 3.72 3.72 0 01-2.68 4.517.815.815 0 01-.112.021 3.719 3.719 0 012.846 4.294 3.706 3.706 0 01-4.307 2.997l-16.598-3.024a3.715 3.715 0 01-3.041-3.53 3.717 3.717 0 012.79-3.734l16.598-4.233zm2.916 3.09a2.067 2.067 0 00-2.51-1.508L61.19 51.516a2.084 2.084 0 00-1.56 2.095 2.08 2.08 0 001.7 1.981l16.597 3.024a2.07 2.07 0 002.402-1.68 2.085 2.085 0 00-1.625-2.418l-9.485-.637a.817.817 0 01-.025-1.628l9.663-.94a2.088 2.088 0 001.442-2.522z"
                fill="#333"
            />
        </Svg>
    );
}

export default SvgGrass;
