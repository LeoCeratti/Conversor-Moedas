import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Drawer} from 'expo-router/drawer'
import { Image, StyleSheet } from 'react-native';

export default function Layout(){

        return <GestureHandlerRootView>
            <Drawer>
                
                <Drawer.Screen 
                name ='home'
                options={{
                    title:'Conversor de Moedas',
                    drawerLabel: "Home",
                    headerTitleAlign: 'center',                   
                    drawerIcon:()=>(
                        <Image 
                        source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}
                        style={{ width: 24, height: 20}}
                        />
                    )
                    }}
                    />
        
                <Drawer.Screen
                 name ='usd'
                 options={{
                    title:'USD/BRL',
                    drawerLabel: "Dólar",
                    headerTitleAlign: 'center',
                    drawerIcon:()=>(
                        <Image
                            source={{ uri: 'https://flagcdn.com/w40/us.png' }}
                            style={{ width: 24, height: 16 }}
                        />
                        )
                        }}
                        />


                <Drawer.Screen
                 name ='eur'
                 options={{
                    title:'EUR/BRL',
                    drawerLabel: "Euro",
                    headerTitleAlign: 'center',
                    drawerIcon:()=>(
                        <Image
                            source={{ uri: 'https://flagcdn.com/w320/eu.png' }}
                            style={{ width: 24, height: 16 }}
                        />
                        )
                    }}/>


                <Drawer.Screen
                 name ='btc' 
                 options={{
                    title:'BTC/BRL',
                    drawerLabel: "Bitcoin",
                    headerTitleAlign: 'center',
                    drawerIcon:()=>(
                        <Image
                            source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' }}
                            style={{ width: 24, height: 24 }}
                        />
                        )
                    }}/>
            </Drawer>
        </GestureHandlerRootView>

}

