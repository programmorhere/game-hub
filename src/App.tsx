import { useBreakpointValue, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show when={isLargeScreen}>
        <GridItem area="aside" bg={"gold"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
