import React from 'react'
import {View, StyleSheet, Image} from 'react-native'



const CustomStaticMap = (props) => {
	const {lat,long,hgt,wdt,zoom,lang,theme} = props

	const mapUri = `https://static-maps.yandex.ru/1.x/?lang=${lang}&ll=${long},${lat}&z=${zoom}&l=map&size=${wdt},${hgt}&pt=${long},${lat},pm2rdm`;

	return(
		<View style={styles.wrapper}>
			<Image
				style={[styles.customMap, {height:hgt,width:wdt}]}
				source={mapUri}
			/>
			
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	customMap:{
		borderColor:'#000',
		borderStyle: 'solid',
		borderWidth: 1,
		resizeMode: 'contain',
		objectFit:'contain',
		overflow:'hidden'
	}

})

export default CustomStaticMap
