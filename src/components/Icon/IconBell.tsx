import Svg, { Path } from 'react-native-svg';

const IconBell = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      clipRule="evenodd"
      d="M18.3 10.947V8.263C18.3 4.804 15.48 2 12 2S5.7 4.804 5.7 8.263v2.684C5.7 13.9 3 14.616 3 16.316 3 17.836 6.51 19 12 19s9-1.163 9-2.684c0-1.7-2.7-2.416-2.7-5.369Z"
      stroke="#2B2E3C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 19.924a35.01 35.01 0 0 1-2.647-.095C9.716 21.02 10.788 22 12 22c1.212 0 2.284-.98 2.647-2.17a35.01 35.01 0 0 1-2.647.095Z"
      fill="#2B2E3C"
    />
  </Svg>
);

export default IconBell;
