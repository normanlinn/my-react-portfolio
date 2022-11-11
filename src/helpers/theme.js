const changeThemeFunction = (currentTheme) => {
  // console.log(document.styleSheets);

  const selectedCSSProps = Array.from(document.styleSheets).reduce(
    (prevStyleSheet, currStyleSheet) =>
      (prevStyleSheet = [
        ...prevStyleSheet,
        ...Array.from(currStyleSheet.cssRules).reduce(
          (prevCSSRule, currCSSRule) =>
            (prevCSSRule =
              currCSSRule.selectorText === ":root"
                ? [
                    ...prevCSSRule,
                    ...Array.from(currCSSRule.style).filter((item) =>
                      item.startsWith("--selected")
                    ),
                  ]
                : prevCSSRule),
          []
        ),
      ]),
    []
  );

  selectedCSSProps.forEach((value) =>
    document.documentElement.style.setProperty(
      value,
      `var(--${currentTheme}${value.substring(10)})`
    )
  );
};

export default changeThemeFunction;
