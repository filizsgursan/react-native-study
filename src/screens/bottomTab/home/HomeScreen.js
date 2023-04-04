// React
import React, { useEffect, useLayoutEffect, useState } from 'react'

// React Native
import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity
}
  from 'react-native'
import { VStack, FlatList } from "native-base"
import { Icon, SearchBar } from 'react-native-elements'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { setProductsData } from '../../../redux/slices/productsSlice'

// Components
import ProductCard from '../../../components/ProductCard/ProductCard'

export default function HomeScreen() {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [search, setSearch] = useState("")
  const [data, setData] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const products = useSelector(
    (state) => state.products.setProductsData
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: props => (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ fontSize: 24, color: "#FFFFFF", fontWeight: "bold" }}>
            E-Market
          </Text>
        </View>
      ),

    })
  }, [navigation])

  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    fetch('https://5fc9346b2af77700165ae514.mockapi.io/products')
      .then(response => response.json())
      .then(json => dispatch(setProductsData(json)))

  }, [])

  useEffect(() => {
    setData(products)
  }, [products])


  const updateSearch = (search) => {
    setSearch(search)
    let filteredData = products?.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    setData(filteredData)
  }

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={{
          marginVertical: 16,
          alignItems: "center"
        }}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> :
        <></>
    );
  };

  // const loadMoreItem = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  return (

    <VStack style={{ flex: 1, backgroundColor: "#FFFFFF" }}>

      <VStack style={{ borderBottomColor: "#F2F2F2", borderBottomWidth: 1 }}>
        <SearchBar
          placeholder="Search"
          theme="light"
          platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          inputContainerStyle={{ backgroundColor: "rgba(118, 118, 128, 0.12)", height: 34 }}
          searchIcon={{ color: "#3C3C43" }}
          onChangeText={updateSearch}
          value={search}
        />
      </VStack>

      <VStack
        style={{
          paddingHorizontal: 16,
          marginTop: 19,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>

        <Text
          style={{
            fontSize: 18,
            lineHeight: 21.94,
            alignItems: "center"
          }}>
          Filters:
        </Text>

        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 8,
            backgroundColor: "#D9D9D9",
            width: 158,
            height: 36,
            alignItems: "center"
          }}
          activeOpacity={0.9}
        >
          <Text
            style={{
              fontSize: 14
              , lineHeight: 17.07,
              textAlignVertical: "center",
              color: "#000000"
            }}
          >Select Filter
          </Text>

        </TouchableOpacity>
      </VStack>

      <FlatList
        contentContainerStyle={{
          paddingTop: 15,
          paddingBottom: 40,
          width: screenWidth
        }}
        numColumns={2}
        data={data}

        renderItem={({ item }) => {
          return (
            <KeyboardAvoidingView
              keyboardVerticalOffset={350}
              behavior={"position"}
            >
              <ProductCard
                product={item}
                isProductsContent={true}
                style={{
                  marginLeft: 16,
                  width: screenWidth / 2 - 24,
                  marginBottom: 15,
                }}
                products={data}

              />
            </KeyboardAvoidingView>
          )
        }}

        keyExtractor={item => item.id}
        ListFooterComponent={renderLoader}
      // onEndReached={loadMoreItem}
      // onEndReachedThreshold={0}

      />

    </VStack>
  )
}