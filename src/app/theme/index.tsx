import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        fontSize: "18px",
        lineHeight: "16px"
      }
    },
    MuiNativeSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent"
        }
      }
    },
    MuiFormControl: {
      root: {
        width: "100%"
      }
    }
  },
  props: {
    MuiInput: {
      disableUnderline: true
    }
  }
});
export default theme;
