import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import { View, Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Constants from 'expo-constants';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import {createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu,
          // for routing
            navigationOptions: ({ navigation }) => ({
              headerLeft:()=> <Icon name="menu" size={24} 
              color= 'white'
              onPress={ () => navigation.toggleDrawer() } />          
            })  
        },
        Dishdetail: { screen: Dishdetail }
    },
    {
        initialRouteName: 'Menu',
        // navigator
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            }
        }
    }
);

export const MenuNavi = createAppContainer(MenuNavigator);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: ()=><Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

export const HomeNavi = createAppContainer(HomeNavigator);


const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: ()=><Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

export const ContactNavi = createAppContainer(ContactNavigator);


const AboutNavigator = createStackNavigator({
    About: { screen: About }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: ()=><Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

export const AboutNavi = createAppContainer(AboutNavigator);



 const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );



const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavi,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='home'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          )
        }
      },
       About: 
      { screen: AboutNavi,
        navigationOptions: {
          title: 'About',
          drawerLabel: 'About',
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='info-circle'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          )        },
      },
    Menu: 
      { screen: MenuNavi,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu',
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='list'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          )
        }, 
      },
      Contact: 
      { screen: ContactNavi,
        navigationOptions  : {
          title: 'Contact Us',
          drawerLabel: 'Contact Us',
          drawerIcon: ({ tintColor }) => (
            <Icon
              name='address-card'
              type='font-awesome'            
              size={22}
              color={tintColor}
            />
          )
        }, 
      },
       
}, {
  drawerBackgroundColor: '#D1C4E9',
  contentComponent:CustomDrawerContentComponent
});
export const MainNavi = createAppContainer(MainNavigator);


class Main extends Component {
  constructor(props) {
    super(props);
   this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

 onDishSelect(dishId) {
      this.setState({selectedDish: dishId})
  }

  render() {
 
    return (
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <MainNavi />
        </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Main;