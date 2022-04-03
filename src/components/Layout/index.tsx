import Box from "@material-ui/core/Box";

export const LayOut: React.FC = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        justifyContent="center"
        m={2}
        p={2}
        bgcolor="background.paper"
      >
        {children}
      </Box>
    </div>
  );
};
