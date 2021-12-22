import "react-native-gesture-handler";

import * as React from "react";
import {
	Text,
	View,
	TouchableHighlight,
	StyleSheet,
	SectionList,
	FlatList,
	Image,
	SafeAreaView,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import { Fragment } from 'react';

const ListItem = ({ item }) => {
	return (
		<View style={styles.item}>
			<Image
				source={{
					uri: item.uri,
				}}
				style={styles.itemPhoto}
				resizeMode="cover"
			/>
			<Text style={styles.itemText}>{item.text}</Text>
			<Text style={styles.itemName}>{item.name}</Text>
		</View>
	);
};

const Home = () => {
	return (
		<SafeAreaView>
			<SectionList
				ListHeaderComponent={
					<Fragment>
						<StatusBar style="dark" />
						<SafeAreaView>
							<View style={{
									justifyContent: "center",
									alignItems: "center",
									overflow: "visible",
								}}>
								<Text style={{
									color: "black",
									fontSize: 30,
									paddingTop: 20,
									fontWeight: "900",
								}}>Problem of the Week</Text>
							</View>
							<View style={styles.imgContainer}>
								<Image
									style={styles.img}
									source={require("../assets/cemc_logo_black_centred.png")}
								/>
							</View>
							<Text style={styles.subtitle}>Current Problems</Text>
						</SafeAreaView>
					</Fragment>
				}
				ListFooterComponent={
					<Fragment>
						<Text style={[styles.subtitle, {marginTop: 30,}]}>Past Problems</Text>
						<TouchableHighlight underlayColor="#0c8091" style={styles.button} onPress={() => navigation.navigate("Archive")}>
							<Text style={styles.buttonText}>Problem Archive</Text>
						</TouchableHighlight>
					</Fragment>
				}
				contentContainerStyle={{ paddingHorizontal: 10 }}
				stickySectionHeadersEnabled={true}
				sections={SECTIONS}
				renderSectionHeader={({ section }) => (
					<>
						<Text style={styles.sectionHeader}>{section.title}</Text>
						{section.horizontal ? (
							<FlatList
								horizontal
								data={section.data}
								renderItem={({ item }) => <ListItem item={item} />}
								showsHorizontalScrollIndicator={false}
							/>
						) : null}
					</>
				)}
				renderItem={({ item, section }) => {
					if (section.horizontal) {
						return null;
					}
					return <ListItem item={item} />;
				}}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 2,
		backgroundColor: "#00bdda",
		borderRadius: 30,
		margin: 15,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	buttonText: {
		fontSize: 20,
		fontWeight: "700",
	},
  container: {
		flex: 1,
		paddingTop: 20,
	},
	sectionHeader: {
		fontWeight: "800",
		fontSize: 0.01,
		color: "pink",
	},
	subtitle: {
		fontSize: 24,
		color: "black",
    fontWeight: "700",
		paddingLeft: 20,
		marginBottom: -10,
	},
	item: {
		margin: 10,
	},
	itemPhoto: {
		width: 100,
		height: 100,
	},
	itemName: {
		color: "black",
		fontWeight: "600",
		fontSize: 15,
		marginTop: 5,
	},
	itemText: {
		color: "#252729",
		marginTop: 5,
		fontSize: 10,
	},
	img: {
		// alignItems: "center",
		// justifyContent: "center",
		height: 250,
		width: "90%",
		resizeMode: "contain",
		marginBottom: 20,
	},
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const SECTIONS = [
	{
		title: "Current Problems",
		horizontal: true,
		data: [
			{
				key: "1",
				text: "Item text 1",
				name: "Problem Title",
				uri: "https://picsum.photos/100",
			},
			{
				key: "2",
				text: "Item text 2",
				name: "Problem Title",
				uri: "https://picsum.photos/300",
			},

			{
				key: "3",
				text: "Item text 3",
				name: "Problem Title",
				uri: "https://picsum.photos/200",
			},
			{
				key: "4",
				text: "Item text 4",
				name: "Problem Title",
				uri: "https://picsum.photos/400",
			},
			{
				key: "5",
				text: "Item text 5",
				name: "Problem Title",
				uri: "https://picsum.photos/500",
			},
		],
	},
];

export default Home;