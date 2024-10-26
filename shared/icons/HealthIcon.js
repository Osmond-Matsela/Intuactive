import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function HealthIcon({strokeWidth, strokeColor}) {
  return (
    <Svg width="41" height="29" viewBox="0 0 41 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M15.1251 28.8333C14.5577 28.8333 14.0501 28.6691 13.6022 28.3406C13.1543 28.0121 12.8258 27.5941 12.6168 27.0864L8.49592 16.2916H2.58342C2.07578 16.2916 1.65056 16.1196 1.30775 15.7756C0.964949 15.4316 0.792949 15.0064 0.791754 14.5C0.79056 13.9935 0.96256 13.5683 1.30775 13.2243C1.65295 12.8803 2.07817 12.7083 2.58342 12.7083H9.75009C10.1383 12.7083 10.4745 12.8128 10.7588 13.0218C11.0431 13.2309 11.2593 13.5145 11.4074 13.8729L15.1251 23.6375L23.3668 1.9135C23.5758 1.40586 23.9043 0.987807 24.3522 0.659334C24.8001 0.330862 25.3077 0.166626 25.8751 0.166626C26.4424 0.166626 26.9501 0.330862 27.398 0.659334C27.8459 0.987807 28.1744 1.40586 28.3834 1.9135L32.5043 12.7083H38.4168C38.9244 12.7083 39.3502 12.8803 39.6942 13.2243C40.0382 13.5683 40.2096 13.9935 40.2084 14.5C40.2072 15.0064 40.0352 15.4322 39.6924 15.7774C39.3496 16.1226 38.9244 16.294 38.4168 16.2916H31.2501C30.8619 16.2916 30.5263 16.1871 30.2432 15.9781C29.9601 15.7691 29.7433 15.4854 29.5928 15.127L25.8751 5.36246L17.6334 27.0864C17.4244 27.5941 17.0959 28.0121 16.648 28.3406C16.2001 28.6691 15.6924 28.8333 15.1251 28.8333Z" fill={strokeColor}/>
    </Svg>
    
  )
}