import "react-native-gesture-handler";

// For WebView:
import { WebView } from 'react-native-webview';

//For RenderHTML:
import RenderHtml from 'react-native-render-html';

// import * as React from "react";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
	StyleSheet,
	Text,
	View,
	SectionList,
	SafeAreaView,
	TouchableHighlight,
	Image,
	Linking,
} from "react-native";

import { StatusBar } from "expo-status-bar";

const ListItem = ({ item }) => {
	const [visibilityOuter, setVisibilityOuter] = useState(false);
	const [visibilityInner, setVisibilityInner] = useState(false);
	
	// Simpler HTML for testing:
	// const HTML = "<h1 style='color: red;'>Hello World</h1>";

	const HTML = `<!DOCTYPE html>
	<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="generator" content="pandoc" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
		<title>Solution</title>
		<style>
			html {
				line-height: 1.5;
				font-family: Georgia, serif;
				font-size: 20px;
				color: #1a1a1a;
				background-color: #fdfdfd;
			}
			body {
				margin: 0 auto;
				max-width: 36em;
				padding-left: 50px;
				padding-right: 50px;
				padding-top: 50px;
				padding-bottom: 50px;
				hyphens: auto;
				word-wrap: break-word;
				text-rendering: optimizeLegibility;
				font-kerning: normal;
			}
			@media (max-width: 600px) {
				body {
					font-size: 0.9em;
					padding: 1em;
				}
			}
			@media print {
				body {
					background-color: transparent;
					color: black;
					font-size: 12pt;
				}
				p, h2, h3 {
					orphans: 3;
					widows: 3;
				}
				h2, h3, h4 {
					page-break-after: avoid;
				}
			}
			p {
				margin: 1em 0;
			}
			a {
				color: #1a1a1a;
			}
			a:visited {
				color: #1a1a1a;
			}
			img {
				max-width: 100%;
			}
			h1, h2, h3, h4, h5, h6 {
				margin-top: 1.4em;
			}
			h5, h6 {
				font-size: 1em;
				font-style: italic;
			}
			h6 {
				font-weight: normal;
			}
			ol, ul {
				padding-left: 1.7em;
				margin-top: 1em;
			}
			li > ol, li > ul {
				margin-top: 0;
			}
			blockquote {
				margin: 1em 0 1em 1.7em;
				padding-left: 1em;
				border-left: 2px solid #e6e6e6;
				color: #606060;
			}
			code {
				font-family: Menlo, Monaco, 'Lucida Console', Consolas, monospace;
				font-size: 85%;
				margin: 0;
			}
			pre {
				margin: 1em 0;
				overflow: auto;
			}
			pre code {
				padding: 0;
				overflow: visible;
			}
			.sourceCode {
			 background-color: transparent;
			 overflow: visible;
			}
			hr {
				background-color: #1a1a1a;
				border: none;
				height: 1px;
				margin: 1em 0;
			}
			table {
				margin: 1em 0;
				border-collapse: collapse;
				width: 100%;
				overflow-x: auto;
				/* display: block; */
				font-variant-numeric: lining-nums tabular-nums;
			}
			table caption {
				margin-bottom: 0.75em;
			}
			tbody {
				margin-top: 0.5em;
				border-top: 1px solid #1a1a1a;
				border-bottom: 1px solid #1a1a1a;
			}
			th {
				border-top: 1px solid #1a1a1a;
				padding: 0.25em 0.5em 0.25em 0.5em;
			}
			td {
				padding: 0.125em 0.5em 0.25em 0.5em;
			}
			header {
				margin-bottom: 4em;
				text-align: center;
			}
			#TOC li {
				list-style: none;
			}
			#TOC a:not(:hover) {
				text-decoration: none;
			}
			code{white-space: pre-wrap;}
			span.smallcaps{font-variant: small-caps;}
			span.underline{text-decoration: underline;}
			div.column{display: inline-block; vertical-align: top; width: 50%;}
			div.hanging-indent{margin-left: 1.5em; text-indent: -1.5em;}
			ul.task-list{list-style: none;}
			
			h1{
				text-align: center;
				font-size: 28px
			}
			h2, h3{
				font-size: 22px
			}
		</style>
		<!--[if lt IE 9]>
			<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script>
		<![endif]-->
	</head>
	<body>
	<header role="solution">
	</header>
	<main role="solution">
	<h1>Problem of the Week<br />
	Problem A and Solution<br />
	Cupcake Caper</h1>
	<p style="text-align:center"><img src="images/cupcake.png" style="height:25mm" alt="" /></p>
	<h2>Problem</h2>
	<p>Mei Xing is having a party and is decorating 20 cupcakes for her friends. There is icing on all of the cupcakes, and she lines them up to add extra decorations.</p>
	<ul>
	<li><p>There is nothing but icing on the first cupcake. There is a cherry on the second cupcake. There are chocolate chips on the third cupcake. There are sprinkles on the fourth cupcake.</p></li>
	<li><p>In fact, she puts a cherry on every second cupcake.</p></li>
	<li><p>She also puts chocolate chips on every third cupcake.</p></li>
	<li><p>She also puts sprinkles on every fourth cupcake.</p></li>
	</ul>
	<ol type="A">
	<li><p>How many cupcakes have no extra decorations on them?</p></li>
	<li><p>Do any of the cupcakes get all three decorations? Justify your answer.</p></li>
	</ol>
	<h2>Solution</h2>
	<p>One way to solve this problem is to make a chart keeping track of the decorations</p>
	<table border="1">
	<tbody>
	<tr class="odd">
	<th style="text-align: right;"><font size="4">cupcake</font></th>
	<th style="text-align: center;">1</th>
	<th style="text-align: center;">2</th>
	<th style="text-align: center;">3</th>
	<th style="text-align: center;">4</th>
	<th style="text-align: center;">5</th>
	<th style="text-align: center;">6</th>
	<th style="text-align: center;">7</th>
	<th style="text-align: center;">8</th>
	<th style="text-align: center;">9</th>
	<th style="text-align: center;">10</th>
	<th style="text-align: center;">11</th>
	<th style="text-align: center;">12</th>
	<th style="text-align: center;">13</th>
	<th style="text-align: center;">14</th>
	<th style="text-align: center;">15</th>
	<th style="text-align: center;">16</th>
	<th style="text-align: center;">17</th>
	<th style="text-align: center;">18</th>
	<th style="text-align: center;">19</th>
	<th style="text-align: center;">20</th>
	</tr>
	<tr class="even">
	<th style="text-align: right;"><font size="4">cherry</font></th>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	</tr>
	<tr class="odd">
	<th style="text-align: right;"><font size="4">ch. chips</font></th>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	</tr>
	<tr class="even">
	<th style="text-align: right;"><font size="3">sprinkles</font></th>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	</tr>
	</tbody>
	</table>
	<p>A) From this chart we can see there are a total of 7 cupcakes that have no extra decorations.<br />
	B) We can also see that there is only one cupcake that has all three extra decorations.</p>
	<h3>Teacher’s Notes</h3>
	<p>It was important in the description of this problem to include the first bullet point when explaining the decorating strategy. Without that starting point, the solution is actually unknown. If are only given the fact that cherries are placed on every second cupcake, without indicating how the pattern starts, our chart could look like this:</p>
	<table border="1">
	<tbody>
	<tr class="odd">
	<th style="text-align: right;"><font size="4">cupcake</font></th>
	<th style="text-align: center;">1</th>
	<th style="text-align: center;">2</th>
	<th style="text-align: center;">3</th>
	<th style="text-align: center;">4</th>
	<th style="text-align: center;">5</th>
	<th style="text-align: center;">6</th>
	<th style="text-align: center;">7</th>
	<th style="text-align: center;">8</th>
	<th style="text-align: center;">9</th>
	<th style="text-align: center;">10</th>
	<th style="text-align: center;">11</th>
	<th style="text-align: center;">12</th>
	<th style="text-align: center;">13</th>
	<th style="text-align: center;">14</th>
	<th style="text-align: center;">15</th>
	<th style="text-align: center;">16</th>
	<th style="text-align: center;">17</th>
	<th style="text-align: center;">18</th>
	<th style="text-align: center;">19</th>
	<th style="text-align: center;">20</th>
	</tr>
	<tr class="even">
	<th style="text-align: right;"><font size="4">cherry</font></th>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	</tr>
	<tr class="odd">
	<td style="text-align: right;"><font size="4">ch. chips</font></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	</tr>
	<tr class="even">
	<th style="text-align: right;"><font size="3">sprinkles</font></th>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;"></td>
	<td style="text-align: center;">✓</td>
	</tr>
	</tbody>
	</table>
	<p>In this solution, only three of the cupcakes have no decorations, which is different from the answer we expected. In general, when we are describing a situation that is repeating some pattern, providing a clear initial setup is crucial. Without that precision, the results may be unpredictable.</p>
	<p>Another thing to notice in the chart of the original solution is that all of the cupcakes that have no extra decorations are labelled with a prime number (with the exception of the first one). <em>Note that 1 is not a prime number.</em> A natural question to ask would be, if we extended the problem to a larger number of cupcakes, will all cupcakes (after the first one) that have no decorations be labelled with prime numbers? The answer is no. For example, we would find out pretty quickly that the 25th cupcake would have no extra decorations.</p>
	<p>However, we can predict that the cupcakes labelled with any number that is <em>coprime</em> with 2 and coprime with 3 will not have any extra decorations. To say two numbers are coprime, is to say that they do not have any positive factors in common except for 1. For example, 25 is not a prime number, and its positive factors are 1, 5, and 25. The positive factors of 2 are 1 and 2, and the positive factors of 3 are 1 and 3. So 2 and 25 are coprime and 3 and 25 are coprime. Note that we do not have to check if the number is coprime with 4, since a number will be coprime with 4 exactly when it is coprime with 2. That is, if the number is coprime with 2, then it does not have a factor of 2, and so cannot have a factor of 2 or 4 (the factors of 4). If a number is not coprime with 2, then it has a factor of 2, which automatically means it shares a factor with 4 and so is not coprime<br />
	with 4.</p>
	</main>
	</body>
	</html>
	
	`;
	return (
		<>
			<TouchableHighlight
			onPress={() => {
				if (visibilityOuter) {
					setVisibilityOuter(false);
				} else {
					setVisibilityOuter(true);
				}
			}}
			style={{flex: 1}}
			underlayColor="#e5e5e5"
			activeOpacity="1">
				<View
					style={[
						styles.item,
						{ borderWidth: 2, borderColor: "#e5e5e5", padding: 15, flex:1 , },
					]}>
					<View style={{ flexDirection: "row", flex: 1, }}>
						{/* For Images: */}
						{/* <Image
							style={{
								width: 50,
								height: 50,
								margin: 10,
								borderRadius: 20,
								flexDirection: 'row',
							}}
							source={{
								uri: item.image,
							}}
						/> */}
						<View style={{ flexDirection: "column", flex: 1 }}>
							<Text style={[styles.header]}>{item.header}</Text>
							<Text style={[styles.text]}>{item.text}</Text>
							<Text style={[styles.date]}>{item.date}</Text>
						</View>
						<View style={styles.chevron}>
							{!visibilityOuter && (
								<MaterialCommunityIcons
								name="chevron-right"
								size={25}></MaterialCommunityIcons>
								)}
							{visibilityOuter && (
								<MaterialCommunityIcons
								name="chevron-down"
								size={25}></MaterialCommunityIcons>
								)}
						</View>
					</View>
					{visibilityOuter && (
						<View
						style={{
							flexDirection: "column",
							paddingTop: 10,
							flex: 1,
						}}>
							<Text style={styles.fullText}>{item.fullText}</Text>
							<TouchableHighlight
								onPress={() => {
									if (visibilityInner) {
										setVisibilityInner(false);
									} else {
										setVisibilityInner(true);
									}
								}}
								underlayColor="#e5e5e5"
								activeOpacity="1">
								<View
									style={[
										styles.item,
										{ borderWidth: 2, borderColor: "#e5e5e5", padding: 15, flex: 1, },
									]}>
									<View style={{ flexDirection: "row" }}>
										{/* For Images: */}
										{/* <Image
											style={{
												width: 50,
												height: 50,
												margin: 10,
												borderRadius: 20,
												flexDirection: 'row',
											}}
											source={{
												uri: item.image,
											}}
										/> */}
										<View style={{ flexDirection: "column", flex: 1 }}>
											<Text style={[styles.solutionHeader]}>{item.solutionHeader}</Text>
										</View>
										<View style={styles.chevron}>
											{!visibilityInner && (
												<MaterialCommunityIcons
												name="chevron-right"
												size={25}></MaterialCommunityIcons>
												)}
											{visibilityInner && (
												<MaterialCommunityIcons
												name="chevron-down"
												size={25}></MaterialCommunityIcons>
												)}
										</View>
									</View>
									{visibilityInner && (
										<View
										style={{
											flexDirection: "column",
											paddingTop: 10,
											flex: 1,
										}}>
											<Text style={styles.fullText}>{item.solutionText}</Text>
											{/* None of these worked: */}
											{/* <View style={{flex: 1}}>
												<WebView style={{width: 300,}} source={HTML}/>
												<WebView style={{width: 300,}} source={{uri: "../HTML/POTWA-20-A-N-01-S.html"}}/>
												<WebView style={{width: 300,}} source={require("../HTML/POTWA-20-A-N-01-S.html")}/>
												<WebView style={{width: 300,}} source={{ html: '<h1>Hello</h1>' }}/>
											</View> */}
										
											{/* HTML: */}
											{/* <HTML source={{ html: HTML }} contentWidth={700} /> */}

											{/* This works: */}
											<RenderHtml
												contentWidth={1000}
												source={{html: HTML}}
												// source={{uri: "../HTML/POTWA-20-A-N-01-S.html"}}
												// source={require("../HTML/POTWA-20-A-N-01-S.html")}
												// source={{ html: HTML }}
											/>
											<Text>Even more text here</Text>
										</View>
									)}
									
								</View>
							</TouchableHighlight>
						</View>
					)}
				</View>
			</TouchableHighlight>
		</>
	);
};

class Archive extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<SectionList
					ListHeaderComponent={
						<View style={styles.container}>
							<StatusBar style="dark" />
							<View
								style={{
									justifyContent: "center",
									alignItems: "center",
									margin: 25,
									flex: 1,
									overflow: "scroll",
								}}>
								<Text
									style={{
										color: "black",
										fontSize: 30,
										fontWeight: "900",
									}}>
									Problem Archive
								</Text>
							</View>
							<TouchableHighlight
								underlayColor="#0c8091"
								style={styles.button}
								onPress={() =>
									this.props.navigation.navigate("SearchandFilter")
								}>
								<Text style={styles.buttonText}>Search and Filter</Text>
							</TouchableHighlight>
						</View>
					}
					contentContainerStyle={{ paddingHorizontal: 10 }}
					stickySectionHeadersEnabled={false}
					sections={data}
					renderItem={({ item, section }) => {
						return <ListItem item={item} />;
					}}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		padding: 2,
		backgroundColor: "#00bdda",
		borderRadius: 30,
		margin: 15,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	buttonText: {
		fontSize: 20,
		fontWeight: "700",
	},
	container: {
		flex: 1,
	},
	sectionHeader: {
		fontWeight: "800",
		fontSize: 18,
		color: "black",
		marginTop: 20,
		marginBottom: 5,
	},
	itemText: {
		marginTop: 5,
		color: "black",
	},
	itemSubheader: {
		marginTop: 5,
		fontWeight: "800",
		color: "black",
	},
	//For the clickable list items:
	chevron: {
		justifyContent: "center",
		padding: 5,
		paddingRight: 20,
		paddingLeft: 20,
		flexDirection: "row",
	},
	date: {
		color: "#4a4d52",
	},
	header: {
		color: "black",
		marginTop: 5,
		fontWeight: "800",
	},
	solutionHeader: {
		color: "black",
		marginTop: 0,
		fontWeight: "800",
	},
	item: {
		margin: -1,
	},
	text: {
		marginTop: 5,
		color: "black",
	},
});

const data = [
	{
		data: [
			{
				key: "1",
				header: "Problem Title 1",
				text: "Problem text goes here ....",
				fullText: (
					<Text>
						Some problem text here. Click the{" "}
						<Text
							style={{ color: "#00bdda"}}
							onPress={() =>
								Linking.openURL(
									"../HTML/POTWA-20-A-N-01-S.html"
								)
							}
							// style={{ color: "#00bdda", fontSize: 20 }}
							// onPress={() =>
							// 	Linking.openURL(
							// 		"../HTML/POTWA-20-A-N-01-S.html"
							// 	)
							// }
							>
							link
						</Text>
						. More text here. Click the below box to reveal the solution.
					</Text>
				),
				solutionText: "Solution text here",
				solutionHeader: "Solution header here",
				date: "October 7, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "2",
				header: "Problem Title 2",
				text: "Problem text goes here ....",
				fullText: (
					<Text>
						In addition to POTW, the CEMC also offers mathematics and computer
						science contests such as the Beaver Computing Challenge (BCC). The
						BCC will take place during the weeks of November 8 and 15, and there
						is a challenge offered at the Grade 5/6, 7/8, and 9/10 levels.
						Registration closes on October 27, 2021. To get more information
						please visit:{" "}
						<Text
							style={{ color: "#00bdda" }}
							onPress={() =>
								Linking.openURL(
									"http://www.cemc.uwaterloo.ca/contests/bcc.html"
								)
							}>
							http://www.cemc.uwaterloo.ca/contests/bcc.html
						</Text>
						.
					</Text>
				),
				date: "September 30, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "3",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "4",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "5",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "6",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "7",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "8",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "9",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "10",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
			{
				key: "11",
				header: "Header",
				text: "Did you know? The CEMC has ....",
				date: "May 24, 2021",
				image: "https://picsum.photos/100",
			},
		],
	},
];

export default Archive;