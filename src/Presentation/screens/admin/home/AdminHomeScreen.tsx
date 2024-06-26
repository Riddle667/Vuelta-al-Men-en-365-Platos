import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';

export const AdminHomeScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Bienvenido Administrador!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.adminButton}
            onPress={() => navigation.navigate('CreateProductScreen')}  
          >
            <Image 
              style={styles.icon}
              source={require('../../../../../assets/product-icon.png')}
            />
            <Text style={styles.adminButtonText}>Crear Producto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.adminButton}
            onPress={() => navigation.navigate('ListProductsScreen')}  
          >
            <Image 
              style={styles.icon}
              source={require('../../../../../assets/product-icon.png')}
            />
            <Text style={styles.adminButtonText}>Listar Productos</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.divisor}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.adminButton}
            onPress={() => navigation.navigate('CreateCategoryScreen')}  
          >
            <Image 
              style={styles.icon}
              source={require('../../../../../assets/category-icon.png')}
            />
            <Text style={styles.adminButtonText}>Crear Categoría</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.adminButton}
            onPress={() => navigation.navigate('ListCategoriesScreen')}  
          >
            <Image 
              style={styles.icon}
              source={require('../../../../../assets/category-icon.png')}
            />
            <Text style={styles.adminButtonText}>Listar Categorías</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.divisor}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.adminButton}
            onPress={() => navigation.navigate('ChangePasswordScreen')}  
          >
            <Image 
              style={styles.icon}
              source={require('../../../../../assets/password-icon.png')}
            />
            <Text style={styles.adminButtonText}>Cambiar Contraseña</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}