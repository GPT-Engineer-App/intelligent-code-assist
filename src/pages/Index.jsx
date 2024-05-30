import { Container, Text, VStack, Box, Heading, IconButton, Image } from "@chakra-ui/react";
import { FaCode, FaBrain, FaCloud, FaShieldAlt, FaUsers, FaRocket, FaCogs, FaSync, FaFileCode, FaBug, FaClipboardCheck, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

const features = [
  { icon: FaCode, title: "Natural Language Understanding (NLU) Module", description: "Converts user requirements written in natural language into actionable development tasks." },
  { icon: FaBrain, title: "Reinforcement Learning Module", description: "Continuously improves the platform’s performance based on feedback." },
  { icon: FaSync, title: "Transfer Learning Module", description: "Enhances the initial AI models using pre-trained models." },
  { icon: FaProjectDiagram, title: "Multi-Modal Learning Module", description: "Integrates and analyzes multiple data modalities." },
  { icon: FaCogs, title: "CI/CD Module", description: "Automates the build, test, and deployment processes." },
  { icon: FaLaptopCode, title: "Microservices Module", description: "Facilitates the deployment and management of microservices architectures." },
  { icon: FaCloud, title: "Cloud-Native Module", description: "Leverages cloud-native technologies for deployment." },
  { icon: FaShieldAlt, title: "Security and Privacy Module", description: "Enhances security and ensures data privacy." },
  { icon: FaUsers, title: "UI/UX Module", description: "Improves the user interface and user experience." },
  { icon: FaUsers, title: "Collaboration Module", description: "Facilitates real-time collaboration among developers." },
  { icon: FaFileCode, title: "Code Generation Agent", description: "Automatically generates code based on requirements." },
  { icon: FaClipboardCheck, title: "Code Review Agent", description: "Automates the code review process." },
  { icon: FaBug, title: "Testing Agent", description: "Automates the generation and execution of test cases." },
  { icon: FaRocket, title: "Deployment Agent", description: "Manages the deployment of applications." },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Intelligent Development Assistance Platform (IDAP)
          </Heading>
          <Text fontSize="lg">Revolutionizing the software development lifecycle with AI-driven automation, optimization, and enhancement.</Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTcxNzA1NDkxN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Development" borderRadius="md" />
        {features.map((feature, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <VStack align="start">
              <IconButton aria-label={feature.title} icon={<feature.icon />} size="lg" isRound />
              <Heading as="h3" size="md">
                {feature.title}
              </Heading>
              <Text>{feature.description}</Text>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
