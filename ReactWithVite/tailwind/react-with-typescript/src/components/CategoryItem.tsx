import { Flex, useHovered, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";


interface CategoryItemProps {
    icon: React.ReactNode;
    title: string;
    onClick?: () => void;
    active: boolean;
}

export const CategoryItem = ({icon, title, active, onClick}: CategoryItemProps) => {
    const {hovered, ref} = useHover();
    return (
       <Flex
            ref={ref}
            onClick={onClick}
            align="center"
            justify="center"
            gap="xs"
            p="md"
            direction="column"
            style={{
                border: "1px solid",
                borderColor: active ? "red" : "white",
                borderRadius: "8px",
                padding: "10px",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                boxShadow: hovered ? "0 0px 10px rgba(0, 0, 0, 0.1)" : "none",
            }}
            >
            {icon}
            <Text>{title}</Text>

       </Flex>
    )
}
export default CategoryItem