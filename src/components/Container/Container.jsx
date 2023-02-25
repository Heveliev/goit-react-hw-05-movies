import { Section } from "./Container.styled";

export const Container = ({children}) => {
    return (
        <Section>
            {children}
        </Section>
    )
}
