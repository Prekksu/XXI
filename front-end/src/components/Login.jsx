import {
	Center,
	Flex,
	Image,
	Input,
	InputGroup,
	Stack,
	InputLeftAddon,
	Button,
	Box,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaPhone } from "react-icons/fa";
import { api } from "../api/api";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Login() {
	const nav = useNavigate();
	const dispatch = useDispatch();
	const [account, setAccount] = useState({
		phoneMail: "",
		password: "",
	});

	async function onSubmit() {
		try {
			const response = await api.get("/Users/login", {
				params: {
					phoneMail: account.phoneMail,
					password: account.password,
				},
			});
			const status = response.data[0];
			localStorage.setItem("user", JSON.stringify(status));

			if (status) {
				nav("/");
			} else {
				alert("Wrong number/password");
			}
		} catch (error) {
			console.error(error);
		}
	}

	async function inputHandler(event) {
		const { value, id } = event.target;
		const tempObj = { ...account };
		tempObj[id] = value;
		setAccount(tempObj);
	}
	return (
		<>
			<Center flexDir={"column"} w="100vw" maxW="420px" paddingTop="20px">
				<Image
					src="https://m.21cineplex.com/images/mtixlogo.jpg"
					w="100vw"
					maxW="296px"
					h="120px"
				/>
				<Stack spacing={4} w="100vw" maxW="420px" padding="15px">
					<InputGroup h="34px">
						<InputLeftAddon
							bgColor="#eee"
							padding={"6px 12px"}
							color="#555"
							border="1px solid #ccc"
						>
							<FaPhone fontSize="16px" />
						</InputLeftAddon>
						<Input
							padding={"6px 12px"}
							type="tel"
							placeholder="Handphone number"
							border="1px solid #ccc"
							w="100vw"
							maxW="355px"
							id="phoneMail"
							value={account.phoneMail}
							onChange={inputHandler}
						/>
					</InputGroup>

					<InputGroup h="34px">
						<InputLeftAddon
							bgColor="#eee"
							padding={"6px 12px"}
							color="#555"
							border="1px solid #ccc"
						>
							<FaLock fontSize="16px" />
						</InputLeftAddon>
						<Input
							padding={"6px 12px"}
							type="password"
							placeholder="PIN/Password"
							border="1px solid #ccc"
							w="100vw"
							maxW="355px"
							id="password"
							value={account.password}
							onChange={inputHandler}
						/>
					</InputGroup>
				</Stack>

				<Flex
					justifyContent={"space-between"}
					w="100%"
					padding="10px"
					paddingBottom="20px"
					flexDir={"column"}
				>
					<Flex
						justifyContent={"space-between"}
						w="100%"
						padding="10px"
						paddingBottom="20px"
						borderBottom={"1px solid #333"}
					>
						<Button
							color="white"
							bgColor={"#006666"}
							border="1px solid #005350"
							padding="6px 12px"
							w="59px"
							onSubmit={onSubmit}
						>
							Login
						</Button>
						<Flex
							justifyContent={"end"}
							flexDir={"column"}
							textDecor={"underline"}
						>
							<Link to="/forgot-password">Forgot/Password</Link>
						</Flex>
					</Flex>

					<Box paddingY={"10px"} fontSize="13.6px">
						<Flex>
							<Link to="/register">
								New Member, <u>Register M-Tix </u>
							</Link>
						</Flex>
						<Flex pt="10px">
							If you have receive OTP Activation code through SMS,
						</Flex>
						<u>Please activate your M-Tix here</u>
					</Box>
				</Flex>
			</Center>
		</>
	);
}
